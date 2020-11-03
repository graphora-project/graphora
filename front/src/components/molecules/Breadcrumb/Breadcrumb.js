import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  textInButton: {
    textTransform: 'capitalize',
  },
})

export const Breadcrumb = ({ items }) => {
  const classes = useStyles()

  return (
    <Breadcrumbs separator="›">
      {items.map((item) => (
        <Button
          key={item.label}
          onClick={item.onClickFunction}
          className={classes.textInButton}
        >
          {item.label}
        </Button>
      ))}
    </Breadcrumbs>
  )
}

Breadcrumb.propTypes = {
  items: PropTypes.array.isRequired,
}
