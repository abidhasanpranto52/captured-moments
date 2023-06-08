import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../assets/Banner/banner1.jpeg'
import img2 from '../../../../assets/Banner/banner2.jpg'
import img3 from '../../../../assets/Banner/banner3.jpg'
import img4 from '../../../../assets/Banner/banner4.jpg'
import img5 from '../../../../assets/Banner/banner5.jpg'
import img6 from '../../../../assets/Banner/banner6.jpg'

const Banner = () => {
    return (
        <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
    );
};

export default Banner;