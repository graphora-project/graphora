import React, { useState, useEffect } from 'react'
import { Menu, MenuItem, Button } from '@material-ui/core'
import { When } from '../../utils/When'

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
        <When predicate={!dropdownData.isEmpty}>
          {dropdownData
            .slice(dataInPage.firstIndex, dataInPage.lastIndex)
            .map((word, index, arr) => {
              return (
                <div>
                  <MenuItem
                    key={word.label}
                    onClick={() => {
                      word.onClickFunction()
                      handleClose()
                    }}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {word.label}
                  </MenuItem>
                  <When predicate={index + 1 === arr.length}>
                    <MenuItem>
                      <button
                        disabled={currentPage <= 0}
                        onClick={changeToLast}
                      >
                        back
                      </button>
                      <button
                        disabled={
                          currentPage >=
                          Math.ceil(dropdownData.length / showedPerPage) - 1
                        }
                        onClick={changeToNext}
                      >
                        forward
                      </button>
                    </MenuItem>
                  </When>
                </div>
              )
            })}
        </When>
      </Menu>
    </>
  )
}
