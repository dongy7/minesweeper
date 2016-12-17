import { initGameBoard } from '../src/game';

test('grid initialized with correct dimensions', () => {
  const width = 10;
  const height = 5;
  const grid = initGameBoard(width, height);
  expect(grid.length).toBe(height);
  expect(grid[0].length).toBe(width);
})

test('correct number of bombs placed', () => {
  const width = 10;
  const height = 5;
  const grid = initGameBoard(width, height);
  const bombCount = width * height / 5;
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      count += grid[y][x];
    }
  }

  expect(count).toBe(bombCount);
});
