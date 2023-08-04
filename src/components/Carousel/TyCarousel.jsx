import React from "react";
import Slider from "react-slick";
import Content from '../Content'
import Ty from "../../Ty"

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
      {Ty.map((props) => (
        <Content
          image={props.image}
          blurImage={props.blurImage}
          activeSelection={props.activeSelection}
       />
       ))}
    </Slider>
  );
}