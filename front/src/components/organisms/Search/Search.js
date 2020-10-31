import React, { useContext, useState } from 'react'
import { SearchBar } from '../../molecules/SearchBar'
import { GraphoraContext } from '../../GraphoraContext'

const useSearchWordBar = () => {
  const [inputValue, setInputValue] = useState('')
  const { searchWord } = useContext(GraphoraContext)

  const handleSearch = (event) => {
    event.preventDefault()
    searchWord(inputValue)
  }

  const handleChange = (event) => setInputValue(event.target.value)

  return [inputValue, handleSearch, handleChange]
}

export const Search = () => {
  const [inputValue, handleSearch, handleChange] = useSearchWordBar()

  return (
    <SearchBar
      handleSearch={handleSearch}
      handleChange={handleChange}
      value={inputValue}
      placeholder="type a word"
    />
  )
}
