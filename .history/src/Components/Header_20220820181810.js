import React from "react"
import "./Header.css"
import HomeHistoryPlaylistIcons from "./HomeHistoryPlaylistIcons"
import SearchForm from "./SearchForm"
import UserLoginIcon from "./UserLoginIcon"
import { GoThreeBars } from "react-icons/go"

// This is the search form. It conatins both the input box and the search icon
const Header = ({
  searchedString,
  handleSubmit,
  handleChange,
  forwardedRef,
  userData,
  getUserData,
}) => {
  // console.log(forwardedRef)

  return (
    <div className="flex gap-2 header-container">
      <div className="flex header">
        <HomeHistoryPlaylistIcons />
        <SearchForm
          searchedString={searchedString}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <UserLoginIcon forwardedRef={forwardedRef} userData={userData} />
        <GoThreeBars className="text-lg" />
      </div>
    </div>
  )
}
// forwardedRef &&
export default Header
