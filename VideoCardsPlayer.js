// import { RestaurantMenuRounded } from '@mui/icons-material';
import React from "react"
import { Link } from "react-router-dom"
import "../Components/VideoCardsPlayer.css"

// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({ videos, viewsFunc }) => {
  // console.log(videos)

  // { videoId, videos, videoStat, likes, views}

  // console.log(videos);

  // if (videos[0] === undefined) {
  // 	console.log('No videos');
  // }

  return (
    <div className="cards-player">
      {videos.map(
        (video, index) =>
          video.type === "video" && (
            <Link
              key={index + 1}
              className="link"
              to={`/videoPlayer/${video.id}`}
            >
              <div key={index} className="single-card-player">
                <img
                  className="image-player"
                  src={video.thumbnail.url}
                  height="60"
                  alt="images"
                  onClick={() => {
                    document.getElementsByTagName(
                      "iframe"
                    )[0].src = `https://www.youtube.com/watch_popup?v=${video.channel.id}`
                  }}
                />

                <div className="video-description-player">
                  <p
                    className="title-player"
                    onClick={() => {
                      document.getElementsByTagName(
                        "iframe"
                      )[0].src = `https://www.youtube.com/watch_popup?v=${video.id}`
                    }}
                  >
                    Title: {video.title.toLowerCase()}
                  </p>

                  <div className="avatar-channelName-player">
                    <img
                      className="avatar-player"
                      src={video.channel.icon}
                      alt=""
                    />
                    <a
                      className="channel-id-player"
                      href={`https://www.youtube.com/channel/${video.channel.id}`}
                      target="_blabk"
                    >
                      {video.channel.name}
                    </a>
                  </div>

                  <p className="views-player views-text-player">
                    Views: {viewsFunc(video.views)}
                  </p>
                  <p className="views-player posted-text-player">
                    Posted: {video.uploadedAt}
                  </p>
                  <p className="views-player duration-text-player">
                    Duration: {video.duration_formatted}
                  </p>
                </div>
              </div>
            </Link>
          )
      )}
    </div>
  )
}

export default VideoCards
