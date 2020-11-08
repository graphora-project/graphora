import React, { useContext, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { Search } from '../../components/organisms/Search'
import { Graph } from '../../components/organisms/Graph'
import { TableInOut, TableMinMaxProm } from '../../components/molecules/Tables'
import { HistoryBar } from '../../components/molecules/HistoryBar'
import { GraphoraContext } from '../../components/GraphoraContext'
import { Appbar } from '../../components/organisms/Appbar'
import { When } from '../../components/utils/When'
import { PersistentSidebar } from '../../components/organisms/PersistentSidebar/PersistentSidebar'
import { DivWithDimensions } from '../../components/molecules/DivWithDimensions'
import { ReactComponent as CSVFileIcon } from '../../icons/csvfile.svg'
import { ReactComponent as InfoIcon } from '../../icons/info.svg'
import appStyles from './appStyles'

const usePersistentSidebar = (initialIsOpen) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  const toggleIsOpen = () => setIsOpen(!isOpen)

  return [isOpen, toggleIsOpen]
}

const App = () => {
  const [graphDimension, setGraphDimensions] = useState({ width: 0, heihgt: 0 })
  const [sidebarIsOpen, toggleSidebarIsOpen] = usePersistentSidebar(false)
  const { currentWord } = useContext(GraphoraContext)
  const classes = appStyles()
  const thereAreResults = Boolean(currentWord)

  const sidebarGraphStyles = sidebarIsOpen
    ? classes.sidebarIsOpenStyles
    : classes.sidebarIsCloseStyles
  return (
    <div className={classes.appContainer}>
      <Appbar />
      <div className={sidebarGraphStyles}>
        <PersistentSidebar isOpen={sidebarIsOpen}>
          <Search />
          <When predicate={thereAreResults}>
            <div className={classes.resultsContainer}>
              <div className={classes.resultsHeader}>
                <Typography className={classes.currentWord} variant="h6">
                  {currentWord}
                </Typography>
                <div className={classes.resultsTools}>
                  <IconButton>
                    <CSVFileIcon />
                  </IconButton>
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </div>
              </div>
              <div className={classes.tablesContainer}>
                <TableInOut direction="Out" />
                <TableInOut direction="In" />
                <TableMinMaxProm />
              </div>
            </div>
          </When>
          <When predicate={!thereAreResults}>
            <div className={classes.helpLinkContainer}>
              <Typography>
                ¿Necesitas ayuda?&nbsp;
                <Link href="#" underline="always" color="inherit">
                  mira nuestros ejemplos.
                </Link>
              </Typography>
            </div>
          </When>
        </PersistentSidebar>
        <div>
          <button type="button" onClick={toggleSidebarIsOpen}>
            toggle sidebar
          </button>
          <HistoryBar />
          <DivWithDimensions onResize={setGraphDimensions}>
            <Graph
              width={graphDimension.width}
              height={graphDimension.height}
            />
          </DivWithDimensions>
        </div>
      </div>
    </div>
  )
}

export default App
