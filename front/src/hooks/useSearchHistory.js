import { useState } from 'react'

export const useSearchHistory = (initialHistoryState) => {
  const [history, setHistory] = useState(initialHistoryState)

  const addToHistory = (word) => {
    setHistory(history.concat([word]))
  }

  const goBackInHistory = (timesToGoBack = 1) => {
    if (history.length < timesToGoBack) {
      return
    }

    const lastIndexToDelete = history.length - timesToGoBack
    const newHistory = history.filter((_, index) => index < lastIndexToDelete)
    setHistory(newHistory)
  }

  return [history, addToHistory, goBackInHistory]
}
