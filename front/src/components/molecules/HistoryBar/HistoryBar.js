import React, {useContext} from 'react'
import { Breadcrumbs, Button } from '@material-ui/core'
import { GraphoraContext } from '../../GraphoraContext'
import { SubMenu } from '../SubMenu'

export const HistoryBar = () => {
  const { history, goBackInNHistory } = useContext(GraphoraContext)

  let historybar
  if (history.length < 5) {
    historybar = <div style={{backgroundColor: "lightblue"}} >
      <Breadcrumbs>
        {history.map((word, index) =>(
            <Button onClick={() => {goBackInNHistory(history.length - index)}} key={index} variant={"outlined"}>{word}</Button>
        ))}
      </Breadcrumbs>
    </div>
  } else {
    const correctPosition = history.length - 3
    const subHistoryBar = []

    //[a,b,c,d,e,f,g,h,i,j] -> 10 - 3 = {7} [[a,b,c,d,e,f,g],h,i,j]

    for (let i = 0; i < correctPosition; i+=1) {
      subHistoryBar.push(history[i])
    }

    //<SubMenu subHistoryBar={subHistoryBar}/>
    historybar = (<Breadcrumbs>

      {history.map((word, index) =>(
          <Button onClick={() => {goBackInNHistory(history.length - index)}} key={index} variant={"outlined"}>{word}</Button>
      ))}
    </Breadcrumbs>)
  }

  return historybar
}
