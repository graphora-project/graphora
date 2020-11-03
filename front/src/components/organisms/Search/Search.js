import React from 'react'
import { SearchBar } from '../../molecules/SearchBar'
import useSearchWordBar from '../../../hooks/useSearchWordBar'

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
