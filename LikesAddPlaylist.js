import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';



function LikesAddPlaylist({ arrayPlaylistFunc, increment, decrement, likesDisLikeCount, videoObject } ) {

	console.log(videoObject)

	let { id } = useParams();


	// useEffect(() => {
	// 	if (id) {
	// 		arrayPlaylistFunc(id)
	// 	}
	// }, [id])


	return (
		<div className='like-dislike-playlist-container'>
		</div>
	)
}

export default LikesAddPlaylist

