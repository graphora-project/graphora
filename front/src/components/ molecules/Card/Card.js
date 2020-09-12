import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ title, description, action }) => {

  return (
    <>
      {action ? (
        <h3 onClick={action} style={{ cursor: 'pointer' }}>
          {title}
        </h3>
      ) : (
          <h3>{title}</h3>
        )}
      <p>{description}</p>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.func,
}
