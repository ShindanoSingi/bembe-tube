import {Avatar} from '@mui/material'
import React from "react"


function PlayingVideoInfo({videoObject, viewsFunc, getaddToPlaylist}) {
     // console.log(videoObject)

     // getaddToPlaylist(videoObject.id)
     return(videoObject.type === "video" && (
          <div>
               <div className="flex gap-2 p-2 mx-2 text-xs">
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

                    <div className="w-48 bg-green-600">
                         <h4>
                              <strong className="text-xs">
                                   {
                                   videoObject.title.substring(0, 40) + '...'
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
          </div>


     // <div className="video-info-container">
     //      <p className="playing-video-title">
     //           Title: {
     //           videoObject.title.charAt(0).toUpperCase()
     //      }
     //           {
     //           videoObject.title.substring(1).toLowerCase()
     //      } </p>
     //      <p className="playing-video-uploadedAt">
     //           Posted: {
     //           videoObject.uploadedAt
     //      } </p>
     //      <p className="playing-video-uploadedAt views">
     //           Views: {
     //           viewsFunc(videoObject.views)
     //      } </p>
     //      <div className="avatar-channelName-container">
     //           <img className="playing-video-avatar"
     //                src={
     //                     videoObject.channel.icon
     //                }
     //                alt=""/>
     //           <p className="playing-video-channel">
     //                {
     //                videoObject.channel.name.charAt(0).toUpperCase()
     //           }
     //                {
     //                videoObject.channel.name.substring(1).toLowerCase()
     //           } </p>
     //      </div>
     // </div>
     ))
}

export default PlayingVideoInfo
