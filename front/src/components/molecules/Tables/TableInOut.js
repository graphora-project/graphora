import React, { useContext } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { GraphoraContext } from '../../GraphoraContext'
import tableStyles from './tableStyles'

const columnsInfo = ['frecuency', 'time', 'association']

export const TableInOut = ({ direction }) => {
  const { relatedWordsTableData } = useContext(GraphoraContext)
  const classes = tableStyles()

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow>
            <TableCell align="center">
              Palabras asociadas ({direction})
            </TableCell>
            <TableCell align="center">Frecuencia</TableCell>
            <TableCell align="center">Tiempo</TableCell>
            <TableCell align="center">% de asociación</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {relatedWordsTableData.map((result) =>
            result.direction === direction ? (
              <TableRow key={result.name}>
                {columnsInfo.map((field) => (
                  <TableCell className={classes.tablecell} align="center">
                    {result[field]}
                  </TableCell>
                ))}
              </TableRow>
            ) : null,
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

TableInOut.propTypes = {
  direction: PropTypes.string.isRequired,
}
