import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'

export const LabelButton = ({ action, label }) => {
  return <Button action={action}> {label} </Button>
}

IconButton.propTypes = {
  action: PropTypes.func,
  label: PropTypes.string.isRequired,
}
