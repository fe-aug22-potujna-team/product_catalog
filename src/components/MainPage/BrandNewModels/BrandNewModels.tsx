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
import { Product } from '../../../types/Product'
import './BrandNewModels.scss'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getBrandNew } from '../../../api/api'

const SampleNextArrow: React.FC = (props: any) => {
  const { onClick } = props

  return (
    <div>
      <a href="#home" className="brandNewModels__arrowRight" onClick={onClick}>
        <img src={slider_arrow_right} alt="arrow" className="brandNewModels__arrowRight__img"/>
      </a>
    </div>
  )
}

const SamplePrevArrow: React.FC = (props: any) => {
  const { onClick } = props

  return (
    <div>
      <a href="#home" className="brandNewModels__arrowLeft" onClick={onClick}>
        <img src={slider_arrow_left} alt="arrow" className="brandNewModels__arrowLeft__img"/>
      </a>
    </div>
  )
}

export const BrandNewModels: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Product[]>([])
  const [isError, setIsError] = useState(false)
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

  const getNewProductsFromServer = useCallback(
    async () => {
      try {
        const newProductsFromServer = await getBrandNew()

        setNewPhones(() => [...newProductsFromServer])
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
      <div className="brandNewModels">
        <h2 className="brandNewModels__title__M">Brand new models</h2>
        <h2 className="brandNewModels__title__S">Brand new<br />models</h2>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {(newPhones.length > 0) && (
        <div className="brandNewModels__slider">
          <Slider {...settings}>
            {newPhones.map(phone => (
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