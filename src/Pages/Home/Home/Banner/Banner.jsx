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
        <div className="text-center absolute rounded-xl flex items-center h-full r-0 top-0 bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7">
              <h2 className=" md:text-6xl font-semibold">
                Unleash Adventure with Our Exciting Sports Photography!
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-warning btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest News</span>
                </button>
              </div>
            </div>
          </div>
      </div>
      <div>
        <img className="md:max-h-screen" src={img2} />
        <div className="text-center absolute rounded-xl flex items-center h-full r-0 top-0 bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7">
              <h2 className=" md:text-6xl font-semibold">
                Unleash Adventure with Our Exciting Travel Photography!
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-warning btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest News</span>
                </button>
              </div>
            </div>
          </div>
      </div>
      <div className="h-[250px]  md:max-h-screen">
        <img className="md:max-h-screen" src={img3} />
        <div className="text-center absolute rounded-xl flex items-center h-full r-0 top-0 bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7">
              <h2 className=" md:text-6xl font-semibold">
                Unleash Adventure with Our Exciting Wildlife Photography!
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-warning btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest News</span>
                </button>
              </div>
            </div>
          </div>
      </div>
      <div>
        <img className="md:max-h-screen" src={img4} />
        <div className="text-center absolute rounded-xl flex items-center h-full r-0 top-0 bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7">
              <h2 className=" md:text-6xl font-semibold">
                Unleash Adventure with Our Exciting Event Photography!
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-warning btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest News</span>
                </button>
              </div>
            </div>
          </div>
      </div>
      <div>
        <img className="md:max-h-screen" src={img5} />
        <div className="text-center absolute rounded-xl flex items-center h-full r-0 top-0 bg-gradient-to-r from-[#0f0f0f] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7">
              <h2 className=" md:text-6xl font-semibold">
                Unleash Adventure with Our Exciting Commercial Photography!
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-warning btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest News</span>
                </button>
              </div>
            </div>
          </div>
      </div>
      <div>
        <img className="md:max-h-screen" src={img6} />
        <div className="text-center absolute rounded-xl flex items-center h-full r-0 top-0 bg-gradient-to-r from-[#060628] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7">
              <h2 className=" md:text-6xl font-semibold">
                Unleash Adventure with Our Exciting Fashion Photography!
              </h2>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat excepturi accusantium provident! Voluptates, rem.
              </p>
              <div>
                <button className="btn btn-warning btn-xs md:btn-md btn-outline mr-5">
                  <span className="text-white">Latest News</span>
                </button>
              </div>
            </div>
          </div>
      </div>
    </Carousel>
    );
};

export default Banner;