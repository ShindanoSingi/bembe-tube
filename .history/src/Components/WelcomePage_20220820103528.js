import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
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
        <div id="go-button">Go</div>
      </Link>
      <div className="h-10 w-10 bg-light rounded-full">
        <h1 className="text-l">Home Page</h1>
      </div>
    </div>
  )
}

export default WelcomePage
