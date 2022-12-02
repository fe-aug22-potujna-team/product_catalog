import React from 'react';
import './Header.scss';
import logo from '../../images/icons/main_logo.png'
import cart from '../../images/icons/cart.png'
import heart from '../../images/icons/heart.png'
import burger from '../../images/icons/burger.png'
import { BurgerMenu } from './BurgerMenu';
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const BASE_URL = '/product_catalog';
  
  const cartCounts = 5;
  const likedCount = 12;

  return (
    <>
      <header className="header">
        <NavLink to={`${BASE_URL}/`} className="header__logo">
          <img src={logo} alt="logo"
          />
        </NavLink>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to={`${BASE_URL}/`}
                end
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--is--active is-active" : "nav__link"
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={`${BASE_URL}/phones`}
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--is--active is-active" : "nav__link"
                }
              >
                PHONES
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={`${BASE_URL}/tablets`}
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--is--active is-active" : "nav__link"
                }
              >
                TABLETS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={`${BASE_URL}/accessories`}
                className={({ isActive }) =>
                  isActive ? "nav__link nav__link--is--active is-active" : "nav__link"
                }
              >
                ACCESSORIES
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='image__heartAndCart'>
          <NavLink to={`${BASE_URL}/favorites`}
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--is--active is-active" : "nav__link"
            }
          >
            <img
              src={heart}
              alt="logo"
              className="image"
            />
          </NavLink>
        </div>
        {likedCount > 0 && (
          <div className="img-count img-count__heart">
            {likedCount}
          </div>
        )}
        
        <div className='image__heartAndCart'>
          <NavLink to={`${BASE_URL}/checkout`}
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--is--active is-active" : "nav__link"
            }
          >
            <img
              src={cart}
              alt="logo"
              className="image"
            />
          </NavLink>
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
