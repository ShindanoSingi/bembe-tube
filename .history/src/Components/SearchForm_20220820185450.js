import React from "react"
import { GoSearch } from "react-icons/go"
// import { Link, useParams } from 'react-router-dom';
// import { Button } from 'reactstrap';
import "../Components/SearchForm.css"

// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {
  return (
    <div className="flex items-center search-icon-and-input-box">
      <form onSubmit={handleSubmit} className="form">
        {/* Search Input */}
        <input
          autoFocus
          className="pl-2 text-sm rounded-lg w-28 "
          placeholder="Type your search"
          type="text"
          name="SearchString"
          onChange={handleChange}
          value={searchedString}
        />
      </form>
      <GoSearch
        className="relative pt-1 text-md right-5 searchIcon "
        onClick={handleSubmit}
        type="submit"
      />
    </div>
  )
}

export default SearchForm
