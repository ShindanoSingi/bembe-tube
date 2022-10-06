import React from "react"
import "./Images/HomePage.png"
import {Link} from "react-router-dom"

const WelcomePage = () => {
     return (
          <div className="flex flex-col items-center h-screen justify-evenly">
               <div className="flex flex-column">
                    <p className="text-2xl text-center text-blue-500 md:text-5xl">
                         Bembe-Tube
                    </p>
                    <p className="text-base text-center text-blue-500 md:text-3xl">
                         Click on "Go" button.
                    </p>
               </div>

               <img className="object-center m-auto h-60 md:h-1/2"
                    src={
                         require("../Components/Images/HomePage.png")
                    }
                    alt="Home Page mage"/>

               <Link to="/videoPlayer/:id">
                    <button className="bg-blue-500 md:text-4xl">
                         Go
                    </button>
               </Link>


          </div>
     )
}

export default WelcomePage
