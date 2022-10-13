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
          className="px-2 text-sm rounded-full md:rounded-full md:text-xl md:pb-0.5 w-30 md:w-96 input-box"
          placeholder="Type your search"
          type="text"
          name="SearchString"
          onChange={handleChange}
          value={searchedString}
        />
      </form>
      <GoSearch
        className="relative hidden pt-1 lg:block text-md md:text-2xl right-5 md:right-8 searchIcon "
        onClick={handleSubmit}
        type="submit"
      />
    </div>
  )
}

export default SearchForm
