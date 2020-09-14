import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'

export const LabelButton = ({ action, children }) => (
  <Button action={action}>{children}</Button>
)

LabelButton.propTypes = {
  action: PropTypes.func,
  children: PropTypes.string.isRequired,
}
