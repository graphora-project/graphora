import { useContext, useEffect, useState } from 'react'
import { GraphoraContext } from '../components/GraphoraContext'

const useSearchWordBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchHasBeenRequested, setSearchHasBeenRequested] = useState(false)
  const { searchWord, clearSearchHistory, history } = useContext(
    GraphoraContext,
  )

  const handleSearch = (event) => {
    event.preventDefault()
    clearSearchHistory()
    setSearchHasBeenRequested(true)
  }

  const historyHasBeenCleared = () => history.length === 0

  // necesary to clean search history and search the word due to setState is asynchronous
  // this useEffect runs after handleSearch
  useEffect(() => {
    if (searchHasBeenRequested && historyHasBeenCleared()) {
      searchWord(inputValue)
      setInputValue('')
      setSearchHasBeenRequested(false)
    }
    // eslint-disable-next-line
  }, [searchHasBeenRequested, history])

  const handleChange = (event) => setInputValue(event.target.value)

  return [inputValue, handleSearch, handleChange]
}

export default useSearchWordBar
