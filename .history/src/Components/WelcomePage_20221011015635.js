import React from "react"
import "../Images/HomePage.png"
import {Link} from "react-router-dom"

const WelcomePage = () => {
     return (
          <div className="items-center flex flex-col justify-around py-12 md:py-6 h-screen welcome">
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
                         require("../Images/HomePage.png")
                    }
                    alt="Home Page mage"/>
               <div className="w-[5rem] mx-auto bg-blue-500 flex justify-center rounded-md py-1">
                    <Link to="/videoPlayer/:id">
                         <button className="text-2xl md:text-4xl">
                              Go
                         </button>
                    </Link>
               </div>
          </div>
     )
}

export default WelcomePage
