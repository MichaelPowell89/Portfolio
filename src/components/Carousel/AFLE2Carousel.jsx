import React from "react";
import Slider from "react-slick";
import Content from '../Content'
import AFLE2 from "../../AFLE2";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {AFLE2.map((props) => (
        <Content
          image= {props.image}
       />
       ))}
    </Slider>
  );
}