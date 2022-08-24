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
        <div className="w-12 mb-2 text-xl font-bold text-center text-purple-500 bg-lime-500">
          Go
        </div>
      </Link>
    </div>
  )
}

export default WelcomePage
