import React, { useContext } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'
import { GraphoraContext } from '../../GraphoraContext'
import { calculateMin, calculateMax, calculateProm } from '../../../utils'
import tableStyles from './tableStyles'

export const TableMinMaxProm = () => {
  const { relatedWordsTableData } = useContext(GraphoraContext)
  const classes = tableStyles()

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
