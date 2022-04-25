import React from "react";
import Slider from "react-slick";
import Content from '../Content'
import Rugby from "../../Rugby"

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {Rugby.map((props) => (
        <Content
          image={props.image}
       />
       ))}
    </Slider>
  );
}