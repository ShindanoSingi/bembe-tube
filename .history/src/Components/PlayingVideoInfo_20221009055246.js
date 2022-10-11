import {Avatar} from '@mui/material'
import React from "react"


function PlayingVideoInfo({videoObject, viewsFunc, getaddToPlaylist}) {
     // console.log(videoObject)

     // getaddToPlaylist(videoObject.id)
     return(videoObject.type === "video" ? (
          <div class="flex text-white gap-2 p-1 md:p-2 mx-auto bg-lime-400">
               <div class="flex rounded-lg shadow-lg bg-red-600">
                    <div className="w-[5rem] mt-2 ">
                         <img className="w-8 rounded-full playing-video-avatar"
                              src={
                                   videoObject.channel.icon
                              }
                              alt=""/>
                         <p className=" md:text-sm playing-video-channel text-[#AAAAAA]">
                              {
                              videoObject.channel.name.charAt(0) + videoObject.channel.name.toLowerCase().substring(1, 10) + "..."
                         } </p>
                    </div>
                    <div class="p-1 flex flex-col justify-start">
                         <h5 class="text-xs videoTitle mb-2 md:text-lg">
                              {
                              videoObject.title.charAt(0) + videoObject.title.substring(1, 40) + "..."
                         }</h5>
                         <ul className="flex text-xs md:text-24 justify-evenly text-[#AAAAAA]">
                              <li>{
                                   viewsFunc(videoObject.views)
                              }</li>
                              <li>{
                                   videoObject.uploadedAt.substring(0, videoObject.uploadedAt.length - 3)
                              }</li>
                              <li>{
                                   videoObject.duration_formatted
                              }</li>
                         </ul>
                    </div>
               </div>
          </div>
     ) : <div class="flex rounded-lg h-6 shadow-lg "></div>)
}

export default PlayingVideoInfo
