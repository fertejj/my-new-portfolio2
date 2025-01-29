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
  const sizeIcons = { fontSize: "250px" };
  const icons = [
    { id: 1, component: <FaReact style={sizeIcons} /> },
    { id: 2, component: <RiJavascriptFill style={sizeIcons} /> },
    { id: 3, component: <DiNodejs style={sizeIcons} /> },
    { id: 4, component: <BiLogoTypescript style={sizeIcons} /> },
    { id: 5, component: <FaSass style={sizeIcons} /> },
    { id: 6, component: <SiMysql style={sizeIcons} /> },
    { id: 7, component: <RiTailwindCssFill style={sizeIcons} /> },
  ];

  return (
    <section className="section-slider" id="slider">
      <h5>Mi stack</h5>
      <h2>de desarrollo</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {icons.map((icon) => (
          <SwiperSlide key={icon.id}>{icon.component}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
