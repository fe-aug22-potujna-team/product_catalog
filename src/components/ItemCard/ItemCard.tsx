import React from 'react';
import { useState } from 'react';
import cn from 'classnames'

import './ItemCard.scss';

import stroke from '../../images/icons/Vector (Stroke).png'
import heartLike from '../../images/icons/heartLike.png'
import heartLikeFull from '../../images/icons/heartLikeFull.png'
import greyArrowRight from '../../images/icons/Chevron (Arrow Right).png'
import home from '../../images/icons/Home.png'
import arrowRightDefault from '../../images/icons/Slider button - Default (right).png'
import arrowLeftDefault from '../../images/icons/Slider button - Default (LEFT).png'
import itemCard from '../../images/phones/itemCard.png'
import itemCardTablet from '../../images/phones/itemCardTablet.png'
import itemCard1 from '../../images/phones/itemCard1.png'
import itemCard1Tablet from '../../images/phones/itemCard1Tablet.png'
import itemCard1Mobile from '../../images/phones/itemCard1Mobile.png'
import itemCard2 from '../../images/phones/itemCard2.png'
import itemCard2Tablet from '../../images/phones/itemCard2Tablet.png'
import itemCard2Mobile from '../../images/phones/itemCard2Mobile.png'
import itemCard3 from '../../images/phones/itemCard3.png'
import itemCard3Tablet from '../../images/phones/itemCard3Tablet.png'
import itemCard3Mobile from '../../images/phones/itemCard3Mobile.png'
import itemCard4 from '../../images/phones/itemCard4.png'
import itemCard4Tablet from '../../images/phones/itemCard4Tablet.png'
import itemCard4Mobile from '../../images/phones/itemCard4Mobile.png'
import itemCard5 from '../../images/phones/itemCard5.png'
import itemCard5Tablet from '../../images/phones/itemCard5Tablet.png'
import itemCard5Mobile from '../../images/phones/itemCard5Mobile.png'


import { PhoneCard } from '../PhoneCard';
// import { ItemCardSlider } from './ItemCardSlider';
import { NavLink } from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div>
      <a href="#home" className='itemCard__slider__arrowRight' onClick={onClick}>
        <img src={arrowRightDefault} alt="arrow"/>
      </a>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div>
      <a href="#home" className='itemCard__slider__arrowLeft' onClick={onClick}>
        <img src={arrowLeftDefault} alt="arrow"/>
      </a>
    </div>
  );
}

export const ItemCard: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [like, setLike] = useState(false);
  const BASE_URL = '/product_catalog';
  
  const settings = {
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
      <div className='itemCard'>
        <div className='itemCard__home'>
          <NavLink to={`${BASE_URL}`}>
            <a href="#home">
              <img src={home} alt="home" />
            </a>
          </NavLink>

          <img src={greyArrowRight} alt="arrow" />

          <NavLink to={`${BASE_URL}/phones/`}>
            <a href="#home" className='itemCard__home__phones'>
              Phones
            </a>
          </NavLink>
          

          <img src={greyArrowRight} alt="arrow" />

          <h3 className='itemCard__home__phone itemCard__home__phone__tablet'>
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </h3>
          <h3 className='itemCard__home__phone itemCard__home__phone__mobile'>
            Apple iPhone 11 Pro Max...
          </h3>
        </div>

        <div className='itemCard__back'>
          <a href="#home" className='itemCard__back__img'>
            <img src={stroke} alt="arrow" />
          </a>

          <NavLink to={`${BASE_URL}/phones/`}>
            <a href="#home" className='itemCard__back__title'>
              Back
            </a>
          </NavLink>
        </div>

        <h1 className='itemCard__title'>
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h1>
        <h1 className='itemCard__title__tablet'>
          Apple iPhone 11 Pro Max 64GB Gold<br/>(iMT9G2FS/A)
        </h1>
        <h1 className='itemCard__title__mobile'>
          Apple iPhone 11 Pro Max<br/>64GB Gold (iMT9G2FS/A)
        </h1>

        <div className='itemCard__phone__phone'>
          <div>
            {/* <ItemCardSlider /> */}
            <div className='itemCard__phone__phone__container'>
              <div className='itemCard__phone__phone__container__item is-active'>
                <img src={itemCard1} alt="pic" className='itemCard__phone__phone__pic__desktop'/>
                <img src={itemCard1Tablet} alt="pic" className='itemCard__phone__phone__pic__tablet'/>
              </div>
              <div className='itemCard__phone__phone__container__item'>
                <img src={itemCard2} alt="pic" className='itemCard__phone__phone__pic__desktop'/>
                <img src={itemCard2Tablet} alt="pic" className='itemCard__phone__phone__pic__tablet'/>
              </div>
              <div className='itemCard__phone__phone__container__item'>
                <img src={itemCard3} alt="pic" className='itemCard__phone__phone__pic__desktop'/>
                <img src={itemCard3Tablet} alt="pic" className='itemCard__phone__phone__pic__tablet'/>
              </div>
              <div className='itemCard__phone__phone__container__item'>
                <img src={itemCard4} alt="pic" className='itemCard__phone__phone__pic__desktop'/>
                <img src={itemCard4Tablet} alt="pic" className='itemCard__phone__phone__pic__tablet'/>
              </div>
              <div className='itemCard__phone__phone__container__item'>
                <img src={itemCard5} alt="pic" className='itemCard__phone__phone__pic__desktop'/>
                <img src={itemCard5Tablet} alt="pic" className='itemCard__phone__phone__pic__tablet'/>
              </div>
            </div>
          </div>

          <div></div>

          <div className='itemCard__phone__phone__itemCard'>
            <img src={itemCard} alt="home" className='itemCard__phone__phone__itemCard__desktop'/>
            <img src={itemCardTablet} alt="home" className='itemCard__phone__phone__itemCard__tablet'/>
          </div>

          <div>
            <div className='itemCard__phone__phone__container2'>
              <div className='itemCard__phone__phone__container2__item is-active'>
                <img src={itemCard1Mobile} alt="pic"/>
              </div>
              <div className='itemCard__phone__phone__container2__item'>
                <img src={itemCard2Mobile} alt="pic"/>
              </div>
              <div className='itemCard__phone__phone__container2__item'>
                 <img src={itemCard3Mobile} alt="pic"/>
              </div>
              <div className='itemCard__phone__phone__container2__item'>
                <img src={itemCard4Mobile} alt="pic"/>
              </div>
              <div className='itemCard__phone__phone__container2__item'>
                <img src={itemCard5Mobile} alt="pic"/>
              </div>
            </div>
          </div>

          <div className='itemCard__phone__phone__info'>
            <div className='itemCard__phone__phone__colors__title'>
              Available colors
              <div className='itemCard__phone__phone__colors__id'>
                ID: 802390
              </div>
            </div>

            <div className='itemCard__phone__phone__colors__container'>
              <div className='itemCard__phone__phone__colors__container__item is-active'>
                <div className='inn inn__1'></div>
              </div>
              <div className='itemCard__phone__phone__colors__container__item'>
                <div className='inn inn__2'></div>
              </div>
              <div className='itemCard__phone__phone__colors__container__item'>
                <div className='inn inn__3'></div>
              </div>
              <div className='itemCard__phone__phone__colors__container__item'>
                <div className='inn inn__4'>
              </div>
            </div>
          </div>

          <div></div>

          <div className='itemCard__phone__phone__space__title'>Select capacity</div>
          <div className='itemCard__phone__phone__space__container'>
            <a href="#home">
              <div className='itemCard__phone__phone__space__container__item is-active'>
                64 GB
              </div>
            </a>
            
            <a href="#home">
              <div className='itemCard__phone__phone__space__container__item'>
                256 GB
              </div>
            </a>
            
            <a href="#home">
              <div className='itemCard__phone__phone__space__container__item'>
                512 GB
              </div>
            </a>
          </div>
            
          <div></div>

          <div className='itemCard__phone__phone__price__container'>
            <div className='price'>$799</div>
            <div></div>
            <div className='noPrice'>$1199</div>
          </div>

          <div></div>
            
          <div className='itemCard__phone__phone__addAndLike'>
            <button 
              onClick={() => {setSelected(!selected)}}
              className={cn('itemCard__phone__phone__addAndLike__add', { 
                  'itemCard__phone__phone__addAndLike__added': selected,
              })}
            >
              {selected ? 'Added' : 'Add to cart'}
            </button>

            <div></div>
            
            <div
              className='itemCard__phone__phone__addAndLike__like'
              onClick={() => setLike(true)}
            >
              {/* <a href="#home"> */}
                <img src={like ? heartLikeFull : heartLike} alt="like" className='likeImg'/>
              {/* </a> */}
            </div>
          </div>
            
            <div className='itemCard__phone__phone__techSpecs'>
              <div className='itemCard__phone__phone__techSpecs__name'>
                Screen
              </div>
              <div className='itemCard__phone__phone__techSpecs__data'>
                6.5” OLED
              </div>
            
              <div className='itemCard__phone__phone__techSpecs__name'>
                Resolution
              </div>
              <div className='itemCard__phone__phone__techSpecs__data'>
                2688x1242
              </div>

              <div className='itemCard__phone__phone__techSpecs__name'>
                Processor
              </div>
              <div className='itemCard__phone__phone__techSpecs__data'>
                Apple A12 Bionic
              </div>

              <div className='itemCard__phone__phone__techSpecs__name'>
                RAM
              </div>
              <div className='itemCard__phone__phone__techSpecs__data'>
                3 GB
              </div>
            </div>
          </div>
        </div>

        <div className='itemCard__phone__info'>
          <div className='itemCard__phone__info__about'>

            <div className='itemCard__phone__info__title'>
              About
            </div>

            <div className='itemCard__phone__info__about__title2'>
              And then there was Pro
            </div>
            <div className='itemCard__phone__info__text'>
              A transformative triple‑camera system that adds tons of capability without complexity.<br/><br/>An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.
            </div>
            <div className='itemCard__phone__info__about__title2'>
              Camera
            </div>
            <div className='itemCard__phone__info__text'>
              Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.
            </div>
            <div className='itemCard__phone__info__about__title2'>
              Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
            </div>
            <div className='itemCard__phone__info__text'>
              iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.
            </div>
          </div>

          <div>
            <div className='itemCard__phone__info__title'>
              Tech specs
            </div>

            <div className='itemCard__phone__info__techSpecs'>
              <div className='itemCard__phone__info__techSpecs__name'>
                Screen
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                6.5” OLED
              </div>
              
              <div className='itemCard__phone__info__techSpecs__name'>
                Resolution
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                2688x1242
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                Processor
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                Apple A12 Bionic
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                RAM
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                3 GB
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                Built in memory
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                64 GB
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                Camera
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                12 Mp + 12 Mp + 12 Mp (Triple)
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                Zoom
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                Optical, 2x
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                Cell
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                GSM, LTE, UMTS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='itemCard__slider'>
        <h2 className='itemCard__slider__title'>You may also like</h2>
      </div>

      <div className='itemCard__slider__slider'>
        <Slider {...settings}>
          {/* <div>
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
          </div> */}
        </Slider>
      </div>
    </>
  );
};
