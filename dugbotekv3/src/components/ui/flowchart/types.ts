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

export type ContentItem = 
  | { type: 'text'; value: string; style?: React.CSSProperties }
  | { type: 'image'; src: string; alt?: string; style?: React.CSSProperties };

export interface Connection {
  from: {
    cardId: string;
    side: 'top' | 'left' | 'bottom' | 'right';
  };
  to: {
    cardId: string;
    side: 'top' | 'left' | 'bottom' | 'right';
  };
  lineType: 'solid' | 'dotted';
}

export type ConnectionPoint = {
  x: number;
  y: number;
};

export type ConnectionSide = 'top' | 'left' | 'bottom' | 'right'; 