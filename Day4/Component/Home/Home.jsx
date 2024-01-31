import {useEffect} from 'react'
import './Home.css'
// import { Link } from 'react-router-dom'
import img1 from '../../assets/img1.jpg'
import Footer from '../Footer/Footer'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
// import { HiOutlineClipboardCheck } from 'react-icons/hi'
// import greenimg from '../../assets/greenery.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data=[
  {
    id:1,
    imgSrc:img1,
    desTitle:' Nakki Lake',
    location:'Mount Abu',
    grade:'CULTURAL RELAX',
    fees:'Rs.30000',
    description:'The popular hill station situated in the Aravalli Range, Mount Abu has several tourist attractions. Among those, Nakki Lake which is considered to be pious because of its historical importance is a must-visit spot. '
  },
  {
    id:2,
    imgSrc:img2,
    desTitle:' Gadisar Lake',
    location:' Rajasthan',
    grade:'RELAX',
    fees:'Rs.10000',
    description:"Enjoy the lush greenery on an early morning or evening boat ride at the Gadisar Lake, Rajasthan. This lake is one of the most precious assets for the locals and has been carrying the heritage and culture for generations."
  },
  {
    id:3,
    imgSrc:img3,
    desTitle:'Bedhaghat',
    location:'Jabalpur',
    grade:'CULTURAL RELAX',
    fees:'Rs.15000',
    description:'A spectacle of nature, Bhedaghat is a town located in the Jabalpur district in the state of Madhya Pradesh. Elevate your spirits in this picturesque location which has also been used as a setting for various movie scenes.'
  },
  {
    id:4,
    imgSrc:img4,
    desTitle:' Kumarakom Backwaters',
    location:'Kerala',
    grade:'MODERN RELAX',
    fees:'Rs.10000',
    description:"A trip to Kerala is incomplete if you do not get to enjoy the tranquil serenity of the Kumarakom backwaters. A small town located in Kottayam district of Kerala receives thousands of tourists everywhere who come to live up their dream of spending time on a houseboat in the backwaters."
  },
  {
    id:5,
    imgSrc:img5,
    desTitle:'Dal Lake',
    location:' Srinagar',
    grade:'NATURE',
    fees:'Rs.20000',
    description:'To go on a fascinating Shikara boat ride on the Dal Lake and live up the most captivating activity while you are in Srinagar. The awe-inspiring panoramic view of the lush green landscapes, the ripples forming on the lake water, flowering gardens, and the vibrant floating market will leave you enchanted. '
  },
  {
    id:6,
    imgSrc:img6,
    desTitle:' Hoganekkal',
    location:'TamilNadu',
    grade:'NATURAL RELAX',
    fees:'Rs.5000',
    description:'If you want to visit the Niagara Falls of India, head out to Hogaenakkal Waterfalls, Tamil Nadu, located at a distance of 200 kms from Bangalore in Dharmapuri district of Tamil Nadu'
  },
  {
    id:7,
    imgSrc:img7,
    desTitle:'Ganga Ghat',
    location:' Varanasi',
    grade:'STRUCTURAL CITY',
    fees:'Rs.30000',
    description:'The sacred River Ganga is believed to have magical powers of having the potential to wash off ones sins. Gliding through the water of Ganges to when the sun is rising or setting, you can experience the true essence of Varanasi. '
  },
  {
    id:8,
    imgSrc:img8,
    desTitle:' Naini Lake',
    location:'Nainital',
    grade:'CITY',
    fees:'Rs.15000',
    description:'Making time on the water is among the favourite recreational activity during summers. This eye-shaped lake, located at the height of 1938 meters, offer boating as the major attraction for tourists who seek some entertaining activities at the hill station.'
  },
  {
    id:9,
    imgSrc:img9,
    desTitle:'Bhimtal',
    location:'Nainital',
    grade:'CULTURAL RELAX',
    fees:'Rs.12000',
    description:"Bhimtal Lake in the Bhimtal Town is among the most famous lakes in India. There is an island in the middle of the lake which is an aquarium attracts visitors. The only way to reach the island is via boat."
  },
  {
    id:10,
    imgSrc:img10,
    desTitle:'Unkal Lake',
    location:'Karnataka',
    grade:'CULTURAL RELAX',
    fees:'Rs.14000',
    description:'A resplendent sunset at the Unkal Lake will leave you mesmerised. Go on a boat ride around the Lake and capture the ravishing sight in your camera to relive the moment time and again.'
  }
]
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  return (
    <>
      <div className="sectiontitle">
        <h1 data-aos="fade-up" className="sectitle">MOST VISITED PLACES</h1>
      </div>
    <section className='maincontainer section'>
      <div className="sectionbody grid">
        {
          Data.map(({id,imgSrc,desTitle,location,grade,fees,description})=>{
              return(
                <div data-aos="fade-down" key={id} className="singleDestination">
                  <div className="imagemain">
                    <img src={imgSrc} className="submainimg" alt={desTitle}/>
                  </div>
                  <div className="cardmain">
                    <h4 className="desTitle">{desTitle}</h4>
                    <span className="continentmain flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="namemain">{location}</span>
                    </span>
                    <div className='feesmain flex'>
                      <div className="grademain">
                        <span>{grade}<small className="smallmain">+..</small></span>
                      </div>
                      <div className="pricemain">
                        <h5>{desTitle}</h5>
                      </div>
                    </div>
                    <div className="descmain">
                        <p>{description}</p>
                    </div>
                    {/* <Link to="/Aboutus"><button className="btnmain flex">
                      DETAILS
                    </button></Link> */}
                  </div>
                </div>
              )
            })
        }
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home

