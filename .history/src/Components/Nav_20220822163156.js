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
    <div className=" w-screen flex absolute top-0 py-2 md:py-4 justify-around bg-orange-600 justify-items-center">
      <HomeHistoryPlaylistIcons />
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
// forwardedRef &&
export default Nav
