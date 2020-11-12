import { makeStyles } from '@material-ui/core'

const persistentSidebarStyles = makeStyles({
  paper: {
    position: 'relative',
    height: '100%',
  },
  root: {
    overflowY: 'hidden',
  },
})

export default persistentSidebarStyles
