import { makeStyles } from '@material-ui/core'

const paginatedMenuStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.blue.mediumDarkLiberty,
    color: 'white',
  },
  textInButton: {
    textTransform: 'capitalize',
    color: 'white',
  },
}))

export default paginatedMenuStyles
