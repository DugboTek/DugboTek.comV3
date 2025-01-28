import { CSSProperties, ReactNode } from 'react';

export interface FlowChartConfig {
  grid: {
    width: number;    // Total grid width in px
    height: number;   // Total grid height in px
  };
  cards: FlowCard[];
  connections: Connection[];
}

export interface FlowCard {
  id: string;
  position: {
    x: number;        // Top-right X coordinate
    y: number;        // Top-right Y coordinate
    width: number;    // Card width
    height: number;   // Card height
  };
  content: {
    top?: ContentItem;
    left?: ContentItem;
    center?: ContentItem;
    right?: ContentItem;
    bottom?: ContentItem;
  };
}

export type ConnectionSide = 'top' | 'right' | 'bottom' | 'left';

export interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ContentItem {
  type: 'text';
  value: string | ReactNode;
  style?: CSSProperties;
}

export interface Connection {
  from: {
    cardId: string;
    side: ConnectionSide;
  };
  to: {
    cardId: string;
    side: ConnectionSide;
  };
  lineType: 'solid' | 'dotted';
}

export type ConnectionPoint = {
  x: number;
  y: number;
}; 