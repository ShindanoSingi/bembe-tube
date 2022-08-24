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
        <div className="text-center" id="go-button">Go</div>
      </Link>

      <button class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
  Button
</button>


    </div>
  )
}

export default WelcomePage
