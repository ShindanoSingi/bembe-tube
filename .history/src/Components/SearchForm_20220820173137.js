import React from "react"
import { GoSearch } from "react-icons/go"
// import { Link, useParams } from 'react-router-dom';
// import { Button } from 'reactstrap';
import "../Components/SearchForm.css"

// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {
  return (
    <div className="search-icon-and-input-box">
      <GoSearch className="searchIcon" onClick={handleSubmit} type="submit" />
      <form onSubmit={handleSubmit} className="form">
        {/* Search Input */}
        <input
          autoFocus
          className="w-24 rounded-lg "
          placeholder="Type your search"
          type="text"
          name="SearchString"
          onChange={handleChange}
          value={searchedString}
        />
      </form>
    </div>
  )
}

export default SearchForm
