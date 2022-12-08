import React from 'react';
import arrowRightDefault from '../../../images/icons/Slider button - Default (right).png'
import arrowLeftDefault from '../../../images/icons/Slider button - Default (LEFT).png'
import arrowRightDisabled from '../../../images/icons/Slider button - Disabled (right).png'
import arrowLeftDisabled from '../../../images/icons/Slider button - Disabled (LEFT).png'
import arrowRightHover from '../../../images/icons/Slider button - Hover (right).png'
import arrowLeftHover from '../../../images/icons/Slider button - Hover (LEFT).png'
import { PhoneCard } from '../../PhoneCard';
import './HotPrices.scss';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    <div>
      <a href="#home" className='hotPrices__arrowRight' onClick={onClick}>
        <img src={arrowRightDefault} alt="arrow"/>
      </a>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
  <div>
    <a href="#home" className='hotPrices__arrowLeft' onClick={onClick}>
      <img src={arrowLeftDefault} alt="arrow"/>
    </a>
  </div>
  );
}

export const HotPrices: React.FC = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      <div className='hotPrices'>
        <h2 className='hotPrices__title'>Hot prices</h2>
      </div>

      <div className='hotPrices__slider'>
        <Slider {...settings}>
          <div>
            <PhoneCard />
          </div>
          <div>
            <PhoneCard />
          </div>
          <div>
            <PhoneCard />
          </div>
          <div>
            <PhoneCard />
          </div>
          <div>
            <PhoneCard />
          </div>
          <div>
            <PhoneCard />
          </div>
          <div>
            <PhoneCard />
          </div>
          <div>
            <PhoneCard />
          </div>
        </Slider>
      </div>
    </>
  );
};
