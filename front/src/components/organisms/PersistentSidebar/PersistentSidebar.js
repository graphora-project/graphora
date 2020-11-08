import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import persistentSidebarStyles from './persistentSidebarStyles'

export const PersistentSidebar = ({ isOpen, children }) => {
  const classes = persistentSidebarStyles()
  return (
    <Drawer
      classes={{ root: classes.root, paper: classes.paper }}
      variant="persistent"
      open={isOpen}
    >
      {children}
    </Drawer>
  )
}

PersistentSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
}
