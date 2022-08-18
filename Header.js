import React from 'react';
import './Header.css'
import HomeHistoryPlaylistIcons from './HomeHistoryPlaylistIcons'
import SearchForm from './SearchForm';
import UserLoginIcon from './UserLoginIcon';


// This is the search form. It conatins both the input box and the search icon
const Header = ({ searchedString, handleSubmit, handleChange, forwardedRef, userData, getUserData }) => {

    // console.log(forwardedRef)

    return (<div className='header-container' >
        <div className="header" >
            <HomeHistoryPlaylistIcons />
            <SearchForm searchedString={searchedString}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <UserLoginIcon forwardedRef={forwardedRef} userData={userData} />
        </div>

        <div > { /* <Footer /> */} </div>
    </div>
    );
}
// forwardedRef &&
export default Header;