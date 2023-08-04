import React from "react";
import Slider from "react-slick";
import Content from '../Content'
import Rugby from "../../Rugby"
import { ProSidebar } from "react-pro-sidebar";

export default function SimpleSlider(props) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: !props.mobileResolution
  };

  return (
    <Slider {...settings}>
      {Rugby.map((props) => (
        <Content
          image={props.image}
          blurImage={props.blurImage}
       />
       ))}
    </Slider>
  );
}