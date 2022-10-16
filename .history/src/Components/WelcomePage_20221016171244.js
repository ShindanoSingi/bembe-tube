import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-around items-center h-screen welcomePage ">
      <div
        id="top-text"
        className="flex justify-center center flex-column "
      >
        <p className="text-3xl text-center text-blue-500 md:text-5xl welcome">
          Bembe-Tube
        </p>
        <p className="text-base text-center text-blue-500 md:text-3xl click-on-go">
          Click on "Go" button.
        </p>
      </div>
        <div>
          <img
          className="object-center m-auto h-60 md:h-96"
          src={require("../Components/Images/HomePage.png")}
          alt="Home Page mage"
        />
        </div>

        <div className="flex justify-center text-2xl text-center bg-blue-500 rounded-md w-16 md:w-24 ">
          <Link to="/videoPlayer/:id">
            <button
              className="md:text-4xl xl:text-6xl go-button"
              variant="contained"
              href="#contained-buttons"
            >
              Go
            </button>
          </Link>
        </div>

    </div>
  )
}

export default WelcomePage
