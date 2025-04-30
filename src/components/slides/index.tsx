import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
const Slides: React.FC = () => {
  return (
    <>
      <div style={{ height: "500px" }}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          style={{ height: "100%" }} // VERY IMPORTANT
        >
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-vector/flat-design-shopping-center-twitch-banner_23-2149337409.jpg?t=st=1746034601~exp=1746038201~hmac=53a6b45340505a3914deac068598e46f4a38dc9eaca44d4d8b38557b6fd18de6&w=2000"
              alt="Image 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-black-friday-twitch-banner_23-2149123838.jpg?t=st=1746034654~exp=1746038254~hmac=b1ccabc1acb707f157c38e7130447990b64638b7b76df5af5fc4d3fed1665543&w=2000"
              alt="Image 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
              <img
                src="https://via.placeholder.com/400x300?text=Image+3"
                alt="Image 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide> */}
        </Swiper>
      </div>
      {/* <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            alt="Image 1"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Image 2"
            style={{ width: "100%" }}
          />
        </SwiperSlide> */}
      {/* <SwiperSlide>
          <img
            src="https://via.placeholder.com/300x200?text=Image+3"
            alt="Image 3"
            style={{ width: "100%" }}
          />
        </SwiperSlide> */}
      {/* </Swiper> */}
    </>
  );
};

export default Slides;
