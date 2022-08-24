import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <div className="top-text">
        <h1>Welcome</h1>
        <p className="click-on-go">Please click on "Go"</p>
      </div>
      <img
        src={require("../Components/Images/HomePage.png")}
        alt="Home Page mage"
      />

      <Link to="/videoPlayer/:id">
        <div id="go-button">
          <a href="##">Go</a>
        </div>
      </Link>
    </div>
  )
}

export default WelcomePage
