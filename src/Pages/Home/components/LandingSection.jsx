import "./LandingSection.css";
import Slider from "react-slick";
import Landing1 from "./Landing/Landing1";
import Landing2 from "./Landing/Landing2";
import Landing3 from "./Landing/Landing3";
const LandingSection = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" mx-auto h-[100vh]">
      <Slider {...settings}>
        <Landing1 />
        <Landing2 />
        <Landing3 />
      </Slider>
    </div>
  );
};

export default LandingSection;
