import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <div className="h-screen welcomePage ">
      <div className="absolute justify-center mt-8 transform -translate-x-1/2 left-1/2 center flex-column ">
        <p className="text-3xl text-center welcome">Welcome</p>
        <p className="text-center text-md click-on-go">Please click on "Go"</p>
      </div>
      <div class="w-full justify-center h-screen flex">
        <img
          className="object-center h-40 m-auto"
          src={require("../Components/Images/HomePage.png")}
          alt="Home Page mage"
        />
      </div>
    </div>
  )
}

export default WelcomePage
