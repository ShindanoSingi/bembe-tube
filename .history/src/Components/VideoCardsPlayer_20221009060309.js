import Wait from "./Wait"
import {wait} from "@testing-library/user-event/dist/utils"
import React from "react"
import {Link} from "react-router-dom"
import './VideoCardsPlayer.css'

// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({videos, viewsFunc}) => {
     // console.log(videos)

     // { videoId, videos, videoStat, likes, views}

     // console.log(videos);

     // if (videos[0] === undefined) {
     // console.log('No videos');
     // }

     return videos.length < 1 ? <Wait/>: (
          <div className="cards-container flex fixed flex-wrap no-scrollbar gap-2  top-[20.5rem] md:fixed  max-h-[42rem] mb-2 md:flex overflow-scroll lg:left-72  md:items-center  md:flex-wrap md:gap-1 lg:flex  lg:overflow-auto lg:flex-row  md:flex-row justify-content ">
               {
               videos.map((video, index) => video.type === "video" && (
                    <Link key={
                              index + 1
                         }
                         className="link"
                         to={
                              `/videoPlayer/${
                                   video.id
                              }`
                    }>
                         <div class="flex justify-center md:grid card  w-[98vw]   md:w-[98vw] mx-1  rounded-lg"
                              key={index}>
                              <div class="flex h-[8rem] w-[96.5vw] md:w-[97.8vw] lg:max-w-lg  gap-2 md:flex-row  rounded-lg bg-[#1E1E1E] ">
                                   <img className="w-[6rem] videoThumbnail h-[8rem] md:h-auto object-cover md:w-48 rounded-l-lg md:rounded-none md:rounded-l-lg"
                                        src={
                                             video.thumbnail.url
                                        }
                                        alt=""
                                        onClick={
                                             () => {
                                                  document.getElementsByTagName("iframe")[0].src = `https://www.youtube.com/watch_popup?v=${
                                                       video.channel.id
                                                  }`
                                             }
                                        }/>
                                   <div className="flex flex-col gap-2 py-2">
                                        <p className=" ml-0.5 md:invisible visible  lg:w-60 text-sm text-white">
                                             {
                                             video.title.charAt(0).toUpperCase() + video.title.substring(1, 38) + "..."
                                        } </p>

                                        <div className="flex gap-[0.1rem]">
                                             <div className="flex flex-col justify-start channel-name">
                                                  <img class="w-8 rounded-full"
                                                       src={
                                                            video.channel.icon
                                                       }
                                                       alt=""/>
                                                  <div class="mb-3 font-normal text-gray-700 text-xs dark:text-gray-400">
                                                       {
                                                       video.channel.name.substring(0, 11) + "..."
                                                  } </div>
                                             </div>

                                             <a className="channel-id-player"
                                                  href={
                                                       `https://www.youtube.com/channel/${
                                                            video.channel.id
                                                       }`
                                                  }
                                                  target="_blabk"></a>
                                             <ul class="flex flex-col md;flex  md:flex-row justify-between leading-normal">
                                                  <li class="mb-3 font-normal text-gray-700 text-xs dark:text-gray-400">
                                                       Views: {
                                                       viewsFunc(video.views)
                                                  } </li>
                                                  <li class="mb-3 relative bottom-4 font-normal text-gray-700 text-xs dark:text-gray-400">
                                                       Posted: {
                                                       video.uploadedAt
                                                  } </li>
                                                  <li class="mb-3 font-normal relative bottom-8 text-gray-700 text-xs dark:text-gray-400">
                                                       Duration: {
                                                       video.duration_formatted
                                                  } </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Link>
               ))
          } </div>
     )
}
export default VideoCards
