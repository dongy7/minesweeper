export const GRID = {
  empty: 0,
  bomb: -1,
};

export const hashLocation = (x, y) => {
  return `${x}x${y}`;
};

export const decodeHashedLocation = (hash) => {
  const re = /([0-9]+)x([0-9]+)/;
  const match = re.exec(hash);
  return {
    x: parseInt(match[1], 10),
    y: parseInt(match[2], 10),
  };
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

export const initRevealGrid = (width, height) => {
  let grid = new Array(height);
  for (let y = 0; y < height; y++) {
    grid[y] = new Array(width);
    for (let x = 0; x < width; x++) {
      grid[y][x] = false;
    }
  }

  return grid;
};

export const cloneGrid = (grid) => {
  const clone = new Array(grid.length);
  for (let y = 0; y < grid.length; y++) {
    clone[y] = grid[y].slice(0);
  }

  return clone;
};

export const computeRevealGrid = (grid, locations) => {
  const clone = cloneGrid(grid);
  for (const hashedLocation of Object.keys(locations)) {
    const location = decodeHashedLocation(hashedLocation);
    clone[location.y][location.x] = true;
  }

  return clone;
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

export const initGameBoard = (width, height, bombCount) => {
  let count = 0;
  let bombPositions = {};
  let grid = initGrid(width, height);

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
    revealGrid: initRevealGrid(width, height),
    flagGrid: initRevealGrid(width, height),
    countGrid: getBombCountBoard(grid),
  };
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

export const findLocationsToReveal = (grid, bombPositions, countGrid, x, y) => {
  if (grid[y][x] === GRID.bomb) {
    return bombPositions;
  }

  const cache = {};
  const toReveal = {};
  testLocation(grid, countGrid, x, y, cache, toReveal);

  return toReveal;
};
