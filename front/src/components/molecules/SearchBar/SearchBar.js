import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import { ReactComponent as SearchIcon } from '../../../icons/loupe.svg'
import searchBarStyles from './searchBarStyles'

export const SearchBar = ({
  handleSearch,
  handleChange,
  value,
  placeholder,
}) => {
  const classes = searchBarStyles()

  return (
    <form onSubmit={handleSearch} className={classes.searchBar}>
      <InputBase
        className={classes.wordInput}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <Button type="submit" className={classes.searchButton}>
        <SearchIcon />
      </Button>
    </form>
  )
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}
