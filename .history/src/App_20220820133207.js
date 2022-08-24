// import './App.css';
import { Routes, Route } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import React, { Component } from "react"
import WelcomePage from "./Components/WelcomePage"
import VideoPlayer from "./Components/VideoPlayer"
import HomePage from "./Components/HomePage"
import AboutPage from "./Components/AboutPage"
import Auth from "./Components/Auth"
// import { isNonNullObject } from '@apollo/client/utilities';

function App() {
  const [userData, setUserData] = useState({})

  // This holds videos
  const [videos, setVideos] = useState([])
  // Declare a variable to hold the typed string
  const [searchedString, setSearchedString] = useState("")
  const [videoId, setVideoId] = useState("")
  const [addedVideoObject, setAddedVideoObject] = useState({})

  // HandleChange on each keypress
  const handleChange = (event) => {
    // event.preventDefault();
    setSearchedString(event.target.value)
  }

  // Create a function that will grab the data from the Auth component
  function getUserData(user) {
    setUserData(user)
    console.log(userData)
  }

  // const [someData, setSomeData] = useState('');
  // const [videoData, setVideoData] = useState([]);
  // const [userInfo, setUserInfo] = useState([]);
  let homePageUseRef = useRef(null)

  // const [id, setId] = useState('');
  // const [userName, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [playlist, setPlaylist] = useState([]);
  // const [history, setHistory] = useState([]);
  // const [comments, setComments] = useState([]);
  // const [likes, setLikes] = useState(false);
  // const [views, setViews] = useState(0);
  // const [signedin, setSignedin] = useState(false);

  // const getIndex = (index) => {
  // 	setSomeData(index)
  // }

  function viewsFunc(num) {
    if (num < 1000) return num
    else if (num > 999 && num < 1000000) {
      num = (num / 1000).toFixed(1)
      return num + "K"
    } else if (num >= 1000000 && num < 1000000000) {
      num = (num / 1000000).toFixed(1)
      return num + "M"
    } else if (num > 1000000000 && num < 1000000000000) {
      num = (num / 1000000000).toFixed(1)
      return num + "B"
    }
  }

  function getaddToPlaylist(videoId) {
    setVideoId(videoId)
    console.log(videoId)
  }

  const getAddedVideoToPlaylistata = (addedVideoIdData) => {
    setAddedVideoObject(addedVideoIdData)
    console.log(addedVideoIdData)
  }

  // HandleSubmit submits the searchedString to the getSearchedData function when "the search icon is clicked"
  const handleSubmit = (event) => {
    event.preventDefault()
    getSearchedData(searchedString)
    setSearchedString("")
  }

  // Let's use useEffect allow the API call once per call.
  useEffect(() => {
    getSearchedData(searchedString)
    // setSearchedString(searchedString)
  }, [])

  // console.log(searchedString.length);
  // Provide the searched string to the yotube API.
  function getSearchedData(searchedString) {
    const axios = require("axios")

    if (searchedString.length < 1) {
      const options = {
        method: "GET",
        url: "https://simple-youtube-search.p.rapidapi.com/search",
        params: { query: "Harmonize" },
        headers: {
          // 'X-RapidAPI-Key': '09791544c4msh44367899bb6a701p1c8e30jsn614d2345a728',
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
        },
      }
      axios
        .request(options)
        .then(function (response) {
          setVideos(response.data.results)
          // console.log(response.data);
        })
        .catch(function (error) {
          console.error(error)
        })
    } else {
      const options = {
        method: "GET",
        url: "https://simple-youtube-search.p.rapidapi.com/search",
        params: { query: searchedString },
        // , safesearch: 'true'
        headers: {
          // 'X-RapidAPI-Key': '09791544c4msh44367899bb6a701p1c8e30jsn614d2345a728',
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
        },
      }
      axios
        .request(options)
        .then(function (response) {
          setVideos(response.data.results)
          console.log(response.data)
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }

  // Get videoData
  // const getVideoData = (dataResult) => {
  // 	setVideoData(dataResult)
  // 	console.log(videoData)
  // }

  console.log(userData)

  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route
          path="/homePage"
          element={
            <HomePage
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              searchedString={searchedString}
              videos={videos}
              getUserData={getUserData}
              userData={userData}
              forwardedRef={homePageUseRef}
            />
          }
        />

        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/registerOrSignin"
          element={
            <Auth
              getUserData={getUserData}
              videoId={videoId}
              getAddedVideoToPlaylistata={getAddedVideoToPlaylistata}
            />
          }
        />

        <Route
          path="/videoPlayer/:id"
          element={
            <VideoPlayer
              userData={userData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              searchedString={searchedString}
              videos={videos}
              viewsFunc={viewsFunc}
              getUserData={getUserData}
              getaddToPlaylist={getaddToPlaylist}
              videoId={videoId}
            />
          }
        />
        {/* <Route path='/createPlaylist' element={<CreatePlaylist />} /> */}
        {/* <Route path='/comments' element={<Comments />} /> */}
      </Routes>
    </div>
  )
}

export default App
