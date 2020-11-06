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
})
