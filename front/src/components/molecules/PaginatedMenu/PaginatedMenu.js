import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem } from '@material-ui/core'
import { When } from '../../utils/When'
import usePaginatedMenu from '../../../hooks/usePaginatedMenu'

export const PaginatedMenu = ({
  showedPerPage,
  isOpen,
  handleClose,
  data,
  anchorEl,
}) => {
  const [
    currentPage,
    dataInPage,
    changeToNext,
    changeToLast,
  ] = usePaginatedMenu(data, showedPerPage)

  return (
    <>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={isOpen}
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
        <When predicate={!data.isEmpty}>
          {data
            .slice(dataInPage.firstIndex, dataInPage.lastIndex)
            .map((word, index, arr) => (
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
                      type="button"
                      disabled={currentPage <= 0}
                      onClick={changeToLast}
                    >
                      back
                    </button>
                    <button
                      type="button"
                      disabled={
                        currentPage >=
                        Math.ceil(data.length / showedPerPage) - 1
                      }
                      onClick={changeToNext}
                    >
                      forward
                    </button>
                  </MenuItem>
                </When>
              </div>
            ))}
        </When>
      </Menu>
    </>
  )
}

PaginatedMenu.propTypes = {
  showedPerPage: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  anchorEl: PropTypes.element.isRequired,
}
