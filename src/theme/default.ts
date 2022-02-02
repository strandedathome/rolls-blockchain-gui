import RollsPalette from './RollsPaletteNew';

export default {
  palette: {
    primary: {
      main: '#a56930',
      contrastText: `${RollsPalette.rolls_white}`,
    },
    secondary: {
      main: `${RollsPalette.rolls_white}`,
      contrastText: `${RollsPalette.rolls_white}`,
    },
    danger: {
      main: '#dc3545',
      contrastText: `${RollsPalette.rolls_white}`,
    },
    success: {
      main: '#59A96A'
    }
  },
  drawer: {
    width: '100px',
  },
};
