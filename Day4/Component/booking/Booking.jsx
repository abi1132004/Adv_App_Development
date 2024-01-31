// import {SiConsul} from 'react-icons/si';
// import video2 from '../../assets/video2.mp4'
// import {BsPhoneVibrate} from 'react-icons/bs';
// // import {CgMenuGridO} from 'react-icons/cg';
// import './booking.css'
// import {AiOutlineGlobal} from 'react-icons/ai';
// const Booking = () => {
//   return (
//     <>
//         <div className='navBar flex'>
//         <div className='navBarOne flex'>
//             <div>
//                 <SiConsul className='icon'/>
//             </div>
//             <div className='none flex'>
//                 <li className='flex'><BsPhoneVibrate className='icon'/>Support      .</li>
//                 <li className='flex'><AiOutlineGlobal className='icon'/>Languages      .</li>
//                 <li className='flex'><BsPhoneVibrate className='icon'/>AboutUs      .</li>
//                 <li className='flex'><AiOutlineGlobal className='icon'/>ContactUs</li>
//             </div>
//             <div className='atb flex'>
//                 <span>Sign In</span>
//                 <span>Sign Out</span>
//             </div>
//         </div>
//         </div>
//     <div className='home flex container'>
//          <div className="homeImages flex">
//              <div className="videoDiv1">
//                 <video src={video2} autoPlay muted loop className='video'></video> 
//              </div>
//          </div>
//     </div>
//     </>
//   )
// }
// export default Booking

// Apply.jsx
import Button from '@mui/material/Button';
import React from 'react';
import './booking.css';
import { Link } from 'react-router-dom';

class Booking extends React.Component {
  render() {
    return (
      <Booking1 />
    );
  }
}

class Booking1 extends React.Component {
  render() {
    return (<div className="ap-bg">
      <div className="ap-fc">
        <form className="ap-f" action="#" method="POST">
          <fieldset>
            <h1>Application Form</h1>
            <div className="ap-fn">
              <input type="text" name="Name" className="ap-fn" placeholder="Name" required />
            </div>
            <div className="ap-oi">
              <input type="date" name="dob" className="ap-dob" placeholder="Date of Birth" required />
              <select name="gender" className="ap-gender" required>
                <option value="" disabled selected hidden>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input type="text" name="address" className="ap-ad" placeholder="Address" required />
              <input type="tel" name="phone" className="ap-ph" placeholder="Telephone Number" required />
              <input type="email" name="email" className="ap-em" placeholder="Email Address" required />
              <input type="text" name="aadhar" className="ap-aadhar" placeholder="Aadhar Number" required />
            </div>
            <br /><br />
            <Link to ="/Payment">
            <Button className="ap-su">Book & Pay</Button>
            </Link>
          </fieldset>
        </form>
      </div>
      </div>
    );
  }
}

export default Booking;