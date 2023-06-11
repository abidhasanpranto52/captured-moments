import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
// import './banner.css'
import img1 from '../../../../assets/Banner/banner6.jpg'
import img2 from '../../../../assets/Banner/banner2.jpg'
import img3 from '../../../../assets/Banner/banner3.jpg'
import img4 from '../../../../assets/Banner/banner4.jpg'
import img5 from '../../../../assets/Banner/banner1.jpeg'
import img6 from '../../../../assets/Banner/banner5.jpg'

const Banner = () => {
    return (
        <Carousel className='text-center md:max-h-screen'>
      <div>
        <img className="md:max-h-screen" src={img1} />
      </div>
      <div>
        <img className="md:max-h-screen" src={img2} />
      </div>
      <div className="h-[250px]  md:max-h-screen">
        <img className="md:max-h-screen" src={img3} />
      </div>
      <div>
        <img className="md:max-h-screen" src={img4} />
      </div>
      <div>
        <img className="md:max-h-screen" src={img5} />
      </div>
      <div>
        <img className="md:max-h-screen" src={img6} />
      </div>
    </Carousel>
    );
};

export default Banner;