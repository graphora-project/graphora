import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GraphoraService } from '../../services'

export const GraphoraContext = createContext()

const useSessionStorage = (initialState) => {
  const [value, setValue] = useState(initialState)

  const setter = (key, data) => {
    const dataFromStorage = sessionStorage.getItem(key)

    if (dataFromStorage) {
      setValue(JSON.parse(dataFromStorage))
    } else {
      sessionStorage.setItem(key, JSON.stringify(data))
      setValue(data)
    }
  }

  return [value, setter]
}

const fetchFromSessionStorage = async (key, keyApi, fetchFunction) => {
  const dataFromStorage = sessionStorage.getItem(key)

  if (!dataFromStorage) {
    const data = await fetchFunction(keyApi)
    return data
  }
  return JSON.parse(dataFromStorage)
}

const useSearchHistory = () => {
  const [history, setHistory] = useState([])

  const addToHistory = (word) => {
    setHistory(history.concat([word]))
  }

  const goBackinHistory = () => {
    if (history.length > 0) {
      setHistory(history.filter((element, index) => index < history.length - 1))
    }
  }

  const goBackinNHistory = (n) => {
    if (history.length > 0) {
      setHistory(
        history.filter((element, index) => index <= history.length - n),
      )
    }
  }

  return [history, addToHistory, goBackinHistory, goBackinNHistory]
}

export const GraphoraProvider = ({ children }) => {
  const [relatedWords, setRelatedWords] = useSessionStorage([])
  const [relatedWordsTableData, setRelatedWordsTableData] = useSessionStorage(
    [],
  )
  const [currentWord, setCurrentWord] = useState(undefined)
  const [
    history,
    addToHistory,
    goBackinHistory,
    goBackinNHistory,
  ] = useSearchHistory()
  const graphoraService = GraphoraService()

  useEffect(() => {
    if (history.length > 0) {
      setCurrentWord(history[history.length - 1])
    } else {
      setCurrentWord(undefined)
    }
  }, [history])

  const fetchWordData = async (word) => {
    const data = await fetchFromSessionStorage(
      word,
      word,
      graphoraService.fetchRelatedWords,
    )
    setRelatedWords(word, data)
  }

  const fetchTableData = async (word) => {
    const data = await fetchFromSessionStorage(
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
    goBackinHistory,
    goBackinNHistory,
  }

  return (
    <GraphoraContext.Provider value={value}>
      {children}
    </GraphoraContext.Provider>
  )
}

GraphoraProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
