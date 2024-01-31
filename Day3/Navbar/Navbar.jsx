// import React,{useState} from 'react';
import {SiConsul} from 'react-icons/si';
import {BsPhoneVibrate} from 'react-icons/bs';
// import {CgMenuGridO} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import {AiOutlineGlobal} from 'react-icons/ai';
import './Navbar.css'
// import img1 from '../../assets/img1.jpg'
const Navbar = () => {
  return (
    <>
    <div className='navBar'>
        <div className='navBarOne'>
            <div>
                <SiConsul className='icon'/>
            </div>
            <div className='atb'>
            <span><AiOutlineGlobal className='icon'/><Link to="/AdminSupport">Support</Link></span>
              <span><AiOutlineGlobal className='icon'/><Link to="/Contactus">ContactUs</Link></span>
              <span><BsPhoneVibrate className='icon'/><Link to="/Aboutus">AboutUs</Link></span>
              <span><BsPhoneVibrate className='icon'/><Link to="/Home">Places</Link></span>
                <span><Link to="/LoginPage">Sign In</Link></span>
                <span><Link to="/RegisterPage">Sign Out</Link></span>
            </div>
        </div>
        <div className='navBarTwo'>
            <div>
            <h1 className='hnav3'>Create beautiful memories with Us</h1>
            </div>
            <form className="boatnavh">
        <label>
          <h2>Boating on this man-made lake is an elegant way to enjoy the serene view and rich biodiversity; taking a slow pedal boat ride or a rowboat will make the aesthetic experience extra addictive. The restaurants will give an opportunity to relish the delicacies </h2>
        </label>
        <h2>Book with Us
Plan your trip to India right away and have a wonderful vacation. Do not forget to share your experience with us!</h2>
        <button type="submit"><Link to="/Booking">Book tickets</Link></button>
      </form>
        </div>
    </div>
    </>
  )
}
export default Navbar
