import React from 'react'
import './ShopByCategory.scss'
import imgDesktop1 from '../../../images/phones/shopByCategory1desktop.png'
import imgDesktop2 from '../../../images/phones/shopByCategory2desktop.png'
import imgDesktop3 from '../../../images/phones/shopByCategory3desktop.png'
import imgTablet1 from '../../../images/phones/shopByCategory1tablet.png'
import imgTablet2 from '../../../images/phones/shopByCategory2tablet.png'
import imgTablet3 from '../../../images/phones/shopByCategory3tablet.png'
import imgMobile1 from '../../../images/phones/shopByCategory1mobile.png'
import imgMobile2 from '../../../images/phones/shopByCategory2mobile.png'
import imgMobile3 from '../../../images/phones/shopByCategory3mobile.png'

export const ShopByCategory: React.FC = () => {
  return (
    <div className="shopByCategory_container">
      <div>
        <h2 className="block__title">Shop by category</h2>
      </div>

      <div className="category__container__desktop">
        <a href="#home" className="imgDesktop imgDesktop__1">
          <img src={imgDesktop1} alt="logo" className="img" />
        </a>

        <a href="#home" className="imgDesktop imgDesktop__2">
          <img src={imgDesktop2} alt="logo" className="img" />
        </a>

        <a href="#home" className="imgDesktop imgDesktop__3">
          <img src={imgDesktop3} alt="logo" className="img" />
        </a>
      </div>

      <div className="category__container__tablet">
        <a href="#home" className="imgDesktop imgDesktop__1">
          <img src={imgTablet1} alt="logo" className="img" />
        </a>

        <a href="#home" className="imgDesktop imgDesktop__2">
          <img src={imgTablet2} alt="logo" className="img" />
        </a>

        <a href="#home" className="imgDesktop imgDesktop__3">
          <img src={imgTablet3} alt="logo" className="img" />
        </a>
      </div>

      <div className="category__container__mobile">
        <a href="#home" className="imgDesktop imgDesktop__1">
          <img src={imgMobile1} alt="logo" className="img" />
        </a>
        <a href="#mobilePhones" className="title">
          Mobile phones
        </a>
        <h4 className="models__title">
          95 models
        </h4>

        <a href="#home" className="imgDesktop imgDesktop__2">
          <img src={imgMobile2} alt="logo" className="img" />
        </a>
        <a href="#tablets" className="title">
          Tablets
        </a>
        <h4 className="models__title">
          24 models
        </h4>

        <a href="#home" className="imgDesktop imgDesktop__3">
          <img src={imgMobile3} alt="logo" className="img" />
        </a>
        <a href="#accessories" className="title">
          Accessories
        </a>
        <h4 className="models__title">
          100 models
        </h4>
      </div>

      <div className="category__title">
        <a href="#mobilePhones" className="title">
          Mobile phones
        </a>

        <a href="#tablets" className="title">
          Tablets
        </a>

        <a href="#accessories" className="title">
          Accessories
        </a>
      </div>

      <div className="category__models">
        <h4 className="models__title">
          95 models
        </h4>
        <h4 className="models__title">
          24 models
        </h4>
        <h4 className="models__title">
          100 models
        </h4>
      </div>
    </div>
  )
}
