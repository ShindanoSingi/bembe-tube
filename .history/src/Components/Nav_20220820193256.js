import React from "react"
import "./Nav.css"
import HomeHistoryPlaylistIcons from "./HomeHistoryPlaylistIcons"
import SearchForm from "./SearchForm"
import UserLoginIcon from "./UserLoginIcon"
import { GoThreeBars } from "react-icons/go"

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
    <div className="flex justify-around py-2 mx-0 align-baseline navbar">
      <HomeHistoryPlaylistIcons className="text-xl" />
      <SearchForm
        searchedString={searchedString}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <UserLoginIcon forwardedRef={forwardedRef} userData={userData} />
      <GoThreeBars className="text-xl" />
    </div>
  )
}
// forwardedRef &&
export default Nav
