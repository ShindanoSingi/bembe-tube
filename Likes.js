import React, { useState, useEffect } from 'react'
import { FcLike } from "react-icons/fc";


function Likes(likesCount) {
    const [likes, setLikes] = useState(0)

    // icreament likes count by 1
    const increment = () => {
        likes === 0 ? setLikes(likesCount + 1) : setLikes(likesCount);
    }

    return (
        <div className='likes-container'>
            <FcLike className='heart' onClick={() => { increment() }} />
            <p className='playing-video-uploadedAt'>{likesCount}</p>
        </div>
    )
}

export default Likes