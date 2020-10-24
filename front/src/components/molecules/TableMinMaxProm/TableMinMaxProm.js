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

const calculateMin = (data, type) => {
  if (type === 'frecuency') {
    const frecuency = []
    data.map((dataFrecuency) => frecuency.push(dataFrecuency.frecuency))
    const frecuencyMin = Math.min(...frecuency)
    return frecuencyMin
    // eslint-disable-next-line no-else-return
  } else {
    const association = []
    data.map((dataAssociation) =>
      association.push(
        parseFloat(dataAssociation.association.replace(',', '.')),
      ),
    )
    const associationMin = Math.min(...association)
    return associationMin
  }
}

const calculateMax = (data, type) => {
  if (type === 'frecuency') {
    const frecuency = []
    data.map((dataFrecuency) => frecuency.push(dataFrecuency.frecuency))
    const frecuencyMax = Math.max(...frecuency)
    return frecuencyMax
    // eslint-disable-next-line no-else-return
  } else {
    const association = []
    // eslint-disable-next-line array-callback-return
    data.map((dataAssociation) => {
      association.push(
        parseFloat(dataAssociation.association.replace(',', '.')),
      )
    })
    const associationMax = Math.max(...association)
    return associationMax
  }
}

const calculateProm = (data, type) => {
  if (type === 'frecuency') {
    let frecuency = null
    // eslint-disable-next-line array-callback-return
    data.map((dataFrecuency) => {
      frecuency += parseFloat(dataFrecuency.frecuency)
    })
    return (frecuency / data.length).toFixed(5)
    // eslint-disable-next-line no-else-return
  } else {
    let association = null
    // eslint-disable-next-line array-callback-return
    data.map((dataAssociation) => {
      association += parseFloat(dataAssociation.association.replace(',', '.'))
    })
    return (association / data.length).toFixed(5)
  }
}

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
