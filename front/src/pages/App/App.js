import React, { useState, useContext, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { When } from 'react-if'
import { GraphoraContext } from '../../components/GraphoraContext'
import { SearchAndResults } from '../../components/organisms/SearchAndResults'
import { Graph } from '../../components/organisms/Graph'
import { HistoryBar } from '../../components/molecules/HistoryBar'
import { PersistentSidebar } from '../../components/organisms/PersistentSidebar/PersistentSidebar'
import { DivWithDimensions } from '../../components/molecules/DivWithDimensions'
import { ReactComponent as GoBackButton } from '../../icons/go-back.svg'
import { ReactComponent as UnCollapseButton } from '../../icons/uncolapse.svg'
import { ReactComponent as CollapseButton } from '../../icons/colapse.svg'
import { usePersistentSidebar } from '../../hooks'
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
            <IconButton onClick={() => goBackInHistory(1)}>
              <GoBackButton />
            </IconButton>
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
