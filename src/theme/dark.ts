import { createTheme } from '@material-ui/core/styles';
import theme from './default';
import RollsPalette from './RollsPaletteNew';

export default (locale: object) =>
  createTheme(
    {
      ...theme,
      palette: {
        ...theme.palette,
        primary: {
          main: `${RollsPalette.rolls_success}`,
        },
        secondary: {
          main: '#221825',
        },
        type: 'dark',
      },
    },
    locale,
  );