import React, { useContext } from 'react'
import { SearchBar } from '../SearchBar'
import { GraphoraContext } from '../GraphoraContext'

export const Search = () => {
  const { searchWord } = useContext(GraphoraContext)

  return <SearchBar onSearch={searchWord} placeholder="type a word" />
}
