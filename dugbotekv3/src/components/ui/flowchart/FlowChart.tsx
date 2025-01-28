import React from 'react';
import { FlowChartConfig, FlowCard as FlowCardType } from './types';
import { FlowCard } from './FlowCard';
import { getConnectionPoint, calculatePath } from './utils';
import { useFlowchartScaler } from './hooks/useFlowchartScaler';

interface FlowChartProps {
  config: FlowChartConfig;
  scalingOptions?: {
    minScale?: number;
    maxScale?: number;
  };
}

export const FlowChart: React.FC<FlowChartProps> = ({ config, scalingOptions }) => {
  const { grid, cards, connections } = config;

  const {
    containerRef,
    scale,
    scaledWidth,
    scaledHeight
  } = useFlowchartScaler({
    baseWidth: grid.width,
    baseHeight: grid.height,
    ...scalingOptions
  });

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
    >
      <div
        className="relative origin-center"
        style={{
          width: scaledWidth,
          height: scaledHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      >
        {/* SVG Layer for Connections */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 0 }}
          width={grid.width}
          height={grid.height}
          viewBox={`0 0 ${grid.width} ${grid.height}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {connections.map((connection, index) => {
            const fromCard = cards.find(card => card.id === connection.from.cardId);
            const toCard = cards.find(card => card.id === connection.to.cardId);

            if (!fromCard || !toCard) return null;

            const start = getConnectionPoint(fromCard, connection.from.side);
            const end = getConnectionPoint(toCard, connection.to.side);
            const pathData = calculatePath(
              start,
              end,
              connection.from.side,
              connection.to.side
            );

            const isFaded = connection.from.cardId.includes('fade') || connection.to.cardId.includes('fade');
            const strokeWidth = 2 * scale;

            return (
              <path
                key={index}
                d={pathData}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeDasharray={connection.lineType === 'dotted' ? `${5 * scale},${5 * scale}` : 'none'}
                className={isFaded ? "text-gray-400/30" : "text-gray-400"}
              />
            );
          })}
        </svg>

        {/* Cards Layer */}
        <div className="relative" style={{ zIndex: 1 }}>
          {cards.map((card) => (
            <FlowCard key={card.id} card={card} scale={scale} />
          ))}
        </div>
      </div>
    </div>
  );
}; 