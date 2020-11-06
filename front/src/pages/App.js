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
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
  resultsContainer: {},
  searchContainer: {},
  graphContainer: {
    width: '100%',
  },
})

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const classes = appStyles()

  const toggleSideBar = () => setSidebarIsOpen(!sidebarIsOpen)

  return (
    <GraphoraProvider>
      <div className={classes.appContainer}>
        <div>
          <Drawer variant="persistent" anchor="left" open={sidebarIsOpen}>
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
    </GraphoraProvider>
  )
}

export default App
