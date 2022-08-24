import React from "react"
import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import "../Components/UserLoginIcon.css"

// import OnLoadPage from '../HomePage/OnLoadPage';

export default function UserLoginIcon({ forwardedRef, userData }) {
  console.log(userData)
  // if (forwardedRef.length < 1) {
  // 	console.log('no data found')
  // }

  // else {
  // console.log(forwardedRef)

  // forwardedRef &&

  // const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  // 	setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  // 	setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  return (
    <div className="user-super-container">
      {/* <div>
				<Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
					Open Popover
				</Button>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
					vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				>
					<Typography className={classes.typography}>The content of the Popover.</Typography>
				</Popover>
			</div> */}

      <Link to="/registerOrSignin">
        <div className="register-login">
          <p className="register-text text-md">Login</p>
        </div>
      </Link>

      <div className="username-container">
        <FaUser className="text-md user-icon" />
        {!userData.username ? (
          <p className="username-loggedin-text"></p>
        ) : (
          <p className="username-loggedin-text">Hello, {userData.username}</p>
        )}
      </div>
    </div>
  )
  // }
}

// { forwardedRef.current[0].data.user.username }
