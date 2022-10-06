import {Avatar} from '@mui/material'
import React from "react"


function PlayingVideoInfo({videoObject, viewsFunc, getaddToPlaylist}) {
     // console.log(videoObject)

     // getaddToPlaylist(videoObject.id)
     return(videoObject.type === "video" && (
          <div class="row gx-5">

               <div className="flex gap-4 py-1">
                    <div>
                         <Avatar className="playing-video-avatar"
                              src={
                                   videoObject.channel.icon
                              }
                              alt=""/>
                         <p className="playing-video-channel">
                              {
                              videoObject.channel.name.charAt(0).toUpperCase()
                         }
                              {
                              videoObject.channel.name.substring(1).toLowerCase()
                         } </p>
                    </div>

                    <div>
                         <h4>
                              <strong>{
                                   videoObject.title.substring(1, 60) + '...'
                              } </strong>
                         </h4>
                         <ul className="flex gap-2">
                              <li>{
                                   viewsFunc(videoObject.views)
                              }</li>
                              <li>{
                                   videoObject.uploadedAt
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
