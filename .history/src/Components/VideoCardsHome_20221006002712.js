import React from 'react';
import {Link} from 'react-router-dom';
import OnLoadPage from './OnLoadPage';
import '../Components/VideoCardsHome.css';


const VideoCardsHome = ({videos}) => { // console.log(videos)

     function viewsFunc(num) {
          if (num < 1000) 
               return num;
           else if ((num > 999) && (num < 1000000)) {
               num = (num / 1000).toFixed(1);
               return num + 'K';
          } else if ((num >= 1000000) && (num < 1000000000)) {
               num = (num / 1000000).toFixed(1);
               return num + 'M';
          } else if ((num > 1000000000) && (num < 1000000000000)) {
               num = (num / 1000000000).toFixed(1);
               return num + 'B';
          }
     }

     return(!videos ? < OnLoadPage /> : <div className="">
          {
          videos.map((video, index) => video.type === 'video' && (
               <Link className='link'
                    to={
                         `/videoPlayer/${
                              video.id
                         }`
               }>

                    <div key={index}
                         className='single-card'>

                         <img className='image'
                              src={
                                   video.thumbnail.url
                              }
                              height='60'
                              alt='images'
                              onClick={
                                   () => {
                                        document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${
                                             video.channel.id
                                        }`
                                   }
                              }/>

                         <div className="video-description">
                              <p className='title'
                                   onClick={
                                        () => {
                                             document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${
                                                  video.id
                                             }`
                                        }
                              }>
                                   Title: {
                                   video.title.charAt(0).toUpperCase()
                              }
                                   {
                                   video.title.substring(1).toLowerCase()
                              } </p>

                              <div className='avatar-channelName'>
                                   <img className="avatar"
                                        src={
                                             video.channel.icon
                                        }
                                        alt=''/>
                                   <a className='channel-id'
                                        href={
                                             `https://www.youtube.com/channel/${
                                                  video.channel.id
                                             }`
                                        }
                                        target='_blabk'>
                                        {
                                        video.channel.name
                                   } </a>
                              </div>

                              <p className='views views-text'>
                                   Views: {
                                   viewsFunc(video.views)
                              } </p>
                              <p className='views posted-text'>
                                   Posted: {
                                   video.uploadedAt
                              } </p>
                              <p className='views duration-text'>
                                   Duration: {
                                   video.duration_formatted
                              } </p>
                         </div>
                    </div>
               </Link>
          ))
     } </div>)
}
// }


export default VideoCardsHome;
