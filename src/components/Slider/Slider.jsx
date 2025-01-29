// Import Swiper React components
import { FaSass, FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";

const Slider = () => {

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <FaReact style={{ fontSize: "250px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <RiJavascriptFill style={{ fontSize: "250px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <DiNodejs style={{ fontSize: "250px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <BiLogoTypescript style={{ fontSize: "250px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <FaSass style={{ fontSize: "250px" }} />
        </SwiperSlide>

        <SwiperSlide>
          <SiMysql style={{ fontSize: "250px" }} />
        </SwiperSlide>

        <SwiperSlide>
          <RiTailwindCssFill style={{ fontSize: "250px" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
