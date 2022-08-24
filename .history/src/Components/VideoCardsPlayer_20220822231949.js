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
    <div className="">
      {videos.map(
        (video, index) =>
          video.type === "video" && (
            <Link
              key={index + 1}
              className="link"
              to={`/videoPlayer/${video.id}`}
            >
              <div
                key={index}
                className="flex flex-col items-center w-1/2 mb-2 bg-white border rounded-lg shadow-md h-fit md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-48 h-32 md:h-48 md:max-w-xl"
                  src={video.thumbnail.url}
                  alt="images"
                  onClick={() => {
                    document.getElementsByTagName(
                      "iframe"
                    )[0].src = `https://www.youtube.com/watch_popup?v=${video.channel.id}`
                  }}
                />

                <div className="flex flex-col gap-4 ml-1">
                  <div className="text-base w-75 title">
                    <h10 class="mb-1 text-md  font-bold tracking-tight text-gray-900">
                      {video.title.toLowerCase()}
                    </h10>
                  </div>

                  <div className="flex gap-1 avatar-div">
                    <div className="flex flex-col justify-start channel-name">
                      <img
                        class="w-10 rounded-full"
                        src={video.channel.icon}
                        alt="channel-icon"
                      />
                      <div class="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">
                        {video.channel.name}
                      </div>
                    </div>

                    <a
                      className="channel-id-player"
                      href={`https://www.youtube.com/channel/${video.channel.id}`}
                      target="_blabk"
                    ></a>
                    <div class="flex flex-col justify-between p-1 leading-normal">
                      <p class="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">
                        Views: {viewsFunc(video.views)}
                      </p>
                      <p class="mb-3 relative bottom-4 font-normal text-gray-700 text-sm dark:text-gray-400">
                        Posted: {video.uploadedAt}
                      </p>
                      <p class="mb-3 font-normal relative bottom-8 text-gray-700 text-sm dark:text-gray-400">
                        Duration: {video.duration_formatted}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="video-description-player">
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
                </div> */}
              </div>
            </Link>
          )
      )}
    </div>
  )
}

export default VideoCards
