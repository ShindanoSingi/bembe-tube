import React from "react"
import {FaUser} from "react-icons/fa"
import {Link} from "react-router-dom"

// import OnLoadPage from '../HomePage/OnLoadPage';

export default function UserLoginIcon({forwardedRef, userData}) {
     console.log(userData)
     // if (forwardedRef.length < 1) {
     // console.log('no data found')
     // }

     // else {
     // console.log(forwardedRef)

     // forwardedRef &&

     // const classes = useStyles();
     // const [anchorEl, setAnchorEl] = React.useState(null);

     // const handleClick = (event) => {
     // setAnchorEl(event.currentTarget);
     // };

     // const handleClose = () => {
     // setAnchorEl(null);
     // };

     // const open = Boolean(anchorEl);
     // const id = open ? 'simple-popover' : undefined;

     return (
          <div className="flex justify-between gap-2 align-baseline md:gap-8 lg:gap-8 user-super-container">
               {/* <Link to="/registerOrSignin"> */}
               <div className="register-login">
                    <p className="text-md md:text-2xl register-text">Login</p>
               </div>
               {/* </Link> */}

               <div className="username-container">
                    <FaUser className="text-lg md:text-2xl user-icon"/> {/* {!userData.username ? (
          <p className="username-loggedin-text"></p>
        ) : (
          <p className="username-loggedin-text">Hello, {userData.username}</p>
        )} */} </div>
          </div>
     )
     // }
}

// { forwardedRef.current[0].data.user.username }
