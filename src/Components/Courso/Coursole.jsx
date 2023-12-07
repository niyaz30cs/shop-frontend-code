import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Co.css"
import "../Pages/Responsive.css"
import Images from "./Images";
import { Link } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  nextArrow: (
    <div>
      <div className="next-slick-arrow"> ▶ </div>
    </div>
  ),
  prevArrow: (
    <div>
      <div className="prev-slick-arrow"> ◀ </div>
    </div>
  ),
};

function Coursole() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const [slider1, setSlider1] = useState(null)
  const [slider2] = useState(null)

  useEffect(()=>{
    setNav1(slider1);
    setNav2(slider2)
  },[slider1, slider2])

  return (
    <>
    {console.log(nav1)}
      <div className="content">
      <h2 className="header">Big Billions Days</h2>
      <div className="container">
        <Slider {...settings}
        asNavFor={nav2}
        ref={(slider)=>{setSlider1(slider)}}>
          {Images.map((item) => (
            <div key={item.id} className="midbox" >
              <img src={item.src} alt={item.alt} className="img" />
              <div className="title">
              <Link to={`/ClickPage/${item.title}`} state={item}>
              <h3 className="myText">{item.title}</h3></Link>
              <h3 className="myText">{item.description}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Coursole;