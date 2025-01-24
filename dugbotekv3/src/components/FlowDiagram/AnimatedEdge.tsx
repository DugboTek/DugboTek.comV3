import React from 'react';
import { EdgeProps, getStraightPath } from 'reactflow';
import AnimatedPath from './AnimatedPath';

const AnimatedEdge: React.FC<EdgeProps> = ({ 
  sourceX, 
  sourceY, 
  targetX, 
  targetY, 
  style = {}, 
  markerEnd,
  data
}) => {
  const [edgePath] = getStraightPath({
    sourceX, 
    sourceY, 
    targetX, 
    targetY
  });

  return (
    <svg className="react-flow__edge animated-edge">
      <AnimatedPath 
        path={edgePath} 
        color={style?.stroke as string}
        progress={data?.progress || 1}
      />
      {markerEnd && (
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="10"
          markerHeight="10"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={style?.stroke || '#94a3b8'} />
        </marker>
      )}
    </svg>
  );
};

export default AnimatedEdge; 