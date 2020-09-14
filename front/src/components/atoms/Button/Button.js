import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ action, children }) => {
  return <button onClick={action}> {children} </button>
}

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
