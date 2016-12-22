import {
  initGameBoard,
  getBombCountBoard,
  GRID,
  findLocationsToReveal,
  decodeHashedLocation,
  cloneGrid,
  initRevealGrid,
  computeRevealGrid,
  toggleLocation,
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

  const bombPositions = {
    '0x0': true,
    '0x2': true,
    '1x1': true,
    '2x1': true,
    '2x2': true,
  };

  const bombCountGrid = getBombCountBoard(grid);
  let locations;
  let x = 0;
  let y = 1;
  locations = findLocationsToReveal(grid, bombPositions, bombCountGrid, x, y);
  expect(Object.keys(locations).length).toBe(1);

  x = 4;
  y = 0;
  locations = findLocationsToReveal(grid, bombPositions, bombCountGrid, x, y);
  expect(Object.keys(locations).length).toBe(6);

  // should return all bomb locations if cell with bomb is clicked
  x = 0;
  y = 0;
  locations = findLocationsToReveal(grid, bombPositions, bombCountGrid, x, y);
  expect(Object.keys(locations).length).toBe(5);

  for (const key of Object.keys(bombPositions)) {
    expect(locations[key]).toBe(true);
  }
});

test('hash decoding works', () => {
  const x = 15;
  const y = 20;
  const hash = `${x}x${y}`;
  const location = decodeHashedLocation(hash);
  expect(location.x).toBe(x);
  expect(location.y).toBe(y);
});

test('cloning grid works', () => {
  const grid = [
  //  0   1    2
    [-1,  0,  -1],  // 0
    [ 0, -1,   0],  // 1
    [ 0, -1,  -1],  // 2
  ];

  const clone = cloneGrid(grid);
  expect(clone).toEqual(grid);

  grid[0][0] = 0;
  expect(grid[0][0]).toBe(0);
  expect(clone[0][0]).toBe(-1);
});

test('reveal grid initialization works', () => {
  const revealGrid = initRevealGrid(3, 3);

  expect(revealGrid).toEqual(
    [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ]
  );
});

test('reveal grid reflects new revealed locations', () => {
  const locationsToReveal = {
    '0x0': true,
    '1x1': true,
    '2x2': true,
  };

  const revealGrid = initRevealGrid(3, 3);
  const newRevealGrid = computeRevealGrid(revealGrid, locationsToReveal);

  expect(newRevealGrid[0][0]).toBe(true);
  expect(newRevealGrid[1][1]).toBe(true);
  expect(newRevealGrid[2][2]).toBe(true);
  expect(revealGrid[0][0]).toBe(false);
  expect(revealGrid[1][1]).toBe(false);
  expect(revealGrid[2][2]).toBe(false);
});

test('toggling a grid location works', () => {
  const flagGrid = initRevealGrid(3, 3);
  let toggledGrid = toggleLocation(flagGrid, 0, 0);
  expect(toggledGrid[0][0]).toBe(true);
  expect(flagGrid[0][0]).toBe(false);

  toggledGrid = toggleLocation(toggledGrid, 0, 0);
  expect(toggledGrid[0][0]).toBe(false);
  expect(flagGrid[0][0]).toBe(false);
});
