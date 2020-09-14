import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { fetchRelatedWords } from '../../services'

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

const fetchFromSessionStorage = async (key, fetchFunction) => {
  const dataFromStorage = sessionStorage.getItem(key)

  if (!dataFromStorage) {
    const data = await fetchFunction(key)
    return data
  }

  return JSON.parse(dataFromStorage)
}

const userSearchHistory = () => {
  const [history, setHistory] = useState([])

  const addToHistory = (word) => {
    setHistory(history.push(word))
  }

  const goBackinHistory = () => {
    if (history.length > 0) {
      setHistory(history.pop)
    }
  }

  return [history, addToHistory, goBackinHistory]
}

export const GraphoraProvider = ({ children }) => {
  const [relatedWords, setRelatedWords] = useSessionStorage([])
  const [currentWord, setCurrentWord] = useState(undefined)
  const [history, addToHistory, goBackinHistory] = userSearchHistory()

  useEffect(() => {
    if (history.length > 0) {
      setCurrentWord(history.lastItem) //mucho OJO
    }
  }, [history])

  const searchWord = async (word) => {
    const data = await fetchFromSessionStorage(word, fetchRelatedWords)
    setRelatedWords(word, data)
    setCurrentWord(word)
    addToHistory(word)
  }

  const value = {
    currentWord,
    relatedWords,
    searchWord,
    history,
    addToHistory,
    goBackinHistory,
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
