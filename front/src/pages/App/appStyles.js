import { makeStyles } from '@material-ui/core'

const appStyles = makeStyles({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflowY: 'hidden',
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    overflowY: 'scroll',
    padding: '30px',
    paddingTop: '50px',
  },
  tablesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
  },
  resultsHeader: {
    display: 'flex',
    flexDirection: 'column',
  },
  currentWord: {
    textAlign: 'center',
    fontSize: '1rem',
  },
  resultsTools: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  helpLinkContainer: {
    alignSelf: 'center',
    paddingBottom: '75px',
    paddingRight: '30px',
    paddingLeft: '30px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
})

export default appStyles
