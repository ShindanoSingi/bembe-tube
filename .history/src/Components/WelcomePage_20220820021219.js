import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <div className="top-text">
        <p className="welcome">Welcome</p>
        <p className="click-on-go">Please click on "Go"</p>
      </div>
      <img
        src={require("../Components/Images/HomePage.png")}
        alt="Home Page mage"
      />
      <Link to="/videoPlayer/:id">
        <div className="bgRedBright">Go</div>
      </Link>
    </div>
  )
}

export default WelcomePage