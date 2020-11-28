import { makeStyles } from '@material-ui/core'

const touchScreenWarningStyles = makeStyles((theme) => ({
  messageContainer: {
    backgroundColor: theme.palette.blue.softLiberty,
    padding: '15px',
    width: '90%',
    maxWidth: '700px',
  },
  modalContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  title: {
    paddingBottom: '10px',
    textAlign: 'center',
  },
  description: {
    paddingBottom: '20px',
    textAlign: 'center',
  },
  textInButton: {
    textTransform: 'capitalize',
  },
}))

export default touchScreenWarningStyles
