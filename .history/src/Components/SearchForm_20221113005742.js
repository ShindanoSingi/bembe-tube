import React from "react";
import { GoSearch } from "react-icons/go";
// import { Link, useParams } from 'react-router-dom';
// import { Button } from 'reactstrap';

// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {
  return (
    <div className="flex items-center search-icon-and-input-box">
      <form onSubmit={handleSubmit} className="form">
        {/* Search Input */}
        <input
          autoFocus
          className="pl-5 pr-6 [50vw] py-0.2 text-sm rounded-full md:rounded-full md:text-xl md:pr-10 md:pl-4  md:w-[25rem] md:py-0.5"
          placeholder="Type your search"
          type="text"
          name="SearchString"
          onChange={handleChange}
          value={searchedString}
        />
      </form>
      <GoSearch
        className="relative pt-1 text-lg lg:block md:text-2xl right-6 md:right-8 searchIcon "
        onClick={handleSubmit}
        type="submit"
      />
    </div>
  );
};

export default SearchForm;
