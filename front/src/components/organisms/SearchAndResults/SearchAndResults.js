import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { If, Then, Else } from 'react-if'
import { GraphoraContext } from '../../GraphoraContext'
import { SearchBar } from '../../molecules/SearchBar'
import { TableInOut, TableMinMaxProm } from '../../molecules/Tables'
import { Csv } from '../../molecules/CSV'
import useSearchWordBar from '../../../hooks/useSearchWordBar'
// import { ReactComponent as CSVFileIcon } from '../../../icons/csvfile.svg'
import { ReactComponent as InfoIcon } from '../../../icons/info.svg'
import searchAndResultsStyles from './searchAndResultsStyles'

export const SearchAndResults = () => {
  const [inputValue, handleSearch, handleChange] = useSearchWordBar()
  const { relatedWordsTableData, currentWord } = useContext(GraphoraContext)
  const thereAreResults = Boolean(relatedWordsTableData.length && currentWord)
  const classes = searchAndResultsStyles()

  return (
    <>
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        value={inputValue}
        placeholder="ingrese una palabra"
      />
      <If condition={thereAreResults}>
        <Then>
          <div className={classes.resultsContainer}>
            <div className={classes.resultsHeader}>
              <Typography className={classes.currentWord} variant="h6">
                {currentWord}
              </Typography>
              <div className={classes.resultsTools}>
                <IconButton>
                  <Csv />
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
        </Then>
        <Else>
          <div className={classes.helpLinkContainer}>
            <Typography>
              ¿Necesitas ayuda?&nbsp;
              <Link href="#" underline="always" color="inherit">
                mira nuestros ejemplos.
              </Link>
            </Typography>
          </div>
        </Else>
      </If>
    </>
  )
}
