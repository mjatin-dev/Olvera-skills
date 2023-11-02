import React from "react";
import Slider from "react-slick";
import rightArrowIcon from "../../../assets/icons/Arrow   Right 2.png";
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightArrowIcon}
      className={className}
      style={{
        ...style,
        display: "block",
        height: "40px",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightArrowIcon}
      className={className}
      style={{
        ...style,
        display: "none",
        height: "40px",
        marginRight: "50px",
        transform: "rotate(180deg)",
      }}
      onClick={onClick}
    />
  );
};

const Slick = ({ children }) => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Large desktop
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Slick;
