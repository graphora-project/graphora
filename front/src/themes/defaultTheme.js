import { createMuiTheme } from '@material-ui/core/styles'

export const defaultTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: '0px',
        },
      },
    },
  },
  palette: {
    background: {
      default: 'fff',
    },
    blue: {
      liberty: '#485696',
      lightLiberty: '#ECEFFF',
      softLiberty: '#C7D8F0',
      mediumDarkLiberty: '#5666AE',
      darkLiberty: '#273161',
    },
  },
})
