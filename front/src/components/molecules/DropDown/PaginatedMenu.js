import React, { useState, useEffect } from 'react'
import { Menu, MenuItem, Button } from '@material-ui/core'

export const PaginatedMenu = ({
  showedPerPage,
  open,
  handleClose,
  dropdownData,
  itemHeight,
  anchorData,
  historyContext,
}) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [dataInPage, setDataInPage] = useState({
    firstIndex: 0,
    lastIndex: 1,
  })

  useEffect(() => {
    handlePageChange()
  }, [dropdownData, currentPage])

  const changeToNext = () => {
    setCurrentPage((previousState) => previousState + 1)
  }

  const changeToLast = () => {
    setCurrentPage((previousState) => previousState - 1)
  }

  const handlePageChange = () => {
    console.log('the ugly one')
    setDataInPage(() => ({
      firstIndex: showedPerPage * currentPage,
      lastIndex: showedPerPage * currentPage + showedPerPage,
    }))
  }

  return (
    <>
      <Menu
        id="long-menu"
        anchorEl={anchorData}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            color: '#F6F6F6',
            background: '#5666AE',
            maxHeight: '250px',
            width: '270px',
          },
        }}
      >
        {!dropdownData.isEmpty &&
          dropdownData
            .slice(dataInPage.firstIndex, dataInPage.lastIndex)
            .map((word, index, arr) => {
              return (
                <div>
                  <MenuItem
                    key={word[0]}
                    onClick={() => {
                      historyContext(itemHeight - word[0])
                      handleClose()
                    }}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {word[1]}
                  </MenuItem>
                  <MenuItem>
                    <>
                      {index + 1 === arr.length && (
                        <button
                          disabled={currentPage <= 0}
                          onClick={changeToLast}
                        >
                          back
                        </button>
                      )}
                      {index + 1 === arr.length && (
                        <button
                          disabled={
                            currentPage >=
                            Math.ceil(dropdownData.length / showedPerPage) - 1
                          }
                          onClick={changeToNext}
                        >
                          forward
                        </button>
                      )}
                    </>
                  </MenuItem>
                </div>
              )
            })}
      </Menu>
    </>
  )
}
