import React from 'react'

export const When = ({ predicate, children }) => {
  return predicate ? children : <></>
}
