import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ title, description, action }) => (
  <>
    {action ? (
      <button type="button" onClick={action}>
        <h3>{title}</h3>
      </button>
    ) : (
      <h3>{title}</h3>
    )}
    <p>{description}</p>
  </>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.func,
}
