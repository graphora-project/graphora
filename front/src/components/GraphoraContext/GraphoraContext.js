import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GraphoraService, SessionStorage } from '../../services'
import { useSearchHistory, useStateWithSessionStorage } from '../../hooks'

export const GraphoraContext = createContext()

const storageService = SessionStorage()
const graphoraService = GraphoraService()

const defaultCurrentWordValue = undefined

export const GraphoraProvider = ({ children }) => {
  const [relatedWords, setRelatedWords] = useStateWithSessionStorage([])
  const [
    relatedWordsTableData,
    setRelatedWordsTableData,
  ] = useStateWithSessionStorage([])
  const [currentWord, setCurrentWord] = useState(defaultCurrentWordValue)
  const [
    history,
    addToHistory,
    goBackInHistory,
    clearSearchHistory,
  ] = useSearchHistory([])

  useEffect(() => {
    if (history.length > 0) {
      const lastElementInHistory = history[history.length - 1]
      setCurrentWord(lastElementInHistory)
    } else {
      setCurrentWord(defaultCurrentWordValue)
    }
  }, [history])

  const fetchWordData = async (word) => {
    const data = await storageService.fetchFromSessionStorage(
      word,
      word,
      graphoraService.fetchRelatedWords,
    )
    setRelatedWords(word, data)
  }

  const fetchTableData = async (word) => {
    const data = await storageService.fetchFromSessionStorage(
      `${word}-table`,
      word,
      graphoraService.fetchRelatedTable,
    )
    setRelatedWordsTableData(`${word}-table`, data)
  }

  useEffect(() => {
    if (currentWord) {
      fetchWordData(currentWord)
      fetchTableData(currentWord)
    }
    // eslint-disable-next-line
  }, [currentWord])

  const searchWord = async (word) => {
    addToHistory(word)
  }

  const value = {
    currentWord,
    relatedWords,
    relatedWordsTableData,
    searchWord,
    history,
    goBackInHistory,
    clearSearchHistory,
  }

  return (
    <GraphoraContext.Provider value={value}>
      {children}
    </GraphoraContext.Provider>
  )
}

GraphoraProvider.propTypes = {
  children: PropTypes.any.isRequired,
}
