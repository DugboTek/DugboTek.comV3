import { ServiceProvider } from '../data/serviceProviders';

export const generateGridLayout = (providers: ServiceProvider[]) => {
  const gridWidth = 11;
  const gridHeight = 5;
  const totalCells = gridWidth * gridHeight;
  const layout = new Array(totalCells).fill(null);
  
  // Calculate number of empty cells (20-30% of total)
  const emptyCount = Math.floor(totalCells * (0.2 + Math.random() * 0.1));
  
  // Mark cells as empty (using undefined instead of null to distinguish from hidden providers)
  for (let i = 0; i < emptyCount; i++) {
    let position;
    do {
      position = Math.floor(Math.random() * totalCells);
    } while (layout[position] === undefined);
    layout[position] = undefined;
  }
  
  // Place initial visible providers (30-40% of providers)
  providers
    .filter(p => p.isInitiallyVisible)
    .forEach(provider => {
      let position;
      do {
        position = Math.floor(Math.random() * totalCells);
      } while (layout[position] !== null);
      layout[position] = provider;
    });
  
  // Place hidden providers in remaining cells
  const hiddenProviders = providers.filter(p => !p.isInitiallyVisible);
  const remainingCells = layout
    .map((cell, index) => ({ cell, index }))
    .filter(({ cell }) => cell === null)
    .map(({ index }) => index);
  
  // Shuffle remaining cells
  for (let i = remainingCells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [remainingCells[i], remainingCells[j]] = [remainingCells[j], remainingCells[i]];
  }
  
  // Place hidden providers
  hiddenProviders.forEach((provider, index) => {
    if (index < remainingCells.length) {
      layout[remainingCells[index]] = provider;
    }
  });
  
  return layout;
};

export const reshuffleGrid = (currentLayout: (ServiceProvider | null | undefined)[]) => {
  const providers = currentLayout.filter((cell): cell is ServiceProvider => cell !== null && cell !== undefined);
  return generateGridLayout(providers);
}; 