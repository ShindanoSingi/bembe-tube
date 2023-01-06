import React from "react";
import HomeHistoryPlaylistIcons from "./HomeHistoryPlaylistIcons";
import SearchForm from "./SearchForm";
import UserLoginIcon from "./UserLoginIcon";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";

// This is the search form. It conatins both the input box and the search icon
const Nav = ({
  searchedString,
  handleSubmit,
  handleChange,
  forwardedRef,
  userData,
  getUserData
}) => {
  // console.log(forwardedRef)

  return (
    <nav>
      <i class="ri-home-2-line">Home</i>
    </nav>
    // <div className="nav-container">
    //   <HomeHistoryPlaylistIcons />
    //   <SearchForm
    //     searchedString={searchedString}
    //     handleChange={handleChange}
    //     handleSubmit={handleSubmit}
    //   />
    //   <UserLoginIcon forwardedRef={forwardedRef} userData={userData} />
    //   <GoThreeBars className="text-lg md:text-3xl hamburger" />
    // </div>
  );
};

export default Nav;
