import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ word, handleSearch }) => {
  const onSearch = () => {
    handleSearch(word.name)
  }

  return (
    <>
      {handleSearch ? (
        <h3 onClick={onSearch} style={{ cursor: 'pointer' }}>
          {word.name}
        </h3>
      ) : (
        <h3>{word.name}</h3>
      )}
      <ul>
        <li>status: {word.status}</li>
        <li>direction: {word.direction}</li>
      </ul>
    </>
  )
}

Card.propTypes = {
  word: PropTypes.object.isRequired,
  handleSearch: PropTypes.func,
}
