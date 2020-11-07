import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import { Search } from '../../components/organisms/Search'
// import { Graph } from '../../components/organisms/Graph'
import { TableInOut, TableMinMaxProm } from '../../components/molecules/Tables'
// import { HistoryBar } from '../../components/molecules/HistoryBar'
import { GraphoraContext } from '../../components/GraphoraContext'
import { Appbar } from '../../components/organisms/Appbar'
import { When } from '../../components/utils/When'
import appStyles from './appStyles'

const App = () => {
  const { currentWord } = useContext(GraphoraContext)
  const classes = appStyles()

  return (
    <div className={classes.appContainer}>
      <Appbar />
      <Search />
      <When predicate={currentWord}>
        <div className={classes.resultsContainer}>
          <div className={classes.resultsHeader}>
            <Typography className={classes.currentWord} variant="h6">
              {currentWord}
            </Typography>
          </div>
          <div className={classes.tablesContainer}>
            <TableInOut direction="Out" />
            <TableInOut direction="In" />
            <TableMinMaxProm />
          </div>
        </div>
      </When>
    </div>
  )
}

export default App
