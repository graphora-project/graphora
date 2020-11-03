import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Button } from '@material-ui/core'

export const Breadcrumb = ({ items }) => (
  <Breadcrumbs separator="›">
    {items.map((item) => (
      <Button
        key={item.label}
        onClick={item.onClickFunction}
        style={{ textTransform: 'capitalize' }}
      >
        {item.label}
      </Button>
    ))}
  </Breadcrumbs>
)

Breadcrumb.propTypes = {
  items: PropTypes.array.isRequired,
}
