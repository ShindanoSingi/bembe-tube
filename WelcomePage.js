import React from 'react'
import './WelcomePage.css'
import './Images/HomePage.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const WelcomePage = () => {
	return (
		<div className='welcomePage'>
			<div className='top-text'>
				<h1>Welcome</h1>
				<p>Please click on "Go"</p>
			</div>
			<img src="../Images/altHomeImage.png" alt="" />
			<Link to='/videoPlayer/:id'>
				<Button className="go-button" variant="contained" href="#contained-buttons">Go</Button>
			</Link>
		</div>
	)
}

export default WelcomePage
