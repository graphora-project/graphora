import { makeStyles } from '@material-ui/core'

const appStyles = makeStyles((theme) => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflowY: 'hidden',
  },
  sidebarIsOpenStyles: {
    display: 'grid',
    gridTemplateColumns: '35% 65%',
    height: '100%',
    overflow: 'hidden',
  },
  sidebarIsCloseStyles: {
    display: 'grid',
    gridTemplateColumns: '0% 100%',
    height: '100%',
  },
  collapseBarContainer: {
    backgroundColor: theme.palette.blue.mediumDarkLiberty,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    border: '1px solid black',
    borderBottomWidth: '0px',
  },
  topBarContainer: {
    width: '100%',
    display: 'flex',
    marginTop: '10px',
  },
  historyBarContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  bottomBarContainer: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  unCollapseButton: {
    backgroundColor: theme.palette.blue.mediumDarkLiberty,
    borderRadius: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.palette.blue.liberty,
  },
  mobileLayout: {
    display: 'grid',
    gridTemplateColumns: '100% 0%',
    height: '100%',
    overflowX: 'hidden',
  },
  collapseBarContainerMobile: {
    backgroundColor: theme.palette.blue.mediumDarkLiberty,
    border: '1px solid black',
    borderBottomWidth: '0px',
    minHeight: '40px',
    '& > button': {
      display: 'none',
    },
  },
}))

export default appStyles
