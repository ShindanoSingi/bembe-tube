import {Avatar} from '@mui/material'
import React from "react"


function PlayingVideoInfo({videoObject, viewsFunc, getaddToPlaylist}) {
     // console.log(videoObject)

     // getaddToPlaylist(videoObject.id)
     return(videoObject.type === "video" && (
          <div></div>
     /* <div className="flex gap-2 p-1 text-xs">
                    <div className="w-[10rem]">
                         <Avatar className="playing-video-avatar"
                              src={
                                   videoObject.channel.icon
                              }
                              alt=""/>
                         <p className="text-xs playing-video-channel">
                              {
                              videoObject.channel.name.charAt(0) + videoObject.channel.name.toLowerCase().substring(1, 10) + "..."
                         } </p>
                    </div>

                    <div className="px-1 bg-green-600 w-[14rem]">
                         <h4 className="w-[15rem] pr-1">
                              <strong className="text-xs truncate ...">
                                   {
                                   videoObject.title
                              } </strong>
                         </h4>
                         <ul className="relative flex text-xs top-1 justify-evenly">
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
          </div> */
     ))
}

export default PlayingVideoInfo
