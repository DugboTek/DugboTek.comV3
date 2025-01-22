import React, { useState, useEffect, useCallback } from 'react';
import { ServiceProvider } from '../../data/serviceProviders';
import { generateGridLayout } from '../../utils/gridUtils';

interface ProviderGridProps {
  providers: ServiceProvider[];
}

const GRID_ROWS = 5;
const GRID_COLS = 11;

const isButtonArea = (row: number, col: number) => {
  // Button will be in the middle row, spanning 3 columns
  const buttonRowStart = Math.floor(GRID_ROWS / 2);
  const buttonColStart = Math.floor(GRID_COLS / 2) - 1;
  const buttonColEnd = buttonColStart + 2;
  
  return row === buttonRowStart && col >= buttonColStart && col <= buttonColEnd;
};

export const ProviderGrid: React.FC<ProviderGridProps> = ({ providers }) => {
  const [gridLayout, setGridLayout] = useState<(ServiceProvider | null | undefined)[]>([]);
  const [visibleProviders, setVisibleProviders] = useState<string[]>([]);
  const [hoveredProvider, setHoveredProvider] = useState<string | null>(null);
  const [hoveredCells, setHoveredCells] = useState<Set<string>>(new Set());

  useEffect(() => {
    setGridLayout(generateGridLayout(providers));
  }, [providers]);

  // Handle hover for empty cells
  const handleEmptyCellHover = useCallback((cellId: string) => {
    setHoveredCells(prev => new Set([...prev, cellId]));
    
    // Start fade out after 1 second
    setTimeout(() => {
      setHoveredCells(prev => {
        const next = new Set(prev);
        next.delete(cellId);
        return next;
      });
    }, 1000);
  }, []);

  // Handle hover reveal for providers
  const handleHover = useCallback((provider: ServiceProvider) => {
    if (!visibleProviders.includes(provider.id)) {
      setHoveredProvider(provider.id);
      setVisibleProviders(prev => [...prev, provider.id]);
      
      // Hide after 1 second
      setTimeout(() => {
        setHoveredProvider(null);
        // Start fade out
        setTimeout(() => {
          setVisibleProviders(prev => 
            prev.filter(id => id !== provider.id)
          );
        }, 1000); // 1 second fade out
      }, 1000); // 1 second hold
    }
  }, [visibleProviders]);

  const renderGridCells = () => {
    return Array.from({ length: GRID_ROWS }).map((_, rowIndex) => (
      Array.from({ length: GRID_COLS }).map((_, colIndex) => {
        const index = rowIndex * GRID_COLS + colIndex;
        const provider = gridLayout[index];
        const cellId = `cell-${rowIndex}-${colIndex}`;

        // If it's the button area, return empty div
        if (isButtonArea(rowIndex, colIndex)) {
          return (
            <div
              key={`button-space-${rowIndex}-${colIndex}`}
              className="aspect-square bg-white"
            />
          );
        }

        if (provider === undefined) {
          const isHovered = hoveredCells.has(cellId);
          return (
            <div
              key={`empty-${index}`}
              style={{
                backgroundColor: isHovered ? '#E5E7EB' : '#F3F4F6',
                transition: isHovered ? 'none' : 'background-color 1000ms ease-in-out'
              }}
              className="aspect-square relative cursor-pointer"
              onMouseEnter={() => handleEmptyCellHover(cellId)}
            />
          );
        }

        if (provider === null) {
          const isHovered = hoveredCells.has(cellId);
          return (
            <div
              key={`unused-${index}`}
              style={{
                backgroundColor: isHovered ? '#E5E7EB' : '#F3F4F6',
                transition: isHovered ? 'none' : 'background-color 1000ms ease-in-out'
              }}
              className="aspect-square relative cursor-pointer"
              onMouseEnter={() => handleEmptyCellHover(cellId)}
            />
          );
        }

        const isVisible = provider.isInitiallyVisible || visibleProviders.includes(provider.id);
        const isHovered = hoveredProvider === provider.id;

        return (
          <div
            key={provider.id}
            style={{
              backgroundColor: isHovered ? '#E5E7EB' : '#F3F4F6',
              transition: isHovered ? 'none' : 'background-color 1000ms ease-in-out'
            }}
            className={`
              aspect-square relative cursor-pointer
              ${isHovered ? 'z-10 shadow-lg' : ''}
            `}
            onMouseEnter={() => !isVisible && handleHover(provider)}
          >
            <div
              className={`
                absolute inset-0 flex items-center justify-center
                transition-all duration-[1000ms] ease-in-out
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <div 
                className={`
                  w-8 h-8 relative transition-transform duration-200
                  ${isVisible ? 'scale-100' : 'scale-90'}
                `}
              >
                <img 
                  src={provider.logo} 
                  alt={provider.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        );
      })
    ));
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-clay-text mb-4">
          Connect to 100+ data providers
        </h2>
        <p className="text-clay-subtext text-lg mb-12">
          —with just a subscription
        </p>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-11 gap-[2px] bg-gray-300 rounded-lg overflow-hidden">
            {renderGridCells()}
          </div>

          {/* Centered button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 z-20">
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-[1.02] transition-transform duration-200 flex items-center gap-2">
              Browse all integrations
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderGrid; 