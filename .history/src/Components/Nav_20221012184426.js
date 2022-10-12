import React from "react"
import "./Nav.css"
import HomeHistoryPlaylistIcons from "./HomeHistoryPlaylistIcons"
import SearchForm from "./SearchForm"
import UserLoginIcon from "./UserLoginIcon"
import { GoThreeBars } from "react-icons/go"
import { Link } from "react-router-dom"

// This is the search form. It conatins both the input box and the search icon
const Nav = ({
  searchedString,
  handleSubmit,
  handleChange,
  forwardedRef,
  userData,
  getUserData,
}) => {
  // console.log(forwardedRef)

  return (
    <div className="fixed top-0 flex justify-around w-screen py-2 bg-orange-600 md:py-4">
      <HomeHistoryPlaylistIcons />
      {/* <Link to="/about">
        <button
          className="text-md md:text-2xl"
          variant="contained"
          href="#contained-buttons"
        >
          About
        </button>
      </Link> */}
      <SearchForm
        searchedString={searchedString}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <UserLoginIcon forwardedRef={forwardedRef} userData={userData} />
      <GoThreeBars className="text-lg md:text-3xl" />
    </div>
  )
}

export default Nav
