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
import { GraphoraContext } from '../../GraphoraContext'
import { calculateMin, calculateMax, calculateProm } from '../../../utils'

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

export const TableMinMaxProm = () => {
  const { relatedWordsTableData } = useContext(GraphoraContext)
  const classes = useStyle()

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Mínimo</TableCell>
            <TableCell align="center">Máximo</TableCell>
            <TableCell align="center">Promedio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tablecell} align="center">
              Asociación
            </TableCell>
            <TableCell className={classes.tablecell} align="center">
              {calculateMin(relatedWordsTableData, 'association')}
            </TableCell>
            <TableCell className={classes.tablecell} align="center">
              {calculateMax(relatedWordsTableData, 'association')}
            </TableCell>
            <TableCell className={classes.tablecell} align="center">
              {calculateProm(relatedWordsTableData, 'association')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tablecell} align="center">
              Frecuencia
            </TableCell>
            <TableCell className={classes.tablecell} align="center">
              {calculateMin(relatedWordsTableData, 'frecuency')}
            </TableCell>
            <TableCell className={classes.tablecell} align="center">
              {calculateMax(relatedWordsTableData, 'frecuency')}
            </TableCell>
            <TableCell className={classes.tablecell} align="center">
              {calculateProm(relatedWordsTableData, 'frecuency')}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
