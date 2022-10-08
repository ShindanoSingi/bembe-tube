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
          <div className="flex flex-wrap mt-1 overflow-auto lg:left-72 bg-[black] min-h-full  md:flex md:fle-row md:flex-wrap md:gap-1 lg:flex md:mt-8 lg:overflow-auto lg:flex-row md:flex-row justify-content ">
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
                              class="">

                              <div class="flex justify-center">
                                   <div class="flex max-w-xl mb-1  h-[10rem] md:max-w-xl rounded-lg bg-white shadow-lg">
                                        <img class=" w-full  md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt=""/>
                                        <div class="p-6 flex flex-col justify-start">
                                             <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                             <p class="text-gray-700 text-base mb-4">
                                                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                             </p>
                                             <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                                        </div>
                                   </div>
                              </div>

                              {/* <div className="">
                                   <img className="object-cover w-[scale-150] rounded-l-lg thumbnail"
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
                              </div>

                         <div className="flex gap-2 mt-4 flex-column">
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
                                             video.channel.name
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

                         <div className="video-description-player">
                              <p className="title-player"
                                   onClick={
                                        () => {
                                             document.getElementsByTagName("iframe")[0].src = `https://www.youtube.com/watch_popup?v=${
                                                  video.id
                                             }`
                                        }
                              }>
                                   Title: {
                                   video.title.toLowerCase()
                              } </p>

                              <div className="avatar-channelName-player">
                                   <img className="avatar-player"
                                        src={
                                             video.channel.icon
                                        }
                                        alt=""/>
                                   <a className="channel-id-player"
                                        href={
                                             `https://www.youtube.com/channel/${
                                                  video.channel.id
                                             }`
                                        }
                                        target="_blabk">
                                        {
                                        video.channel.name
                                   } </a>
                              </div>

                              <p className="views-player views-text-player">
                                   Views: {
                                   viewsFunc(video.views)
                              } </p>
                              <p className="views-player posted-text-player">
                                   Posted: {
                                   video.uploadedAt
                              } </p>
                              <p className="views-player duration-text-player">
                                   Duration: {
                                   video.duration_formatted
                              } </p>
                         </div> */} </div>
                    </Link>
               ))
          } </div>
     )
}
export default VideoCards
