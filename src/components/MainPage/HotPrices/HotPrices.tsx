import React, { useCallback, useEffect, useState } from 'react'
import Slider from 'react-slick'
import arrowRightDefault
  from '../../../images/icons/Slider button - Default (right).png'
import arrowLeftDefault
  from '../../../images/icons/Slider button - Default (LEFT).png'
// import arrowRightDisabled from '../../../images/icons/Slider button - Disabled (right).png'
// import arrowLeftDisabled from '../../../images/icons/Slider button - Disabled (LEFT).png'
// import arrowRightHover from '../../../images/icons/Slider button - Hover (right).png'
// import arrowLeftHover from '../../../images/icons/Slider button - Hover (LEFT).png'
import { PhoneCard } from '../../PhoneCard'
import './HotPrices.scss'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getBestPrice } from '../../../api/api'
import { Product } from '../../../types/Product'

const SampleNextArrow: React.FC = (props: any) => {
  const { onClick } = props

  return (
    <div>
      <a href="#home" className="hotPrices__arrowRight" onClick={onClick}>
        <img src={slider_arrow_right} alt="arrow" className="hotPrices__arrowRight__img"/>
      </a>
    </div>
  )
}

const SamplePrevArrow: React.FC = (props: any) => {
  const { onClick } = props

  return (
    <div>
      <a href="#home" className="hotPrices__arrowLeft" onClick={onClick}>
        <img src={slider_arrow_left} alt="arrow" className="hotPrices__arrowLeft__img"/>
      </a>
    </div>
  )
}

export const HotPrices: React.FC = () => {
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
  }
  const [bestPricePhone, setBestPricePhones] = useState<Product[]>([])
  const [isError, setIsError] = useState(false)

  const getNewProductsFromServer = useCallback(
    async () => {
      try {
        const newBestPriceFromServer = await getBestPrice()

        setBestPricePhones(() => [...newBestPriceFromServer])
      } catch (err) {
        setIsError(true)
      }
    }, []
  )

  useEffect(() => {
    void getNewProductsFromServer()
  }, [])
  return (
    <>
      <div className="hotPrices">
        <h2 className="hotPrices__title">Hot prices</h2>
        <div className='hotPrices__arrowCircle'></div>
        <div></div>
        <div className='hotPrices__arrowCircle'></div>
      </div>

      {(bestPricePhone.length > 0) && (
        <div className="brandNewModels__slider">
          <Slider {...settings}>
            {bestPricePhone.map(phone => (
              <div key={phone.id}>
                <PhoneCard phone={phone} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  )
}