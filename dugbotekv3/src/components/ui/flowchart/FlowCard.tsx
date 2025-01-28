import React from 'react';
import { FlowCard as FlowCardType, ContentItem } from './types';

interface FlowCardProps {
  card: FlowCardType;
  scale: number;
}

const ContentSection: React.FC<{ content?: ContentItem; scale: number }> = ({ content, scale }) => {
  if (!content) return null;

  const scaledStyle = {
    ...(content.style || {}),
    fontSize: content.style?.fontSize 
      ? `${parseFloat(content.style.fontSize as string) * scale}px`
      : undefined,
    padding: content.style?.padding
      ? content.style.padding.toString().split(' ').map(p => 
          `${parseFloat(p) * scale}px`
        ).join(' ')
      : undefined
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      {content.type === 'text' ? (
        <div
          className="text-sm overflow-hidden text-ellipsis h-full w-full flex items-center justify-center"
          style={scaledStyle}
        >
          {typeof content.value === 'string' ? content.value : 
            React.cloneElement(content.value as React.ReactElement, {
              className: `${(content.value as React.ReactElement).props.className} transform scale-${scale}`
            })
          }
        </div>
      ) : (
        <img
          src={content.src}
          alt={content.alt || ''}
          className="max-w-full max-h-full object-contain"
          style={scaledStyle}
        />
      )}
    </div>
  );
};

export const FlowCard: React.FC<FlowCardProps> = React.memo(({ card, scale }) => {
  const { position, content } = card;
  const { x, y, width, height } = position;

  const scaledStyle = {
    left: x * scale,
    top: y * scale,
    width: width * scale,
    height: height * scale,
    boxShadow: `0 ${3 * scale}px ${6 * scale}px rgba(0,0,0,0.16)`,
    borderRadius: `${8 * scale}px`
  };

  return (
    <div
      className="absolute bg-white flex items-stretch"
      style={scaledStyle}
    >
      <div className="w-full h-full grid grid-cols-[auto_1fr_auto]">
        {/* Left Section */}
        {content.left && (
          <div className="h-full flex items-center">
            <ContentSection content={content.left} scale={scale} />
          </div>
        )}

        {/* Center Section */}
        {content.center && (
          <div className="h-full flex items-center">
            <ContentSection content={content.center} scale={scale} />
          </div>
        )}

        {/* Right Section */}
        {content.right && (
          <div className="h-full flex items-center">
            <ContentSection content={content.right} scale={scale} />
          </div>
        )}
      </div>
    </div>
  );
}); 