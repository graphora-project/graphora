import React, { useContext, useState, useEffect } from 'react'
import { GraphoraContext } from '../../GraphoraContext'
import { DropDown } from '../DropDown'
import { Breadcrumb } from '../Breadcrumb'
import { When } from '../../utils/When'

const useHistoryBar = () => {
  const { history, goBackInHistory } = useContext(GraphoraContext)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [collapsedData, setCollapsedData] = useState([])
  const [unCollapsedData, setUnCollapsedData] = useState([])

  useEffect(() => {
    /*
    if (history.length <= 3) {
      const newUncollapsedData = history.map((word, index) => {
        const timesToGoBack = history.length - (index + 1)
        return {
          label: word,
          onClickFunction: () => goBackInHistory(timesToGoBack),
        }
      })
      setUnCollapsedData(newUncollapsedData)
      setCollapsedData([])
    } else { */

    const newUncollapsedData = []
    const newCollapsedData = []
    const indexToSlice = history.length - 2

    for (let i = 0; i < history.length; i += 1) {
      const word = history[i]
      const timesToGoBack = history.length - (i + 1)

      if (i < indexToSlice) {
        newCollapsedData.push({
          label: word,
          onClickFunction: () => goBackInHistory(timesToGoBack),
        })
      } else {
        newUncollapsedData.push({
          label: word,
          onClickFunction: () => goBackInHistory(timesToGoBack),
        })
      }
    }
    setCollapsedData(newCollapsedData)
    setUnCollapsedData(newUncollapsedData)
  }, [history])

  useEffect(() => {
    if (collapsedData.length > 0) {
      setIsCollapsed(true)
    } else {
      setIsCollapsed(false)
    }
  }, [unCollapsedData, collapsedData])

  return [isCollapsed, unCollapsedData, collapsedData]
}

export const HistoryBar = () => {
  const [isCollapsed, unCollapsedData, collapsedData] = useHistoryBar()

  return (
    <div>
      <div>
        <When predicate={isCollapsed}>
          <DropDown items={collapsedData} />
        </When>
      </div>
      <div>
        <Breadcrumb items={unCollapsedData} />
      </div>
    </div>
  )
}
