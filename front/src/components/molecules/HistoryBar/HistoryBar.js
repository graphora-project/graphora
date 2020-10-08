import React from 'react'
import { Breadcrumbs, Link } from '@material-ui/core'

export const HistoryBar = ({ history, action }) => {

    const goBackinHistoryNTimes = () => {

    }


  let historybar
  if (history.length < 5) {
    historybar = (
      <Breadcrumbs separator={'>'} style={{ color: 'black' }}>
        {history.map((word) => (
          <Link key={word}>{word}</Link>
        ))}
      </Breadcrumbs>
    )
  } else {
    let position = 0
    const correctPosition = history.length - 4
    history.map((word) => {
      if (position < correctPosition) {
        console.log(correctPosition)(<Breadcrumbs></Breadcrumbs>)
      }
      position++
    })
  }

  return historybar
}
