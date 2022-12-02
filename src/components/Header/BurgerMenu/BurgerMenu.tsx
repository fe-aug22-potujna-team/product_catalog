import React from 'react';
import './BurgerMenu.scss';
import logo from '../../../images/icons/main_logo.png'
import cart from '../../../images/icons/cart.png'
import heart from '../../../images/icons/heart.png'
import close from '../../../images/icons/close.png'

export const BurgerMenu: React.FC = () => {
  return (
    <div className='menu menu__with-hidden' id="menu">
      <div className='menu__header'>
        <a href="#home" className="header__logo">
          <img src={logo} alt="logo"
          />
        </a>
        <div className='close'>
          <a href="#home">
            <img src={close} alt="logo" />
          </a>
        </div>
      </div>
      
      <div className='menu__items'>
        <div className='menu__title'>
          <a href="#home" className="menu__link nav__link--is--active is-active">
            HOME
          </a>
        </div>
        <div className='menu__title'>
          <a href="#phones" className="menu__link">
            PHONES
          </a>
        </div>
        <div className='menu__title'>
          <a href="#tablets" className="menu__link">
            TABLETS
          </a>
        </div>
        <div className='menu__title'>
          <a href="#accessories" className="menu__link">
            ACCESSORIES
          </a>
        </div>
      </div>

      <div className='menu__footer'>
        <div className='menu__footer__cart menu__footer__cart__heart'>
          <a href="#home" >
            <img src={heart} alt="logo" />
          </a>
        </div>
    
        <div className='menu__footer__cart'>
          <a href="#home" >
            <img src={cart} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
