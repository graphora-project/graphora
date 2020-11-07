import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { Search } from '../../components/organisms/Search'
// import { Graph } from '../../components/organisms/Graph'
import { TableInOut, TableMinMaxProm } from '../../components/molecules/Tables'
// import { HistoryBar } from '../../components/molecules/HistoryBar'
import { GraphoraContext } from '../../components/GraphoraContext'
import { Appbar } from '../../components/organisms/Appbar'
import { When } from '../../components/utils/When'
import appStyles from './appStyles'
import { ReactComponent as CSVFileIcon } from '../../icons/csvfile.svg'
import { ReactComponent as InfoIcon } from '../../icons/info.svg'

const App = () => {
  const { currentWord } = useContext(GraphoraContext)
  const classes = appStyles()
  const thereAreResults = Boolean(currentWord)

  return (
    <div className={classes.appContainer}>
      <Appbar />
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
    </div>
  )
}

export default App
