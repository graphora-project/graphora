import React, { useContext } from 'react'
import { Breadcrumbs, Button } from '@material-ui/core'
import { GraphoraContext } from '../../GraphoraContext'
import { DropDown, DropDownPag } from '../DropDown'

export const HistoryBar = () => {
  const { history, goBackinNHistory } = useContext(GraphoraContext)
  const { length } = history
  let dropDownData

  if (length > 3 /* 2 */) {
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

    dropDownData = {
      correctPosition,
      subMenuDropDown,
      subMenuWords,
    }
  }

  // style={{ display: 'inline-block' }}
  return length < 4 ? ( // n + 1 -> 2 + 1 = 3 tons 10 < 2
    <div>
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
    </div>
  ) : (
    <div>
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'inline-block' }}>
          <DropDown
            subMenuDropDown={dropDownData.subMenuDropDown}
            subMenuWords={dropDownData.subMenuWords}
          />
        </div>
        <div style={{ display: 'inline-block' }}>
          <Breadcrumbs separator="›" maxItems={10}>
            {dropDownData.subMenuWords.map((word) => (
              <Button
                key={word[0]}
                onClick={() => {
                  goBackinNHistory(length - word[0])
                }}
                style={{ textTransform: 'capitalize' }}
              >
                {word[1]}
              </Button>
            ))}
          </Breadcrumbs>
        </div>
      </div>
      <div>
        <DropDownPag subMenuDropDown={dropDownData.subMenuDropDown} />
      </div>
    </div>
  )
}
