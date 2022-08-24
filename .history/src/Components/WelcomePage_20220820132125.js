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
      <div class="w-full justify-center rounded-sm shadow md:ml-10 md:inline-flex">
        <img
          class="object-none object-center"
          src="https://picsum.photos/200"
          alt="Home Page mage"
        />
      </div>
    </div>
  )
}

export default WelcomePage
