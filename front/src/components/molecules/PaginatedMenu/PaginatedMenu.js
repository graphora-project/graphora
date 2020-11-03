import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import usePaginatedMenu from '../../../hooks/usePaginatedMenu'

const useStyles = makeStyles({
  textInButton: {
    textTransform: 'capitalize',
  },
})

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

  const classes = useStyles()

  return (
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      keepMounted
      open={isOpen}
      onClose={handleClose}
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
      <button
        type="button"
        disabled={backButtonIsDisabled()}
        onClick={changeToLast}
      >
        back
      </button>
      <button
        type="button"
        disabled={forwardButtonIsDisabled()}
        onClick={changeToNext}
      >
        forward
      </button>
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
