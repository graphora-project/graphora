import React, { useContext } from 'react'
import SearchBar from '../SearchBar'
import { GraphoraContext } from '../GraphoraContext'

export const Search = () => {
  const { handleSearch } = useContext(GraphoraContext)

  return <SearchBar onSearch={handleSearch} placeholder="type a word" />
}
