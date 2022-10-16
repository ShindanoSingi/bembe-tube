import React from "react"
import "./WelcomePage.css"
import "./Images/HomePage.png"
import { Link } from "react-router-dom"

const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-around h-screen welcomePage ">
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
          className="object-center m-auto h-60 md:h-1/2"
          src={require("../Components/Images/HomePage.png")}
          alt="Home Page mage"
        />
        </div>

        <div className="flex justify-center mt-5 text-2xl text-center bg-blue-500 rounded-md w-10 md:w-25 md:py-2 lg:py-3 top-3/4 button">
          <Link to="/videoPlayer/:id">
            <button
              className="md:text-4xl go-button"
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
