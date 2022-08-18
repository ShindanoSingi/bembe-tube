import React, { useState, useEffect } from 'react'
import { FcDislike } from "react-icons/fc";


function Dislikes(likesCount) {

    const [dislikes, setDislikes] = useState(0)

    // icreament likes count by 1
    const decrement = () => {
        dislikes === 1 ? setDislikes(likesCount - 1) : setDislikes(likesCount);
    }


    return (
        <div className='dislike'>
            <FcDislike className='brokenHeart' onClick={() => decrement()} />
            <p className='playing-video-uploadedAt' >Dislike</p>
        </div>
    )
}

export default Dislikes