import { makeStyles } from '@material-ui/core'

const tableStyles = makeStyles({
  tablecontainer: {
    width: '100%',
  },
  table: {
    border: '1.5px solid #1D1D1D',
  },
  tablehead: {
    backgroundColor: '#C7D8F0',
    border: '1.5px solid #1D1D1D',
  },
  tablebody: {
    border: '1.5px solid #1D1D1D',
  },
  tablecell: {
    borderTop: 'none',
    borderRight: '1.5px solid #1D1D1D',
    borderBottom: 'none',
    borderLeft: '1.5px solid #1D1D1D',
  },
})

export default tableStyles
