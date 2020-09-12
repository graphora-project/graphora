import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const SearchBar = ({ onSearch, placeholder }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => setValue(e.target.value)

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(value)
  }

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="search-params">
        <input
          id="search-params"
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
        />
      </label>
      <input type="submit" value="search" />
    </form>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}
