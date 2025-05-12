import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Carousel from "react-bootstrap/Carousel";
// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
const Slides: React.FC = () => {
  return (
    <>
      <Carousel className="mb-3">
        <Carousel.Item>
          <img
            src="https://mercury.akamaized.net/i/b01a12a7d0454d7f73e9b85a5ded4285_325228_0.jpg"
            alt="Image 2"
            style={{ width: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://mercury.akamaized.net/i/70936290599a97f686344f2b85caab2f_325235_0.jpg"
            alt="Image 1"
            style={{ width: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://mercury.akamaized.net/i/5bbadf2e4b8c42a0b7d3f573184b050e_325227_0.jpg"
            alt="Image 1"
            style={{ width: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://mercury.akamaized.net/i/adb41745cdf1a6b29929afd5d20766b2_318762_0.jpg"
            alt="Image 1"
            style={{ width: "100%" }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slides;
