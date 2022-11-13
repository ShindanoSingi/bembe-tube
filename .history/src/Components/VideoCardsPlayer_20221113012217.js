import Wait from "./Wait";
// import {wait} from "@testing-library/user-event/dist/utils"
import React from "react";
import { Link } from "react-router-dom";
import "./VideoCardsPlayer.css";

// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({ videos, viewsFunc }) => {
  // console.log(videos)

  // { videoId, videos, videoStat, likes, views}

  // console.log(videos);

  // if (videos[0] === undefined) {
  // console.log('No videos');
  // }

  return videos.length < 1 ? (
    <Wait />
  ) : (
    <div className="pt-2 cards-container ">
      {/* <div className="cards-container flex fixed flex-wrap no-scrollbar gap-2 xl:top-[0rem] top-[20.5rem] md:fixed md:mx-auto  max-h-[42rem] mb-2  overflow-scroll lg:absolute lg:left-10 lg:invisible   md:flex-wrap  lg:flex lg:flex-col lg:overflow-auto  justify-content "> */}
      {videos.map(
        (video, index) =>
          video.type === "video" && (
            <Link
              key={index + 1}
              className="link"
              to={`/videoPlayer/${video.id}`}
            >
              <div
                class="md:w-[48.5vw] xl:w-[30rem] mx-1 gap-2  rounded-lg md:border-none"
                key={index}
              >
                <div class="flex h-[8rem] single-card  gap-2 md:flex-row  rounded-lg lg:rounded-none bg-[#1E1E1E]">
                  <img
                    className="video-thumbnail md:h-auto xl :w-[4rem] object-cover md:w-48 rounded-lg"
                    src={video.thumbnail.url}
                    alt=""
                    onClick={() => {
                      document.getElementsByTagName(
                        "iframe"
                      )[0].src = `https://www.youtube.com/watch_popup?v=${video.channel.id}`;
                    }}
                  />
                  <div className="flex flex-col gap-2 py-2">
                    <p className=" ml-0.5 md:invisible visible display-none px-2 w-[13rem] md:w-[20rem] text-sm text-white">
                      {video.title.charAt(0).toUpperCase() +
                        video.title.substring(1, 40).toLowerCase() +
                        "..."}{" "}
                    </p>

                    <div className="flex gap-[0.1rem]">
                      <div className="flex flex-col justify-start channel-name">
                        <img
                          class="w-8 rounded-full"
                          src={video.channel.icon}
                          alt=""
                        />
                        <div class="mb-3 font-normal  text-xs dark:text-gray-300">
                          {video.channel.name.substring(0, 10) + "..."}{" "}
                        </div>
                      </div>

                      <a
                        className="channel-id-player"
                        href={`https://www.youtube.com/channel/${video.channel.id}`}
                        target="_blabk"
                      ></a>
                      <ul class="flex flex-col md:flex  md:justify-between justify-between leading-normal">
                        <li class="mb-3 font-normal text-xs dark:text-gray-300">
                          Views: {viewsFunc(video.views)}{" "}
                        </li>
                        <li class="mb-3 relative bottom-4 font-normal text-xs dark:text-gray-300">
                          Posted: {video.uploadedAt}{" "}
                        </li>
                        <li class="mb-3 font-normal relative bottom-8 text-xs dark:text-gray-300">
                          Duration: {video.duration_formatted}{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
      )}{" "}
    </div>
  );
};
export default VideoCards;
