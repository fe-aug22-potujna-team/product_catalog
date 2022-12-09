import React from 'react'
import './WelcomeTitle.scss'
import banner from '../../../images/Banner.png'
import banner189 from '../../../images/Banner189.png'
import banner320 from '../../../images/Banner320.png'
import slider_arrow_right from '../../../images/icons/slider_arrow_right.png'
import slider_arrow_left from '../../../images/icons/slider_arrow_left.png'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

function SampleNextArrow(props: any) {
  // const { className, style, onClick } = props;
  const { onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    <div>
      <a href="#home" className="welcomeTitle__arrowRight" onClick={onClick}>
        <img src={slider_arrow_right} alt="arrow" className="welcomeTitle__arrowRight__img" />
      </a>
    </div>
  )
}

function SamplePrevArrow(props: any) {
  // const { className, style, onClick } = props;
  const { onClick } = props;
  return (
  // <div
  //   className={className}
  //   style={{ ...style, display: "block", background: "green" }}
  //   onClick={onClick}
  // />
    <div>
      <a href="#home" className="welcomeTitle__arrowLeft" onClick={onClick}>
        <img src={slider_arrow_left} alt="arrow" className="welcomeTitle__arrowLeft__img" />
      </a>
    </div>
  )
}

export const WelcomeTitle: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (
    <>
      <div className="welcomeTitle">
        <div>
          <h2 className="welcomeTitle__title_L">Welcome to Nice Gadgets store!</h2>
          <h2 className="welcomeTitle__title_M">
            Welcome to Nice
            <br />
            Gadgets store!
          </h2>
          <h2 className="welcomeTitle__title_S">Welcome to Nice Gadgets store!</h2>
        </div>
      </div>

      <div className="welcomeTitle__Slider banner400">
        <Slider {...settings}>
          <div>
            <a href="#home">
              <img src={banner} alt="banner" />
            </a>
          </div>
          <div>
            <a href="#home" className="welcomeTitle__Slider__banner">
              <img src={banner} alt="banner" />
            </a>
          </div>
          <div>
            <a href="#home" className="welcomeTitle__Slider__banner">
              <img src={banner} alt="banner" />
            </a>
          </div>
        </Slider>
      </div>

      <div className="welcomeTitle__Slider banner189">
        <Slider {...settings}>
          <div className="banner_123">
            <a href="#home">
              <img src={banner189} alt="banner" />
            </a>
          </div>
          <div>
            <a href="#home" className="welcomeTitle__Slider__banner">
              <img src={banner189} alt="banner" />
            </a>
          </div>
          <div>
            <a href="#home" className="welcomeTitle__Slider__banner">
              <img src={banner189} alt="banner" />
            </a>
          </div>
        </Slider>
      </div>

      <div className="welcomeTitle__Slider banner320">
        <Slider {...settings}>
          <div className="banner_123">
            <a href="#home">
              <img src={banner320} alt="banner" />
            </a>
          </div>
          <div>
            <a href="#home" className="welcomeTitle__Slider__banner">
              <img src={banner320} alt="banner" />
            </a>
          </div>
          <div>
            <a href="#home" className="welcomeTitle__Slider__banner">
              <img src={banner320} alt="banner" />
            </a>
          </div>
        </Slider>
      </div>
    </>
  )
};
