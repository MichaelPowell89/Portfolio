import React from "react";
import Slider from "react-slick";
import Content from '../Content'
import AFLE2 from "../../AFLE2";

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
      {AFLE2.map((props) => (
        <Content
          image={props.image}
          blurImage={props.blurImage}
          activeSection={props.activeSection}
       />
       ))}
    </Slider>
  );
}