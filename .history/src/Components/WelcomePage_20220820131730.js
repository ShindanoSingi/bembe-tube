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
      <div className="grid gap-1 place-content-center md:grid-cols-2">
        <img
          className="object-none object-center"
          src="https://picsum.photos/200"
          alt="Home Page mage"
        />
      </div>
    </div>
  )
}

export default WelcomePage
