import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import RollsPalette from '../theme/RollsPaletteNew';

export default makeStyles((theme: Theme) => ({
  root: {
    background: `linear-gradient(45deg, ${RollsPalette.rolls_darkest} 30%, ${RollsPalette.rolls_dark} 90%)`,
    height: '100%',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0),
  },
  avatar: {
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.secondary.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  textField: {
    borderColor: `${RollsPalette.rolls_white}`,
  },
  submit: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
  },
  grid_wrap: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid_item: {
    padding: theme.spacing(1),
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#444444',
    color: `${RollsPalette.rolls_white}`,
    height: 60,
  },
  title: {
    color: `${RollsPalette.rolls_white}`,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
  titleSmallMargin: {
    color: `${RollsPalette.rolls_white}`,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  navigator: {
    color: `${RollsPalette.rolls_white}`,
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    fontSize: 35,
    flex: 1,
    align: 'right',
    cursor: 'pointer',
  },
  instructions: {
    color: `${RollsPalette.rolls_white}`,
    fontSize: 18,
  },
  dragContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  drag: {
    backgroundColor: '#aaaaaa',
    height: 300,
    width: '100%',
  },
  dragText: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  circle: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
  whiteP: {
    color: 'white',
    fontSize: '18px',
  },
  column_three: {
    width: '33%',
  },
  align_right: {
    textAlign: 'right',
  },
  align_left: {
    textAlign: 'left',
  },
  align_center: {
    textAlign: 'center',
  },
}));
