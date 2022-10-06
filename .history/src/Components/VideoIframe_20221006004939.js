import React, {useState} from "react"
import {useParams} from "react-router-dom"
// import OnLoadPage from '../Components/OnLoadPage';

function VideoIframe({videos, getPlayedVideoInfo, getVideoObject}) {
     // To capture the information of each video playing video, "videos" will be filtered
     // to return the video that includes the id is equal to the played video's id.
     const [playingVideoInfo, setPlayingVideoInfo] = useState(null)
     // console.log(useParams())
     let url = ""

     // console.log(videos[0])
     const {id} = useParams()

     const playedVideoInfo = videos.filter((video) => {
          if (video.id === id) { // console.log(video)
               getVideoObject(video)
          }
     })

     if (id === ":id") {
          url = `https://www.youtube.com/watch_popup?v=yKJVlADjpus`
          return (
               <iframe src={url}
                    className="w-screen"
                    frameborder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          // <iframe
          // className="w-screen md:h-96 iframe-home iframe-player"
          // title="video"
          // src={url}
          // frameBorder="0"
          // allowFullScreen
          // />
          )
     } else {
          url = `https://www.youtube.com/watch_popup?v=${id}`
          return (
               <iframe title="video"
                    src={url}
                    frameBorder="0"
                    allowFullScreen
                    getPlayedVideoInfo={getPlayedVideoInfo}/>
          )
     }
}

export default VideoIframe
