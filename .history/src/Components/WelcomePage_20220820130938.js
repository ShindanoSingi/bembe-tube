import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <div className="max-h-full welcomePage lg:bg-yellow-700 ">
      <div className="top-text">
        <p className="welcome">Welcome</p>
        <p className="click-on-go">Please click on "Go"</p>
      </div>
      <div className="grid place-content-center">
        <img
        class="object-center"
        src={require("../Components/Images/HomePage.png")}
        alt="Home Page mage"
      />
      </div>

    </div>
  )
}

export default WelcomePage
