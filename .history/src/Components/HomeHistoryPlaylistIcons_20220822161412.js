import React from "react"
import { ImHome3 } from "react-icons/im"
import { MdPlaylistAdd } from "react-icons/md"
import { Link } from "react-router-dom"
import "./HomeHistoryPlaylist.css"

const HomeHistoryPlaylistIcons = () => {
  return (
    <div className="home-and-playlist-icons">
      {/* Home icon */}
      <Link to="/">
        <ImHome3 className="text-lg md:text-xl home-icon" />
      </Link>
      {/* Add a video to playlist icon */}
      {/* <MdPlaylistAdd className='addPlaylist-icon' /> */}
    </div>
  )
}

export default HomeHistoryPlaylistIcons
