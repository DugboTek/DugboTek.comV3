import { useEffect, useRef, useState, useCallback } from 'react';

interface ScalingOptions {
  minScale?: number;
  maxScale?: number;
  baseWidth: number;
  baseHeight: number;
}

export const useFlowchartScaler = ({
  minScale = 0.5,
  maxScale = 1.2,
  baseWidth,
  baseHeight
}: ScalingOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const calculateScale = useCallback((width: number, height: number) => {
    // Calculate both horizontal and vertical scale factors
    const horizontalScale = width / baseWidth;
    const verticalScale = height / baseHeight;

    // Use the smaller scale to ensure the chart fits both dimensions
    let newScale = Math.min(horizontalScale, verticalScale);

    // Additional scaling for very small screens
    if (width < 640) { // Mobile breakpoint
      newScale = Math.max(newScale, minScale); // Ensure minimum scale on mobile
    } else if (width < 1024) { // Tablet/small desktop breakpoint
      newScale = Math.max(newScale, minScale * 1.1); // Slightly larger on tablet
    } else {
      newScale = Math.max(newScale, minScale * 1.2); // Larger on desktop
    }

    // Apply max constraint
    return Math.min(newScale, maxScale);
  }, [baseWidth, baseHeight, minScale, maxScale]);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateScale = () => {
      const container = containerRef.current;
      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      setContainerSize({ width, height });
      setScale(calculateScale(width, height));
    };

    // Initial scale calculation
    updateScale();

    // Create resize observer
    const resizeObserver = new ResizeObserver(
      debounce((entries: ResizeObserverEntry[]) => {
        updateScale();
      }, 100)
    );

    // Observe both container and window resize
    resizeObserver.observe(containerRef.current);

    // Add window resize listener for viewport changes
    window.addEventListener('resize', updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, [calculateScale]);

  return {
    containerRef,
    scale,
    containerSize,
    scaledWidth: baseWidth * scale,
    scaledHeight: baseHeight * scale
  };
};

// Utility function for debouncing
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
} 