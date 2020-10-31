import React from 'react'
import PropTypes from 'prop-types'

export const SearchBar = ({
  handleSearch,
  handleChange,
  value,
  placeholder,
}) => (
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

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}
