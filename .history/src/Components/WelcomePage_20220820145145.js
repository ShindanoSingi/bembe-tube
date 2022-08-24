import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <div className="h-screen welcomePage ">
      <div className="absolute justify-center mt-8 transform -translate-x-1/2 left-1/2 center flex-column ">
        <p className="text-3xl text-center welcome">Welcome</p>
        <p className="text-base text-center click-on-go">
          Please click on "Go"
        </p>
      </div>
      <div class="w-full justify-center h-screen flex">
        <img
          className="object-center h-40 m-auto"
          src={require("../Components/Images/HomePage.png")}
          alt="Home Page mage"
        />
        <div className="absolute p-5 mt-4 text-2xl text-center bg-blue-500 rounded-md w-25 top-3/4">
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
      </div>
    </div>
  )
}

export default WelcomePage
