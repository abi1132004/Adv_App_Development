// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Main = () => {
//   // Sample images, replace these with your image URLs
//   const images = [
//     'https://images.pexels.com/photos/261516/pexels-photo-261516.jpeg?auto=compress&cs=tinysrgb&w=600',
//     'https://images.pexels.com/photos/1499139/pexels-photo-1499139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/2035883/pexels-photo-2035883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/1466333/pexels-photo-1466333.jpeg',
//     'https://images.pexels.com/photos/2132008/pexels-photo-2132008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   ];

//   // Slick settings
//   const settings = {
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 800, // Set the speed to your preference (in milliseconds)
//   };

//   return (
//     <>
//     <div >
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img style={{width: '100%', height: '100vh'}} src={image} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//     </>
//   );
// };

// export default Main;


// /*
// import video from '../../assets/video.mp4'
// const Main = () => {
//   return (
//     <div className='home flex container'>
//         <div className="mainText">
//             <h1>Create beautiful memories with Us</h1>
//         </div>
//         <div className="homeImages flex">
//             <div className="videoDiv">
//                <video src={video} autoPlay muted loop className='video'></video> 
//             </div>
//         </div>
//     </div>
//   )
// }
// export default Main
// /*
// */
import Footer from '../Footer/Footer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../Navbar/Navbar';
// import Navbar from '../Navbar/Navbar';
// import './Main.css'
const Main = () => {
  const images = [
    'https://images.pexels.com/photos/261516/pexels-photo-261516.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1499139/pexels-photo-1499139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2035883/pexels-photo-2035883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1466333/pexels-photo-1466333.jpeg',
    'https://images.pexels.com/photos/2132008/pexels-photo-2132008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
  };

  return (
    <>
    <Navbar/>
      <div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img style={{ width: '100%', height: '100vh' }} src={image} alt={`Slide ${index + 1}`} />     
            </div>
          ))}
        </Slider>
      </div>
      <Footer/>
    </>
  );
};
export default Main;
