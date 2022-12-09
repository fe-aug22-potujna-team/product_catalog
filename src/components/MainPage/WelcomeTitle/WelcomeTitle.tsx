import React from 'react'
import Slider from 'react-slick'
import './WelcomeTitle.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BASE_SERVER_URL = 'https://luminous-cucurucho-0255ea.netlify.app/img/'
const banner = `${BASE_SERVER_URL}Banner.png`
const banner189 = `${BASE_SERVER_URL}Banner189.png`
const banner320 = `${BASE_SERVER_URL}Banner320.png`
const sliderArrowRight = `${BASE_SERVER_URL}icons/slider_arrow_right.png`
const sliderArrowLeft = `${BASE_SERVER_URL}icons/slider_arrow_left.png`
const SampleNextArrow: React.FC = (props: any) => {
  const { onClick } = props

  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    <div>
      <a href="#home" className="welcomeTitle__arrowRight" onClick={onClick}>
        <img
          src={sliderArrowRight}
          alt="arrow"
          className="welcomeTitle__arrowRight__img"
        />
      </a>
    </div>
  )
}

const SamplePrevArrow: React.FC = (props: any) => {
  const { onClick } = props

  return (
  // <div
  //   className={className}
  //   style={{ ...style, display: "block", background: "green" }}
  //   onClick={onClick}
  // />
    <div>
      <a href="#home" className="welcomeTitle__arrowLeft" onClick={onClick}>
        <img
          src={sliderArrowLeft}
          alt="arrow"
          className="welcomeTitle__arrowLeft__img"
        />
      </a>
    </div>
  )
}

export const WelcomeTitle: React.FC = () => {
  const settings = {
    dots: true,
    // dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

    // customPaging: (i: any) => (
    //     <div className='slick-dots'
    //       style={{
    //         width: "20px",
    //         color: "black",
    //         border: "3px black solid"
    //       }}
    //     >
    //     </div>
    //   )
  }

  return (
    <>
      <div className="welcomeTitle">
        <div>
          <h2 className="welcomeTitle__title_L">
            Welcome to Nice Gadgets store!
          </h2>
          <h2 className="welcomeTitle__title_M">
            Welcome to Nice
            <br />
            Gadgets store!
          </h2>
          <h2 className="welcomeTitle__title_S">
            Welcome to Nice Gadgets store!
          </h2>
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
}
