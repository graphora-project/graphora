import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withSize } from 'react-sizeme'

const Div = ({ size, onResize, children }) => {
  useEffect(() => {
    onResize(size)
    // eslint-disable-next-line
  }, [size.width, size.height])

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div style={{ position: 'absolute', width: '100%', height: size.height }}>
        {children}
      </div>
    </div>
  )
}

Div.propTypes = {
  size: PropTypes.object.isRequired,
  onResize: PropTypes.func,
  children: PropTypes.any,
}

export const DivWithDimensions = withSize({ monitorHeight: true })(Div)
