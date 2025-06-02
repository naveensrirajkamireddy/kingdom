import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Carousel from "react-bootstrap/Carousel";
// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import { useGetSlidersQuery } from "../../graphql/generated";
import { useEffect, useState } from "react";
const Slides: React.FC = () => {

  const {data, loading, error} = useGetSlidersQuery();
  const [sliders, setSliders] = useState<any[]>([]);

  useEffect(() => {
    if(data?.getSliders) {
      setSliders(data?.getSliders)
    }
  }, [data]);

  return (
    <>
      <Carousel className="mb-3">
        {sliders.map((item, index) => (
          <Carousel.Item>
            <img
              src={item?.imageUrl}
              alt="Image"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>  
        ))}
      </Carousel>
    </>
  );
};

export default Slides;
