// import axios from 'axios';
import React from "react"
// import React, { useState, useEffect } from 'react'
import VideoCardsHome from "./VideoCardsHome"
// import VideoIframe from '../VideoIframe/VideoIframe'
// import { useParams } from 'react-router-dom';
import Header from "./Nav"
import "./HomePage.css"
// import Footer from '../Footer/Footer'

function HomePage({
  getIndex,
  handleChange,
  handleSubmit,
  searchedString,
  videos,
  userData,
  forwardedRef,
}) {
  // const { id } = useParams();

  console.log(forwardedRef)

  // const options = {
  //     method: 'GET',
  //     url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
  //     params: { q: searchedString },
  //     headers: {
  //         'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
  //         'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  //     }
  // };

  // axios.request(options).then(function (response) {
  //     setVideos(response.data.items)
  //     setSuggestedVodeos(response.data.refinements)
  //     // console.log(response.data);

  // }).catch(function (error) {
  //     console.error(error);
  // });

  return (
    <div className="video-player-body">
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchedString={searchedString}
        forwardedRef={forwardedRef}
      />
      <div className="iframe-and-videoCards-container">
        {/* Display video cards */}
        <VideoCardsHome videos={videos} />
      </div>
    </div>
  )
}

export default HomePage
