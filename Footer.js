import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
	return (
		<div className='footer'>
			<Link to='/about'>
				<p>About</p>
			</Link>

			<p>Contact</p>
			<p>Suggestions</p>
		</div>
	);
}

export default Footer;
