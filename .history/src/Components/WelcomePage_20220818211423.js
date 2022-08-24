import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <div className="top-text">
        <h1>Welcome</h1>
        <p>Please click on "Go"</p>
      </div>
      <img
        src={require("../Components/Images/HomePage.png")}
        alt="Home Page mage"
      />
      <Link to="/videoPlayer/:id">
        <button
          className="go-button"
          variant="contained"
          href="#contained-buttons"
        >
          Go
        </button>
      </Link>
    </div>
  )
}

export default WelcomePage
