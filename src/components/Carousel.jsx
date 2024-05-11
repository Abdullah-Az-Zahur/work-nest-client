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

export default function Carousel() {
  return (
    <div className="container mx-auto my-6 mb-9">
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
            image={`https://i.ibb.co/jRbRjrR/On-Site-Job.jpg`}
            text={
              "On-site role: Hands-on tasks, team collaboration, and workplace presence required."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={`https://i.ibb.co/HG6GCbM/Remote-Job.jpg`}
            text={
              "Remote role: Flexible location, independent tasks, and virtual collaboration."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={`https://i.ibb.co/LJQ5rHB/Hybrid.jpg`}
            text={
              'Hybrid role: Remote and on-site tasks. Flexible, collaborative, and adaptive.'
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={`https://i.ibb.co/NWK5k2y/Part-Time.jpg`}
            text={
              "Part-time opportunity: Flexible hours, focused tasks, and great for work-life balance."
            }
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
