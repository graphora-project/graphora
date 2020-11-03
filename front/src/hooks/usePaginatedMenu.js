import { useState, useEffect } from 'react'

const usePaginatedMenu = (data, showedPerPage) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [dataInPage, setDataInPage] = useState({
    firstIndex: 0,
    lastIndex: 1,
  })

  useEffect(() => {
    handlePageChange()
    // eslint-disable-next-line
  }, [data, currentPage])

  const changeToNext = () => {
    setCurrentPage((previousState) => previousState + 1)
  }

  const changeToLast = () => {
    setCurrentPage((previousState) => previousState - 1)
  }

  const handlePageChange = () => {
    setDataInPage(() => ({
      firstIndex: showedPerPage * currentPage,
      lastIndex: showedPerPage * currentPage + showedPerPage,
    }))
  }

  return [currentPage, dataInPage, changeToNext, changeToLast]
}

export default usePaginatedMenu
