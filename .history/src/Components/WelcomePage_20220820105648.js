import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <div className="texr-blue text-xl">
        hello
      </div>
      <div className="top-text">
        <p className="welcome">Welcome</p>
        <p className="click-on-go">Please click on "Go"</p>
      </div>
      <img
        src={require("../Components/Images/HomePage.png")}
        alt="Home Page mage"
      />
      <Link to="/videoPlayer/:id">
        <div class="tw-text-lg md:tw-text-xl tw-bg-red-500 hover:tw-bg-blue-500">
          Go
        </div>
      </Link>
    </div>
  )
}

export default WelcomePage
