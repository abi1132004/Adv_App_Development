
// import React, { useEffect } from 'react';
import './LAUpage.css';
import video from '../../assets/video.mp4';
import { Link } from "react-router-dom";


const LAUpage = () => {
//   useEffect(() => {
//     const handleToggleClick = () => {
//       menuToggle.classList.toggle('active');
//       showcase.classList.toggle('active');
//     };

//     const menuToggle = document.querySelector('.toggle');
//     const showcase = document.querySelector('.showcase');

//     menuToggle.addEventListener('click', handleToggleClick);

//     return () => {
//       menuToggle.removeEventListener('click', handleToggleClick);
//     };
//   }, []);

  return (
    <div>
      <section className="showcase">
        <header>
          <h2 className="logo"></h2>
          <div className="toggle"></div>
        </header>
        <video src={video} muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
        </div>
      <div className="menu">
        <ul>
        <div className="admin"></div>
          <li>
            <Link to="/LoginPage">
                Admin Login
                </Link>
            </li>
          <br/><br/><br/><br/>
        <div className="user"></div>
        <li>
            <Link to="/LoginPage">
            User Login
            </Link>
        </li>
          
        </ul>
      </div>
      </section>
    </div>
  );
};

export default LAUpage;