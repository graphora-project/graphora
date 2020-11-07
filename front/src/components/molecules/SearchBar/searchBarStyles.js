import { makeStyles } from '@material-ui/core'

const searchBarStyles = makeStyles({
  searchBar: {
    borderStyle: 'solid',
    border: '1px',
    display: 'flex',
    boxSizing: 'border-box',
  },
  wordInput: {
    width: '100%',
    padding: '6px 8px',
  },
  searchButton: {
    borderStyle: 'inherit',
    borderLeft: '1px',
    borderRadius: '0px',
  },
})

export default searchBarStyles
