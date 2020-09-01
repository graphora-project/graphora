import React, { useContext } from 'react'
import { GraphoraContext } from '../GraphoraContext'

export const Graph = () => {
  const { wordRelations } = useContext(GraphoraContext)

  return (
    <>
      <ul>
        {wordRelations.map((relation) => (
          <div key={relation.name}>
            <h3>{relation.name}</h3>
            <ul>
              <li>status: {relation.status}</li>
              <li>direction: {relation.direction}</li>
            </ul>
            <hr />
          </div>
        ))}
      </ul>
    </>
  )
}
