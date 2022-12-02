import React from 'react';
import './Header.scss';
import logo from '../../images/icons/main_logo.png'
import cart from '../../images/icons/cart.png'
import heart from '../../images/icons/heart.png'
import burger from '../../images/icons/burger.png'
import { BurgerMenu } from './BurgerMenu';

export const Header: React.FC = () => {
  const cartCounts = 5;
  const likedCount = 12;

  return (
    <>
      <header className="header">
        <a href="#home" className="header__logo">
          <img src={logo} alt="logo"
          />
        </a>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link nav__link--is--active is-active">
                HOME
              </a>
            </li>
            <li className="nav__item">
              <a href="#phones" className="nav__link">
                PHONES
              </a>
            </li>
            <li className="nav__item">
              <a href="#tablets" className="nav__link">
                TABLETS
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#accessories" className="nav__link"
              >
                ACCESSORIES
              </a>
            </li>
          </ul>
        </nav>

        <div className='image__heartAndCart'>
          <a href="#home">
          <img
            src={heart}
            alt="logo"
            className="image"
          />
          </a>
        </div>
        {likedCount > 0 && (
          <div className="img-count img-count__heart">
            {likedCount}
          </div>
        )}
        
        <div className='image__heartAndCart'>
          <a href="#home">
          <img
            src={cart}
            alt="logo"
            className="image"
          />
          </a>
        </div>

        {cartCounts > 0 && (
          <div className="img-count img-count__cart">
            {cartCounts}
          </div>
        )}

        <div className='image__burger'>
          <a href="#menu">
          <img
            src={burger}
            alt="logo"
            className="image"
          />
          </a>
        </div>
      </header>

      <BurgerMenu />
    </>
  );
};
