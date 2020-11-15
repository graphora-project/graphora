import React, { useContext } from 'react'
import { CSVLink } from 'react-csv'
import { GraphoraContext } from '../../GraphoraContext'
import { ReactComponent as CSVIcon } from '../../../icons/csvfile.svg'

export const Csv = () => {
  const { currentWord, relatedWordsTableData } = useContext(GraphoraContext)
  return (
    <CSVLink
      filename={`${currentWord}.csv`}
      data={getCSV(relatedWordsTableData)}
    >
      <CSVIcon />
    </CSVLink>
  )
}

function getCSV(relatedWordsTableData) {
  /* const csvData = []
  relatedWordsTableData.map((word) => {
    csvData.push(word)
  }) */

  const csvData = relatedWordsTableData.map((word) => word)
  return csvData
}
