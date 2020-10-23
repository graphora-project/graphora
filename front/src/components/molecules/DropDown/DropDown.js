import React, { useState, useContext } from 'react'
import { Menu, MenuItem, Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import { GraphoraContext } from '../../GraphoraContext'
import { ReactComponent as Dots } from '../../../icons/three-dots.svg'
import { PaginatedMenu } from './PaginatedMenu'

export const DropDown = ({ subMenuDropDown, subMenuWords }) => {
  const { goBackinNHistory } = useContext(GraphoraContext)
  const ITEM_HEIGHT = subMenuDropDown.length + subMenuWords.length
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button onClick={handleClick}>
        <Dots width="10" height="27" />
      </Button>
      <PaginatedMenu
        open={open}
        handleClose={handleDropdownClose}
        dropdownData={subMenuDropDown}
        itemHeight={ITEM_HEIGHT}
        showedPerPage={4}
        historyContext={goBackinNHistory}
        anchorData={anchorEl}
      />
      {/*<Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: '137px',
            width: '240px',
          },
        }}
      >
        {subMenuDropDown.map((word) => (
          <MenuItem
            key={word[0]}
            onClick={() => {
              goBackinNHistory(ITEM_HEIGHT - word[0])
              handleClose()
            }}
            style={{ textTransform: 'capitalize' }}
          >
            {word[1]}
          </MenuItem>
        ))}
        </Menu>*/}
    </>
  )
}

DropDown.propTypes = {
  subMenuDropDown: PropTypes.array.isRequired,
  subMenuWords: PropTypes.array.isRequired,
}
