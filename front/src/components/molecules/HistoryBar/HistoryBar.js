import React, { useContext } from 'react'
import { Breadcrumbs, Button } from '@material-ui/core'
import { GraphoraContext } from '../../GraphoraContext'
import { DropDown } from '../DropDown'

export const HistoryBar = () => {
  const { history, goBackinNHistory } = useContext(GraphoraContext)

  function dropDownData() {
    const correctPosition = length - 2
    // [[subMenuDropDown],[subMenuWords]] -> [a,b,c,d,e,f,g,h,i,j] -> 10 - 2 = {8} [[a,b,c,d,e,f,g,h],i,j]
    const subMenuDropDown = []
    const subMenuWords = []

    for (let i = 0; i < history.length; i += 1) {
      if (i < correctPosition) {
        subMenuDropDown.push([i, history[i]])
      } else {
        subMenuWords.push([i, history[i]])
      }
    }

    const data = {
      correctPosition: correctPosition,
      subMenuDropDown: subMenuDropDown,
      subMenuWords: subMenuWords,
    }
    return data
  }

  const { length } = history
  return length < 3 ? (
    <>
      <Breadcrumbs separator="›">
        {history.map((word, index) => (
          <Button
            key={{ index }}
            onClick={() => goBackinNHistory(length - index)}
            style={{ textTransform: 'capitalize' }}
          >
            {word}
          </Button>
        ))}
      </Breadcrumbs>
    </>
  ) : (
    <>
      <div style={{ display: 'inline-block' }}>
        <Breadcrumbs separator="›">
          <div style={{ display: 'inline-block' }}>
            <DropDown props={dropDownData()} />
          </div>
          {dropDownData().subMenuWords.map((word) => (
            <Button
              key={word[0]}
              onClick={() => goBackinNHistory(length - word[0])}
              style={{ textTransform: 'capitalize' }}
            >
              {word[1]}
            </Button>
          ))}
        </Breadcrumbs>
      </div>
    </>
  )
}
