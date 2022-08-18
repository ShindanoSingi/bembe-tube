import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './NavBarMiddle.css';
import PlayingVideoInfo from './PlayingVideoInfo';
import { MdPlaylistAdd } from "react-icons/md";
import Axios from "axios";
import { useState } from 'react';


const NavBarMiddle = ({ videoObject, viewsFunc, getaddToPlaylist, videoId, userData }) => {

    console.log(userData.username);

    // const [value, setValue] = React.useState('recents');
    const [loginUsername, setLoginUsername] = useState('');

    const [addVideoId, setAddVideoId] = useState('');

    // const handleChange = (event, newValue) => {
    // 	setValue(newValue);
    // };

    const addToPlaylist = () => {

        let item = { loginUsername, addVideoId }
        console.log('item', item);


        fetch(`https://youtube-mate.herokuapp.com/api/user/addToPlaylist`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                "Content-type": "Application/json",
            },
            body: JSON.stringify(item)
        })

            .then(response => response.json())
            .then(response => console.log(response))
        // .then((res) => {
        // 	// getUserData(res.data.user)
        // 	// getAddedVideoToPlaylistata(res.data)
        // 	console.log(res)
        // });
    };

    const getPlayList = () => {
        Axios({
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "Access-Control-Allow-Origin": "",
                "Allow": "GET",
                "Content-type": "Application/json",
            },
            withCredentials: true,
            url: "https://youtube-mate.herokuapp.com/api/user/playlist",
        }).then((res) => {
            console.log(res);
            // setData(res.data);
        });
    };



    return (

        //<BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
        <div className="nav-bar-middle" >
            <PlayingVideoInfo videoObject={videoObject}
                viewsFunc={viewsFunc}
                getaddToPlaylist={getaddToPlaylist}
            />
            <BottomNavigationAction className="add-to-playlist"
                icon={< MdPlaylistAdd onClick={() => {
                    addToPlaylist()
                    getPlayList()
                }
                }
                />} />

            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={< LocationOnIcon />}
            />

            <BottomNavigationAction label="Folder"
                value="folder"
                icon={< FolderIcon />}
            />

        </div>
        //</BottomNavigation>

    );
}

export default NavBarMiddle;