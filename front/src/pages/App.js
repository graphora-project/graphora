import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import { Search } from '../components/organisms/Search'
import { Graph } from '../components/organisms/Graph'
import { ResultsTables } from '../components/organisms/ResultsTables'
import { HistoryBar } from '../components/molecules/HistoryBar'
import { GraphoraProvider } from '../components/GraphoraContext'

const appStyles = makeStyles({
  appContainer: {
    width: '100vw',
    height: '100vh',
  },
  contentContainerWithSidebarOpen: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
  contentContainerWithSidebarClose: {
    display: 'grid',
    gridTemplateColumns: '0% 100%',
  },
  sidebarContainer: {
    width: '100%',
  },
  drawer: {},
  drawerPaper: {
    width: '100%',
    maxWidth: '400px',
  },
  resultsContainer: {},
  graphContainer: {
    width: '100%',
  },
})

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const classes = appStyles()

  const contentContainer = sidebarIsOpen
    ? classes.contentContainerWithSidebarOpen
    : classes.contentContainerWithSidebarClose
  const toggleSideBar = () => setSidebarIsOpen(!sidebarIsOpen)

  return (
    <GraphoraProvider>
      <div className={classes.appContainer}>
        <div className={contentContainer}>
          <div className={classes.sidebarContainer}>
            <Drawer
              variant="persistent"
              anchor="left"
              open={sidebarIsOpen}
              className={classes.drawer}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Search />
              <div className={classes.resultsContainer}>
                <ResultsTables />
              </div>
            </Drawer>
          </div>
          <div className={classes.graphContainer}>
            <button onClick={toggleSideBar} type="button">
              toggle sidebar
            </button>
            <HistoryBar />
          </div>
        </div>
      </div>
    </GraphoraProvider>
  )
}

export default App
