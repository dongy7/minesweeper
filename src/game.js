export const GRID = {
  empty: 0,
  bomb: -1,
};

const initGrid = (width, height) => {
  let grid = new Array(height);
  for (let y = 0; y < height; y++) {
    grid[y] = new Array(width);
    for (let x = 0; x < width; x++) {
      grid[y][x] = GRID.empty;
    }
  }

  return grid;
};

const hashLocation = (x, y) => {
  return `${x}x${y}`;
};

export const initGameBoard = (width, height) => {
  let count = 0;
  let bombPositions = {};
  let grid = initGrid(width, height);
  const bombCount = Math.round(width * height / 5);

  while (count < bombCount) {
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    const location = hashLocation(randomX, randomY);

    if (bombPositions[location]) {
      continue;
    }

    grid[randomY][randomX] = GRID.bomb;
    bombPositions[location] = true;
    count++;
  }

  return {
    grid,
    bombPositions,
  };
};

const getNeighborLocations = (grid, x, y) => {
  const locations = [];
  for (let j = y - 1; j <= y + 1; j++) {
    for (let i = x - 1; i <= x + 1; i++) {
      if (i === x && j === y) {
        continue;
      }

      if (j >= 0 && j < grid.length && i >= 0 && i < grid[j].length) {
        locations.push({
          x: i,
          y: j,
        });
      }
    }
  }

  return locations;
};

const getBombCount = (grid, x, y) => {
  if (grid[y][x] === GRID.bomb) {
    return GRID.bomb;
  }

  let count = 0;
  const neighbors = getNeighborLocations(grid, x, y);
  for (const cell of neighbors) {
    if (grid[cell.y][cell.x] === GRID.bomb) {
      count++;
    }
  }

  return count;
}

export const getBombCountBoard = (grid) => {
  let countGrid = initGrid(grid[0].length, grid.length);
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      countGrid[y][x] = getBombCount(grid, x, y);
    }
  }

  return countGrid;
};

export const testLocation = (grid, countGrid, x, y, cache, toReveal) => {
  const hash = hashLocation(x, y);
  if (cache[hash]) {
    return;
  }

  cache[hash] = true;

  if (countGrid[y][x] >= 0) {
    toReveal[hash] = true;

    if (countGrid[y][x] > 0) {
      return;
    }
  }

  const neighbors = getNeighborLocations(grid, x, y);
  for (const cell of neighbors) {
    testLocation(grid, countGrid, cell.x, cell.y, cache, toReveal);
  }
};

export const findLocationsToReveal = (grid, countGrid, x, y) => {
  const cache = {};
  const toReveal = {};
  testLocation(grid, countGrid, x, y, cache, toReveal);

  return toReveal;
};
