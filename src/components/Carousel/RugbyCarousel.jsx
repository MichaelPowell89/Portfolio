import React from "react";
import Slider from "react-slick";
import Content from '../Content'
import Rugby from "../../Rugby"

export default function SimpleSlider(props) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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