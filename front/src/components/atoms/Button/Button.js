import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ action, children }) => (
  <button onClick={action} type="button">
    {children}
  </button>
)

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.element.isRequired,
}
