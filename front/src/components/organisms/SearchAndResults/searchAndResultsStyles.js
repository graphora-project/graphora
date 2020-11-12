import { makeStyles } from '@material-ui/core'

const searchAndResultsStyles = makeStyles({
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    overflowY: 'scroll',
    padding: '30px',
    paddingTop: '50px',
    border: '1px solid black',
    borderTopWidth: '0px',
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
    border: '1px solid black',
    width: '100%',
    borderTopWidth: '0px',
  },
})

export default searchAndResultsStyles
