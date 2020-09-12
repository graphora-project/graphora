import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

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

export const GraphoraProvider = ({ children }) => {
  const [relatedWords, setRelatedWords] = useSessionStorage([])
  const [currentWord, setCurrentWord] = useState(undefined)

  const fetchRelatedWords = (word) =>
    fetch(`${process.env.REACT_APP_GRAPHORA}/graph/${word}`).then((data) =>
      data.json(),
    )

  const searchWord = async (word) => {
    const data = await fetchFromSessionStorage(word, fetchRelatedWords)
    setRelatedWords(word, data)
    setCurrentWord(word)
  }

  const value = {
    currentWord,
    relatedWords,
    searchWord,
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
