import React, {useContext} from 'react'
import { Breadcrumbs, Link, Button } from '@material-ui/core'
import { GraphoraContext } from '../../GraphoraContext'

export const HistoryBar = () => {
  const { history, goBackinHistory } = useContext(GraphoraContext)
  let historybar
  if (history.length < 5) {
    historybar = (<Breadcrumbs>
      {history.map((word, index) =>(
          <Button onClick={() => {goBackinHistory(history.length - index)}} key={index}>{word}</Button>
      ))}
    </Breadcrumbs>)
  } else {
    const correctPosition = history.length - 3
    const subHistoryBar = []
    //[a,b,c,d,e,f,g,h,i,j] -> 10 - 3 = {7} [[a,b,c,d,e,f,g],h,i,j]
    for (let i = 0; i <= correctPosition; i+=1) {
      subHistoryBar.push(history[i])
    }
    historybar = (<Breadcrumbs>

    </Breadcrumbs>)
  }

  return historybar
}
