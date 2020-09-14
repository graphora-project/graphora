import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'

export const IconButton = ({ action, icon }) => {
  return <Button action={action}> {icon} </Button>
}

IconButton.propTypes = {
  action: PropTypes.func,
  icon: PropTypes.element.isRequired,
}
