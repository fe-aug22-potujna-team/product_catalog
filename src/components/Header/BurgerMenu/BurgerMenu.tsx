import React from 'react'
import './BurgerMenu.scss'
import logo from '../../../images/icons/main_logo.png'
import cart from '../../../images/icons/cart.png'
import heart from '../../../images/icons/heart.png'
import close from '../../../images/icons/close.png'

import { NavLink } from "react-router-dom";

export const BurgerMenu: React.FC = () => {
  const BASE_URL = '/product_catalog';
  const click = document.getElementById("close-button") as HTMLInputElement;
  
  return (
    <div className="menu" id="menu">
      <div className="menu__header">
        <a href="#home" className="header__logo">
          <img
            src={logo}
            alt="logo"
          />
        </a>
        <div className="close">
          <a href="#home">
            <img src={close} alt="logo" />
          </a>
        </div>
      </div>

      <div className="menu__items">
        <div className="menu__title">
          <NavLink to={`${BASE_URL}`} onClick={() => {click.click()}}>
            <div className="menu__link nav__link--is--active">
              HOME
            </div>
          </NavLink>
        </div>
        <div className="menu__title">
          <NavLink to={`${BASE_URL}/phones`} onClick={() => {click.click()}}>
            <div className="menu__link nav__link--is--active">
              PHONES
            </div>
          </NavLink>
        </div>
        <div className="menu__title">
          <NavLink to={`${BASE_URL}/tablets`} onClick={() => {click.click()}}>
            <div className="menu__link nav__link--is--active">
              TABLETS
            </div>
          </NavLink>
        </div>
        <div className="menu__title">
          <NavLink to={`${BASE_URL}/accessories`} onClick={() => {click.click()}}>
            <div className="menu__link nav__link--is--active">
              ACCESSORIES
            </div>
          </NavLink>
        </div>
      </div>

      <div className="menu__footer">
        <div className="menu__footer__cart menu__footer__cart__heart">
          <a href="#home">
            <img src={heart} alt="logo" />
          </a>
        </div>

        <div className="menu__footer__cart">
          <a href="#home">
            <img src={cart} alt="logo" />
          </a>
        </div>
      </div>
    </div>
  )
}
