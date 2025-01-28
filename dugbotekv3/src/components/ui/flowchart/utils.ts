import { FlowCard, ConnectionPoint, ConnectionSide } from './types';

export const getConnectionPoint = (
  card: FlowCard,
  side: ConnectionSide
): ConnectionPoint => {
  const { x, y, width, height } = card.position;
  
  switch(side) {
    case 'top':
      return { x: x + width / 2, y };
    case 'bottom':
      return { x: x + width / 2, y: y + height };
    case 'left':
      return { x, y: y + height / 2 };
    case 'right':
      return { x: x + width, y: y + height / 2 };
  }
};

export const calculatePath = (
  start: ConnectionPoint,
  end: ConnectionPoint,
  fromSide: ConnectionSide,
  toSide: ConnectionSide
): string => {
  // Calculate control points for smooth curves
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  
  let controlPoint1: ConnectionPoint;
  let controlPoint2: ConnectionPoint;
  
  // Adjust control points based on connection sides
  switch(fromSide) {
    case 'right':
      controlPoint1 = { x: start.x + 50, y: start.y };
      break;
    case 'left':
      controlPoint1 = { x: start.x - 50, y: start.y };
      break;
    case 'top':
      controlPoint1 = { x: start.x, y: start.y - 50 };
      break;
    case 'bottom':
      controlPoint1 = { x: start.x, y: start.y + 50 };
      break;
  }
  
  switch(toSide) {
    case 'right':
      controlPoint2 = { x: end.x + 50, y: end.y };
      break;
    case 'left':
      controlPoint2 = { x: end.x - 50, y: end.y };
      break;
    case 'top':
      controlPoint2 = { x: end.x, y: end.y - 50 };
      break;
    case 'bottom':
      controlPoint2 = { x: end.x, y: end.y + 50 };
      break;
  }
  
  return `M ${start.x} ${start.y} C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${end.x} ${end.y}`;
}; 