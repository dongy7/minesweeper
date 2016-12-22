import {
  initGameBoard,
  getBombCountBoard,
  GRID,
  findLocationsToReveal,
  decodeHashedLocation,
} from '../src/game';

test('grid initialized with correct dimensions', () => {
  const width = 10;
  const height = 5;
  const bombs = 5;
  const grid = initGameBoard(width, height, bombs).grid;
  expect(grid.length).toBe(height);
  expect(grid[0].length).toBe(width);
})

test('correct number of bombs placed', () => {
  const width = 10;
  const height = 5;
  const bombs = 5;
  const grid = initGameBoard(width, height, bombs).grid;
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      count += grid[y][x];
    }
  }

  expect(count).toBe(bombs * GRID.bomb);
});

test('bomb count grid reflects actual bomb locations', () => {
  const grid = [
  //  0   1    2
    [-1,  0,  -1],  // 0
    [ 0, -1,   0],  // 1
    [ 0, -1,  -1],  // 2
  ];

  const bombCountGrid = getBombCountBoard(grid);
  expect(bombCountGrid[0][0]).toBe(GRID.bomb);
  expect(bombCountGrid[0][1]).toBe(3);
  expect(bombCountGrid[0][2]).toBe(GRID.bomb);
  expect(bombCountGrid[1][0]).toBe(3);
  expect(bombCountGrid[1][1]).toBe(GRID.bomb);
  expect(bombCountGrid[1][2]).toBe(4);
  expect(bombCountGrid[2][0]).toBe(2);
  expect(bombCountGrid[2][1]).toBe(GRID.bomb);
  expect(bombCountGrid[2][2]).toBe(GRID.bomb);
});

test('revealing logic works', () => {
  const grid = [
  //  0   1    2  3  4
    [-1,  0,  -1, 0, 0],  // 0
    [ 0, -1,   0, 0, 0],  // 1
    [ 0, -1,  -1, 0, 0],  // 2
  ];

  const bombCountGrid = getBombCountBoard(grid);
  let locations;
  let x = 0;
  let y = 1;
  locations = findLocationsToReveal(grid, bombCountGrid, x, y);
  expect(Object.keys(locations).length).toBe(1);

  x = 4;
  y = 0;
  locations = findLocationsToReveal(grid, bombCountGrid, x, y);
  expect(Object.keys(locations).length).toBe(6);
});

test('hash decoding works', () => {
  const x = 15;
  const y = 20;
  const hash = `${x}x${y}`;
  const location = decodeHashedLocation(hash);
  expect(location.x).toBe(x);
  expect(location.y).toBe(y);
});
