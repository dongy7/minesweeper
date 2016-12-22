export const CLICK_CELL = 'CLICK_CELL';
export const FLAG_CELL = 'FLAG_CELL';
export const RESET = 'RESET';

let clickCount = 0;

export const clickCell = (x, y) => {
  return {
    type: CLICK_CELL,
    x,
    y,
    firstClick: (clickCount++ === 0),
  };
};

export const flagCell = (x, y) => {
  return {
    type: FLAG_CELL,
    x,
    y,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
