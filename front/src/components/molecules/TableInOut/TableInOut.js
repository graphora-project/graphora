import React, { useContext } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { GraphoraContext } from '../../GraphoraContext'

const useStyle = makeStyles({
  tablecontainer: {
    width: '100%',
  },
  table: {
    border: '1.5px solid #1D1D1D',
  },
  tablehead: {
    backgroundColor: '#C7D8F0',
    border: '1.5px solid #1D1D1D',
  },
  tablebody: {
    border: '1.5px solid #1D1D1D',
  },
  tablecell: {
    borderTop: 'none',
    borderRight: '1.5px solid #1D1D1D',
    borderBottom: 'none',
    borderLeft: '1.5px solid #1D1D1D',
  },
})

export const TableInOut = ({ direction }) => {
  const { relatedWordsTableData } = useContext(GraphoraContext)
  const classes = useStyle()

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
                <TableCell className={classes.tablecell} align="center">
                  {result.name}
                </TableCell>
                <TableCell className={classes.tablecell} align="center">
                  {result.frecuency}
                </TableCell>
                <TableCell className={classes.tablecell} align="center">
                  {result.time}
                </TableCell>
                <TableCell className={classes.tablecell} align="center">
                  {result.association}
                </TableCell>
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
