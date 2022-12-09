import React from 'react';
import { useState } from 'react';

import './ItemCardSlider.scss';

import itemCard from '../../../images/phones/itemCard.png'
import itemCard1 from '../../../images/phones/itemCard1.png'
import itemCard2 from '../../../images/phones/itemCard2.png'
import itemCard3 from '../../../images/phones/itemCard3.png'
import itemCard4 from '../../../images/phones/itemCard4.png'
import itemCard5 from '../../../images/phones/itemCard5.png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { baseUrl } from "./config";

export const ItemCardSlider: React.FC = () => {
  const settings = {
      customPaging: function(i: any) {
      return (
        <>
        <a>
          <img src={itemCard} />
        </a>
        <a>
          <img src={itemCard2} />
          </a>
          <a>
          <img src={itemCard3} />
        </a>
        </>
        
          // <div className='pos'>
          //   <img src={`itemCard${i+1}`} />
          // </div>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className='itemCard__phone__phone'>
      <div className='itemCard__phone__title__about'>
        {/* <div className='itemCard__phone__phone__container'>
          <div>
            <img src={itemCard1} alt="pic" className='itemCard__phone__phone__pic'/>
          </div>
          <div>
            <img src={itemCard2} alt="pic" className='itemCard__phone__phone__pic'/>
          </div>
          <div>
            <img src={itemCard3} alt="pic" className='itemCard__phone__phone__pic'/>
          </div>
          <div>
            <img src={itemCard4} alt="pic" className='itemCard__phone__phone__pic'/>
          </div>
          <div>
            <img src={itemCard5} alt="pic" className='itemCard__phone__phone__pic'/>
          </div>
        </div> */}

        <Slider {...settings}>
          <div>
            <img src={itemCard1} />
          </div>
          <div>
            <img src={itemCard2} />
          </div>
          {/* <div>
            <img src={itemCard3} />
          </div>
          <div>
            <img src={itemCard4} />
          </div>
          <div>
            <img src={itemCard5} />
          </div> */}
        </Slider>
      </div>
    </div>
  );
};
