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
                class="flex flex-col mb-2 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                {/* <div className="object-cover w-5 h-4 rounded-full thumbnail md:h-8 avatar">
                  <img
                    className="w-0.5 "
                    src={video.thumbnail.url}
                    alt="images"
                    onClick={() => {
                      document.getElementsByTagName(
                        "iframe"
                      )[0].src = `https://www.youtube.com/watch_popup?v=${video.channel.id}`
                    }}
                  />
                </div>
                 */}
                <div className="avatar-div">
                  <div className="flex items-center channel-name">
                    <img
                      class="w-10 rounded-full"
                      src={video.channel.icon}
                      alt="channel-icon"
                    />
                    <div class="mb-3 font-normal text-gray-700 px-2 text-sm dark:text-gray-400">
                      {video.channel.name}
                    </div>
                  </div>
                  <a
                    className="channel-id-player"
                    href={`https://www.youtube.com/channel/${video.channel.id}`}
                    target="_blabk"
                  ></a>
                  <div class="flex flex-col justify-between p-1 leading-normal">
                    <h10 class="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                      {video.title}
                    </h10>

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {video.title}
                    </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {video.title}
                    </p>
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
