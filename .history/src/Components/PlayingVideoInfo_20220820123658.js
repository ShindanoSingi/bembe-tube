import React from "react"
import "../Components/PlayingVideoInfo.css"

function PlayingVideoInfo({ videoObject, viewsFunc, getaddToPlaylist }) {
  // console.log(videoObject)

  // getaddToPlaylist(videoObject.id)
  return (
    videoObject.type === "video" && (
      <div className="video-info-container">
        eslint-disable-next-line
        <p className="playing-video-title">
          Title: {videoObject.title.charAt(0).toUpperCase()}
          {videoObject.title.substring(1).toLowerCase()}
        </p>
        <p className="playing-video-uploadedAt">
          Posted: {videoObject.uploadedAt}
        </p>
        <p className="playing-video-uploadedAt views">
          Views: {viewsFunc(videoObject.views)}
        </p>
        <div className="avatar-channelName-container">
          <img
            className="playing-video-avatar"
            src={videoObject.channel.icon}
            alt="channelAvatar"
          />
          <p className="playing-video-channel">
            {videoObject.channel.name.charAt(0).toUpperCase()}
            {videoObject.channel.name.substring(1).toLowerCase()}
          </p>
        </div>
      </div>
    )
  )
}

export default PlayingVideoInfo
