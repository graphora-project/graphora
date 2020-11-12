import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem, Button } from '@material-ui/core'
import usePaginatedMenu from '../../../hooks/usePaginatedMenu'
import paginatedMenuStyles from './paginatedMenuStyles'

export const PaginatedMenu = ({
  showedPerPage,
  isOpen,
  handleClose,
  data,
  anchorEl,
}) => {
  const [
    currentPageIndex,
    currentPageData,
    changeToNext,
    changeToLast,
    setCurrentPageIndex,
  ] = usePaginatedMenu(data, showedPerPage)

  const onMenuClosed = (word) => {
    word.onClickFunction()
    setCurrentPageIndex(0)
    handleClose()
  }

  const backButtonIsDisabled = () => currentPageIndex <= 0
  const forwardButtonIsDisabled = () =>
    currentPageIndex >= Math.ceil(data.length / showedPerPage) - 1

  const classes = paginatedMenuStyles()

  return (
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      keepMounted
      open={isOpen}
      onClose={handleClose}
      classes={{ paper: classes.menu }}
    >
      {currentPageData.map((word) => (
        <MenuItem
          key={word.label}
          onClick={() => onMenuClosed(word)}
          className={classes.textInButton}
        >
          {word.label}
        </MenuItem>
      ))}
      <Button
        type="button"
        disabled={backButtonIsDisabled()}
        onClick={changeToLast}
        className={classes.textInButton}
      >
        {'<'}
      </Button>
      <Button
        type="button"
        disabled={forwardButtonIsDisabled()}
        onClick={changeToNext}
        className={classes.textInButton}
      >
        {'>'}
      </Button>
    </Menu>
  )
}

PaginatedMenu.propTypes = {
  showedPerPage: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  anchorEl: PropTypes.object,
}
