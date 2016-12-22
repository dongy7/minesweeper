import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { grey400 } from 'material-ui/styles/colors';
import GameBoard from './GameBoard';
import Navigation from './Navigation';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey400,
  },
});

const Game = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Navigation />
      <GameBoard />
    </div>
  </MuiThemeProvider>
);

export default Game;
