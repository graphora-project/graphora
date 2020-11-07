import React from 'react'
import PropTypes from 'prop-types'

export const When = ({ predicate, children }) => {
  return predicate ? children : <></>
}

When.propTypes = {
  predicate: PropTypes.any,
  children: PropTypes.element.isRequired,
}
