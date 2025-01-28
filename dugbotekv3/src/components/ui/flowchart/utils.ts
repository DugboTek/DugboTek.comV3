import { FlowCard, ConnectionSide } from './types';

interface Point {
  x: number;
  y: number;
}

export const getConnectionPoint = (
  card: FlowCard,
  side: ConnectionSide
): Point => {
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

export function calculatePath(start: Point, end: Point): string {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  
  // Use control points at 1/3 and 2/3 of the distance for a smoother curve
  const cp1x = start.x + dx * 0.33;
  const cp2x = start.x + dx * 0.66;
  
  return `M ${start.x},${start.y} C ${cp1x},${start.y + dy * 0.1} ${cp2x},${end.y - dy * 0.1} ${end.x},${end.y}`;
} 