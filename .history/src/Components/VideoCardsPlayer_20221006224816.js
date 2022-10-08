import Wait from "./Wait"
import {wait} from "@testing-library/user-event/dist/utils"
import React from "react"
import {Link} from "react-router-dom"

// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({videos, viewsFunc}) => {
     // console.log(videos)

     // { videoId, videos, videoStat, likes, views}

     // console.log(videos);

     // if (videos[0] === undefined) {
     // console.log('No videos');
     // }

     return !videos ? <Wait/>: (
          <div className="flex flex-wrap top-[21rem] max-h-[10rem] fixed mx-auto overflow-auto overflow-y-hidden lg:left-72 bg-[black] min-h-full  md:flex md:fle-row md:flex-wrap md:gap-1 lg:flex md:mt-8 lg:overflow-auto lg:flex-row md:flex-row justify-content ">
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

                         <div key={index}
                              class=" w-[95vw] flex h-[10rem] gap-1 lg:mb-1.5 flex-row mb-1.5 items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-900 lg:rounded-r-lg">

                              <img className="w-[8rem] h-[10rem] md:h-auto object-cover md:w-48 rounded-l-lg md:rounded-none md:rounded-l-lg"
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


                              <div className="flex gap-2 flex-column">
                                   <p className="ml-0.5 pt-2 lg:w-60 text-sm tracking-tight text-gray-900">
                                        {
                                        video.title.toLowerCase()
                                   } </p>

                                   <div className="flex gap-1 avatar-div">
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
                                        <div class="flex flex-col justify-between p-1 leading-normal">
                                             <p class="mb-3 font-normal text-gray-700 text-xs dark:text-gray-400">
                                                  Views: {
                                                  viewsFunc(video.views)
                                             } </p>
                                             <p class="mb-3 relative bottom-4 font-normal text-gray-700 text-xs dark:text-gray-400">
                                                  Posted: {
                                                  video.uploadedAt
                                             } </p>
                                             <p class="mb-3 font-normal relative bottom-8 text-gray-700 text-xs dark:text-gray-400">
                                                  Duration: {
                                                  video.duration_formatted
                                             } </p>
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
