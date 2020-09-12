import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Card } from '../Card'
import { GraphoraContext } from '../../GraphoraContext'

export const WordCard = ({ word }) => {
  const { searchWord } = useContext(GraphoraContext)
  const description = `${word.status}, ${word.direction}${
    word.nodes.length > 0 ? `, nodes: ${word.nodes.join(', ')}` : ''
  }`

  const handleClick = () => {
    searchWord(word.name)
  }

  return word.status === 'PalabrasAsociadas' ? (
    <Card title={word.name} description={description} />
  ) : (
    <Card title={word.name} description={description} action={handleClick} />
  )
}

WordCard.propTypes = {
  word: PropTypes.any.isRequired,
}
