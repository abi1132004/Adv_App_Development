import {useEffect} from 'react'
import './Footer.css'
import {FiSend} from 'react-icons/fi'
// import footerimg from "./assets/footerimg.mp4"
import blueimg from '../../assets/blueimg.jpg'
import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer= () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  return (
    <section className="footerstart">
      <div className="videoDiv">
        <img src="https://images.pexels.com/photos/273886/pexels-photo-273886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imgfooter"/>
      </div>
    <div className="footerbody">
      <div className="contactfooter flex">
        <div data-aos="fade-up" className="textfooter">
          <small className="smallfoot">BE SURE YOU ARE IN TOUCH</small>
          <h2 className="h2foot">Boat with us</h2>
        </div>
        <div className="inputfooter flex">
          <input data-aos="fade-up" className="infoot" type="text" placeholder='Enter ur email'/>
          <button data-aos="fade-up" className="btnfooter flex" type='submit'>SEND <FiSend className="ficon"/>
          </button>
        </div>
      </div>
      <div className="footercard flex">
        <div data-aos="fade-up" className='footerstar flex'>
          <div className='logofooter'>
            <a href="#" className="logof flex">
            <MdOutlineTravelExplore className="licon"/>Boating Plan
            </a>
          </div>
          <div data-aos="fade-up" className="footerpara">
          Whether you’re stuck in a rut, hungry for change and adventure, lacking motivation or self-confidence, the right inspirational quote can give you a well-needed kick up to get you on the right track towards achieving your goals
          </div>
          <div className='socialfooter'>
            <AiOutlineTwitter className='aicon'/>
            <AiFillYoutube className='aicon'/>
            <AiFillInstagram className='aicon'/>
          </div>
        </div>
        <div className="footerlink grid">
          <div data-aos="fade-up" className="linkgroup">
            <span className="footgptitle">
              BOAT BOOKING AGENCY
            </span>
            <li className='footerlist1 flex'>
              <FiChevronRight className="icon"/>
              Service
            </li>
            <li className='footerlist1 flex'>
              <FiChevronRight className="icon"/>
              Tourism
            </li>
            <li className='footerlist1 flex'>
              <FiChevronRight className="icon"/>
              Agency
            </li>
            <li className='footerlist1 flex'>
              <FiChevronRight className="icon"/>
              Payment
            </li>
          </div>
        </div> 
      </div>
    </div>
    </section>
  )
}

export default Footer
