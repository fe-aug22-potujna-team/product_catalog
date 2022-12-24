import React, {Fragment, useCallback, useEffect} from 'react';
import { useState } from 'react';
import cn from 'classnames'

import './ItemCard.scss';

import stroke from '../../images/icons/Vector (Stroke).png'
import heartLike from '../../images/icons/heartLike.png'
import heartLikeFull from '../../images/icons/heartLikeFull.png'
import greyArrowRight from '../../images/icons/Chevron (Arrow Right).png'
import home from '../../images/icons/Home.png'


// import { PhoneCard } from '../PhoneCard';
// import { ItemCardSlider } from './ItemCardSlider';
import {Link, NavLink, useLocation, useParams} from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {ExtendedProduct} from "../../types/ExtendedProduct";
import { getProductById } from "../../api/products_api";

const BASE_SERVER_URL = 'https://luminous-cucurucho-0255ea.netlify.app/'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// function SampleNextArrow(props: any) {
//   const { onClick } = props;
//   return (
//     <div>
//       <a href="#home" className='itemCard__slider__arrowRight' onClick={onClick}>
//         <img src={arrowRightDefault} alt="arrow"/>
//       </a>
//     </div>
//   );
// }
//
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// function SamplePrevArrow(props: any) {
//   const { onClick } = props;
//   return (
//     <div>
//       <a href="#home" className='itemCard__slider__arrowLeft' onClick={onClick}>
//         <img src={arrowLeftDefault} alt="arrow"/>
//       </a>
//     </div>
//   );
// }

export const ItemCard: React.FC = () => {
  const { phoneId } = useParams();
  const [selected, setSelected] = useState(false);
  const [like, setLike] = useState(false);
  const [phone, setPhone] = useState<ExtendedProduct | null>(null);
  const [isError, setIsError] = useState(false);
  const [bigImg, setBigImg] = useState(`${BASE_SERVER_URL}${phone?.images[0]}`)
  const [pickedColor, setPickedColor] = useState(phone?.color);
  const [capacity, setCapacity] = useState(phone?.capacity);

  const getExtendedProduct = useCallback(
    async () => {
      try {
        const extendedProduct = await getProductById(phoneId)

        setPhone(extendedProduct);
      } catch (err) {
        setIsError(true)
      }
    }, [phoneId]
  )

  useEffect(() => {
    void getExtendedProduct();
  }, [getExtendedProduct])

  const transformColor = (color: string) => {
    switch (color) {
      case 'green':
        return '#bce7d4';

      case 'yellow':
        return '#ffe88a';

      case 'purple':
        return '#d4d1dc';

      case 'rosegold':
        return '#b76e79';

      case 'red':
        return '#970013';

      case 'midnightgreen':
        return '#2e3933';

      case 'spacegray':
        return '#302e2f';

      case 'silver':
        return '#e3e3db';

      case 'gold':
        return '#F7D5BA';

      case 'black':
        return '#1e201f';

      case 'white':
        return '#f7f7f7';

      case 'coral':
        return '#f9614c';

      default:
        return '#fff';
    }
  };

  const cuttedId = phone?.id && phone.id
    .split('-')

  cuttedId && cuttedId.pop();

  const link = cuttedId && cuttedId.join('-')

  console.log(link)

  const transformColorLink = useCallback((param: string) => {

    return `/phones/${link}-${param}`;
  }, [link]);

  const location = useLocation();
  const currentPhoneId = location.pathname
    .slice(location.pathname.lastIndexOf('/') + 1);
  const transformedLink = currentPhoneId.split('-');

  const transformCapacityLink = useCallback((param: string) => {
    const capacityLink = transformedLink[transformedLink.length - 2]
      .replace(/\d{2,3}/g, param).replace(/[GB]/g, '');
    const res = `${transformedLink.slice(0, -2).join('-')}-${capacityLink}-${transformedLink.slice(-1)}`;
    console.log(res);

    return res;
  }, []);



  console.log(phone);

  const BASE_URL = '/product_catalog';
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
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
            {phone?.name}
          </h3>
          <h3 className='itemCard__home__phone itemCard__home__phone__mobile'>
            {phone?.name}
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
          {phone?.name}
        </h1>
        <h1 className='itemCard__title__tablet'>
          {phone?.name}
        </h1>
        <h1 className='itemCard__title__mobile'>
          {phone?.name}
        </h1>

        <div className='itemCard__phone__phone'>
          <div>
            {/* <ItemCardSlider /> */}
            <div className='itemCard__phone__phone__container'>

              {phone?.images.map(img => (
                <div
                  className='itemCard__phone__phone__container__item'
                  key={img}
                >
                  <img
                    src={`${BASE_SERVER_URL}${img}`}
                    alt="pic"
                    className='itemCard__phone__phone__pic__desktop'
                    onClick={() => setBigImg(`${BASE_SERVER_URL}${img}`)}
                  />
                  <img
                    src={`${BASE_SERVER_URL}${img}`}
                    alt="pic"
                    className='itemCard__phone__phone__pic__tablet'
                    onClick={() => setBigImg(`${BASE_SERVER_URL}${img}`)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div></div>

          <div className='itemCard__phone__phone__itemCard'>
            <img src={bigImg} alt="home" className='itemCard__phone__phone__itemCard__desktop'/>
            <img src={bigImg} alt="home" className='itemCard__phone__phone__itemCard__tablet'/>
          </div>

          <div>
            <div className='itemCard__phone__phone__container2'>
              {phone?.images.map(img => (
                <div
                  className='itemCard__phone__phone__container2__item'
                  key={img}
                >
                  <img
                    className='itemCard__phone__phone__container2__item__img'
                    src={`${BASE_SERVER_URL}${img}`}
                    alt="pic"
                    onClick={() => setBigImg(`${BASE_SERVER_URL}${img}`)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='itemCard__phone__phone__info'>
            <div className='itemCard__phone__phone__colors__title'>
              Available colors
              <div className='itemCard__phone__phone__colors__id'>
                ID: 802390
              </div>
            </div>

            <ul className='itemCard__phone__phone__colors__container'>
              {phone?.colorsAvailable.map(color => (
                <li
                  className={cn('itemCard__phone__phone__colors__container__item',
                    {'is-active': pickedColor === color})}
                  key={color}
                  onClick={() => {setPickedColor(color)}}
                >
                  <Link to={`${transformColorLink(color)}`} />
                  <div
                    className='inn inn__1'
                    style={{ backgroundColor: `${transformColor(color)}` }}
                  >
                  </div>
                </li>
              ))}
          </ul>

          <div></div>

          <div className='itemCard__phone__phone__space__title'>Select capacity</div>
          <ul className='itemCard__phone__phone__space__container'>
            {phone?.capacityAvailable.map(currCapacity => (
              <li
                className='itemCard__phone__phone__space__container__li'
                key={currCapacity}
                onClick={() => {setCapacity(currCapacity)}}
              >
                <Link
                  to={`/phones/${transformCapacityLink(currCapacity)}`}
                  className={cn('itemCard__phone__phone__space__container__item',
                    {'is-active': currCapacity === capacity})}
                >
                  {currCapacity}
                </Link>
              </li>
            ))}
          </ul>
            
          <div></div>

          <div className='itemCard__phone__phone__price__container'>
            <div className='price'>{`$${phone?.priceDiscount}`}</div>
            <div></div>
            <div className='noPrice'>{`$${phone?.priceRegular}`}</div>
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
              onClick={() => setLike(!like)}
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
                {phone?.screen}
              </div>
            
              <div className='itemCard__phone__phone__techSpecs__name'>
                Resolution
              </div>
              <div className='itemCard__phone__phone__techSpecs__data'>
                {phone?.resolution}
              </div>

              <div className='itemCard__phone__phone__techSpecs__name'>
                Processor
              </div>
              <div className='itemCard__phone__phone__techSpecs__data'>
                {phone?.processor}
              </div>

              <div className='itemCard__phone__phone__techSpecs__name'>
                RAM
              </div>
              <div className='itemCard__phone__phone__techSpecs__data'>
                {phone?.ram}
              </div>
            </div>
          </div>
        </div>

        <div className='itemCard__phone__info'>
          <div className='itemCard__phone__info__about'>

            <div className='itemCard__phone__info__title'>
              About
            </div>
            {phone?.description.map(({ title, text }, i) => (
              <Fragment key={i}>
                <div className='itemCard__phone__info__about__title2'>
                  {title}
                </div>
                <div className='itemCard__phone__info__text'>
                  {text}
                </div>
              </Fragment>

            ))}
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
                {phone?.screen}
              </div>
              
              <div className='itemCard__phone__info__techSpecs__name'>
                Resolution
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                {phone?.resolution}
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                Processor
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                {phone?.processor}
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                RAM
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                {phone?.ram}
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                Built in memory
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                {phone?.capacity}
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                Camera
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                {phone?.camera}
              </div>

              <div className='itemCard__phone__info__techSpecs__name'>
                Zoom
              </div>
              <div className='itemCard__phone__info__techSpecs__data'>
                {phone?.zoom}
              </div>

              {/*<div className='itemCard__phone__info__techSpecs__name'>*/}
              {/*  Cell*/}
              {/*</div>*/}
              {/*<div className='itemCard__phone__info__techSpecs__data'>*/}
              {/*  GSM, LTE, UMTS*/}
              {/*</div>*/}
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
