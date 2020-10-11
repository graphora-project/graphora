import React, { useState, useContext } from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { GraphoraContext } from '../../GraphoraContext'
//  import { ArrowForwardIosRounded } from '@material-ui/icons'

export const DropDown = (props) => {
  const { goBackinNHistory } = useContext(GraphoraContext)

  const ITEM_HEIGHT =
    props.props.subMenuDropDown.length + props.props.subMenuWords.length
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const dropdown = (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        ...
      </IconButton>
      <Menu
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
        {props.props.subMenuDropDown.map((word) => (
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
      </Menu>
    </div>
  )

  return dropdown
}
