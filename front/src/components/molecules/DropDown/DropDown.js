import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import { ReactComponent as Dots } from '../../../icons/three-dots.svg'
import { PaginatedMenu } from '../PaginatedMenu'

export const DropDown = ({ items }) => {
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
        isOpen={open}
        handleClose={handleDropdownClose}
        data={items}
        showedPerPage={4}
        anchorEl={anchorEl}
      />
    </>
  )
}

DropDown.propTypes = {
  items: PropTypes.array.isRequired,
}
