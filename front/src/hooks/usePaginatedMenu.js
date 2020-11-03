import { useState, useEffect } from 'react'

const usePaginatedMenu = (data, showedPerPage) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [pageIndexRange, setPageIndexRange] = useState({
    firstIndex: 0,
    lastIndex: 1,
  })
  const [currentPageData, setCurrentPageData] = useState([])

  useEffect(() => {
    const newCurrentPageData = data.slice(
      pageIndexRange.firstIndex,
      pageIndexRange.lastIndex,
    )
    setCurrentPageData(newCurrentPageData)
    // eslint-disable-next-line
  }, [pageIndexRange])

  useEffect(() => {
    handlePageChange()
    // eslint-disable-next-line
  }, [data, currentPageIndex])

  const changeToNext = () => {
    setCurrentPageIndex((previousPageIndex) => previousPageIndex + 1)
  }

  const changeToLast = () => {
    setCurrentPageIndex((previousPageIndex) => previousPageIndex - 1)
  }

  const handlePageChange = () => {
    setPageIndexRange(() => ({
      firstIndex: showedPerPage * currentPageIndex,
      lastIndex: showedPerPage * currentPageIndex + showedPerPage,
    }))
  }

  return [
    currentPageIndex,
    currentPageData,
    changeToNext,
    changeToLast,
    setCurrentPageIndex,
  ]
}

export default usePaginatedMenu
