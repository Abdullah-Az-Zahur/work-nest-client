// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

// import slide photo
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";

export default function Carousel() {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={slide1}
            text={
              "On-site role: Hands-on tasks, team collaboration, and workplace presence required."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={slide2}
            text={
              "Remote role: Flexible location, independent tasks, and virtual collaboration."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={slide3}
            text={
              'Hybrid role: Remote and on-site tasks. Flexible, collaborative, and adaptive.'
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={slide4}
            text={
              "Part-time opportunity: Flexible hours, focused tasks, and great for work-life balance."
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
