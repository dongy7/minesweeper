const GRID = {
  empty: 0,
  bomb: 1,
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

export const initGameBoard = (width, height) => {
  let count = 0;
  let bombPositions = {};
  let grid = initGrid();
  const bombCount = Math.round(width * height / 5);

  while (count < bombCount) {
    const randomX = Math.random() * width;
    const randomY = Math.random() * height;
    const location = `${randomX}x${randomY}`;

    if (bombPositions[location]) {
      continue;
    }

    grid[randomY][randomX] = GRID.bomb;
    bombPositions[location] = true;
  }

  return grid;
};
