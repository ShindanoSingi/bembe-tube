import React, { useState } from "react"
import { useParams } from "react-router-dom"
// import OnLoadPage from '../Components/OnLoadPage';
import "../Components/VideoIframe.css"

function VideoIframe({ videos, getPlayedVideoInfo, getVideoObject }) {
  // To capture the information of each video playing video, "videos" will be filtered
  // to return the video that includes the id is equal to the played video's id.
  const [playingVideoInfo, setPlayingVideoInfo] = useState(null)
  // console.log(useParams())
  let url = ""

  // console.log(videos[0])
  const { id } = useParams()

  const playedVideoInfo = videos.filter((video) => {
    if (video.id === id) {
      // console.log(video)
      getVideoObject(video)
    }
  })

  // If the user has not submitted a request for video, display a "Plese wait..." message.
  // if (videos.length < 1) {
  // 	return (
  // 			<OnLoadPage />
  // 		 )
  //  }

  // else {

  // console.log(id)

  if (id === ":id") {
    url = `https://www.youtube.com/watch_popup?v=yKJVlADjpus`
    return (
      <iframe
        className="w-screen h-3/6 md:h-96 iframe-home iframe-player"
        title="video"
        src={url}
        frameBorder="0"
        allowFullScreen
      />
    )
  }
  // getPlayedVideoInfo = { getPlayedVideoInfo }
  else {
    url = `https://www.youtube.com/watch_popup?v=${id}`
    return (
      <iframe
        className="w-screen iframe-home iframe-player"
        title="video"
        src={url}
        frameBorder="0"
        allowFullScreen
        getPlayedVideoInfo={getPlayedVideoInfo}
      />
    )
  }

  //  }
}

export default VideoIframe