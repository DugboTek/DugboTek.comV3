import React from 'react';
import { FlowCard as FlowCardType, ContentItem } from './types';

interface FlowCardProps {
  card: FlowCardType;
  scale: number;
}

const renderContent = (content: ContentItem | undefined) => {
  if (!content) return null;

  if (typeof content.value === 'string') {
    return <span style={content.style}>{content.value}</span>;
  }

  return <div style={content.style}>{content.value}</div>;
};

export const FlowCard: React.FC<FlowCardProps> = ({ card, scale }) => {
  const { position, content } = card;
  const borderWidth = 1 * scale;

  return (
    <div
      className="absolute bg-white rounded-lg shadow-sm border border-gray-200 flex items-stretch overflow-hidden"
      style={{
        left: position.x,
        top: position.y,
        width: position.width,
        height: position.height,
        borderWidth,
      }}
    >
      {renderContent(content.left)}
      {renderContent(content.center)}
      {renderContent(content.right)}
    </div>
  );
}; 