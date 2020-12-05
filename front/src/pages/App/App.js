import React, { useState, useContext, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { When } from 'react-if'
import { GraphoraContext } from '../../components/GraphoraContext'
import { HistoryBar } from '../../components/molecules/HistoryBar'
import { DivWithDimensions } from '../../components/molecules/DivWithDimensions'
import { TouchScreenWarning } from '../../components/molecules/TouchScreenWarning'
import { SearchAndResults } from '../../components/organisms/SearchAndResults'
import { Graph } from '../../components/organisms/Graph'
import { PersistentSidebar } from '../../components/organisms/PersistentSidebar/PersistentSidebar'
import { ReactComponent as GoBackButton } from '../../icons/go-back.svg'
import { ReactComponent as UnCollapseButton } from '../../icons/uncolapse.svg'
import { ReactComponent as CollapseButton } from '../../icons/colapse.svg'
import { usePersistentSidebar, useModal } from '../../hooks'
import appStyles from './appStyles'

const desktopBreakPoint = 1300

const App = () => {
  const { history, goBackInHistory } = useContext(GraphoraContext)
  const [graphDimension, setGraphDimensions] = useState({ width: 0, heihgt: 0 })
  const [
    sidebarIsOpen,
    toggleSidebarIsOpen,
    setSidebarIsOpen,
  ] = usePersistentSidebar(true)
  const classes = appStyles()
  const usingTouchScreen = useMediaQuery('(pointer: coarse)')
  const [modalIsOpen, handleCloseModal] = useModal(true)

  let collapseBarContainerStyles = classes.collapseBarContainer
  let sidebarGraphStyles = sidebarIsOpen
    ? classes.sidebarIsOpenStyles
    : classes.sidebarIsCloseStyles

  if (window.innerWidth < desktopBreakPoint) {
    sidebarGraphStyles = classes.mobileLayout
    collapseBarContainerStyles = classes.collapseBarContainerMobile
  }

  useEffect(() => {
    if (window.innerWidth < desktopBreakPoint) {
      setSidebarIsOpen(true)
    }
    // eslint-disable-next-line
  }, [window.innerWidth])

  return (
    <div className={classes.appContainer}>
      <When condition={usingTouchScreen}>
        <TouchScreenWarning
          showMessage={modalIsOpen}
          handleCloseMessage={handleCloseModal}
        />
      </When>
      <div className={sidebarGraphStyles}>
        <PersistentSidebar isOpen={sidebarIsOpen}>
          <div className={collapseBarContainerStyles}>
            <IconButton onClick={toggleSidebarIsOpen}>
              <CollapseButton />
            </IconButton>
          </div>
          <SearchAndResults />
        </PersistentSidebar>
        <div className={classes.graphContainer}>
          <div className={classes.topBarContainer}>
            <When condition={!sidebarIsOpen}>
              <Button
                variant="contained"
                onClick={toggleSidebarIsOpen}
                className={classes.unCollapseButton}
              >
                <UnCollapseButton />
              </Button>
            </When>
            <When condition={history.length > 1}>
              <IconButton onClick={() => goBackInHistory(1)}>
                <GoBackButton />
              </IconButton>
            </When>
            <div className={classes.historyBarContainer}>
              <HistoryBar />
            </div>
          </div>
          <DivWithDimensions onResize={setGraphDimensions}>
            <Graph
              width={graphDimension.width}
              height={graphDimension.height}
            />
          </DivWithDimensions>
          <div className={classes.bottomBarContainer}>
            <When condition={history.length}>
              <Typography>level: {history.length - 1}</Typography>
            </When>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
