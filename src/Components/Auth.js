import React, { useState } from 'react';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Auth.css'


function Auth({ getUserData, videoId, getAddedVideoToPlaylistata }) {

  // const [registerUsername, setRegisterUsername] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const [videoId, setVideoId] = useState('');
  // const [id, setId] = useState('');
  // const [username, setUsername] = useState('');
  // const [playlist, setPlaylist] = useState([]);
  // const [history, setHistory] = useState([]);
  // const [comments, setComments] = useState([]);
  // const [likes, setLikes] = useState(false);
  // const [views, setViews] = useState(0);
  // const [signedin, setSignedin] = useState(false);

  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const register = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       username: registerUsername,
  //       password: registerPassword,
  //       playlist: playlist,
  //       history: history,
  //       comments: comments,
  //       likes: likes,
  //       views: views,
  //       signedin: signedin,
  //     },
  //     headers: {
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //       "Access-Control-Allow-Origin": "",
  //       "Allow": "GET",
  //       "Content-type": "Application/json",
  //     },
  //     withCredentials: true,
  //     url: "https://youtube-mate.herokuapp.com/api/user/register",
  //   })
  //     .then((res) => console.log(res));
  // };

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword
      },
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "",
        "Allow": "GET",
        "Content-type": "Application/json",
      },
      withCredentials: true,
      url: "https://youtube-mate.herokuapp.com/api/user/login",
    })
      .then((res) => {
        getUserData(res.data.user)
        console.log(res)
      });
  };

  const getUser = () => {
    Axios({
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "",
        "Allow": "GET",
        "Content-type": "Application/json",
      },
      withCredentials: true,
      url: "https://youtube-mate.herokuapp.com/api/user/user",
    }).then((res) => {
      console.log(res);
      setData(res.data);
    });
  };

  return (
    <>
      <div className='login-button ' >
        <Button variant="primary login-button" onClick={handleShow}>
          Login/Register
        </Button>
      </div>

      <Modal className='login-show' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Login or Register</Modal.Title>
        </Modal.Header>
        <div className='inputs-buttons-container' >
          <Modal.Body>

            <div className='input-container' >
              <input
                placeholder="username"
                onChange={(e) => { setLoginUsername(e.target.value) }}
              // onChange={(e) => { setRegisterUsername(e.target.value); setLoginUsername(e.target.value) }}
              />
              <input
                placeholder="password" type="password"
                onChange={(e) => { setLoginPassword(e.target.value) }}
              // onChange={(e) => { setRegisterPassword(e.target.value); setLoginPassword(e.target.value) }}
              />
            </div>

            <div className='buttons-container'>
              {/* <button onClick={register}>Register</button> */}
              <button onClick={() => {
                login()
                getUser()
              }}>Login</button>
            </div>
          </Modal.Body>
        </div>
        <Modal.Footer>
          <div className='modal-footer'>
            <Link to='/videoPlayer/:id'>
              <Button variant="secondary close-Button" onClick={handleClose}>Close</Button>
            </Link>

            <Button variant="secondary save-your-login-button" onClick={getUser}>Save Your Login</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default Auth;