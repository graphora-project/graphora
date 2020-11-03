import { useContext, useState } from 'react'
import { GraphoraContext } from '../components/GraphoraContext'

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

export default useSearchWordBar
