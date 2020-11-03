import { useContext, useState, useEffect } from 'react'
import { GraphoraContext } from '../components/GraphoraContext'

const useHistoryBar = () => {
  const { history, goBackInHistory } = useContext(GraphoraContext)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [collapsedData, setCollapsedData] = useState([])
  const [unCollapsedData, setUnCollapsedData] = useState([])

  useEffect(() => {
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
    // eslint-disable-next-line
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

export default useHistoryBar
