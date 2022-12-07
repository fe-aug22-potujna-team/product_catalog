import React from 'react';
import { PhoneCard } from '../PhoneCard';
import './FavoritesPage.scss';
import home from '../../images/icons/home.svg';
import right from '../../images/icons/rightArrow.svg';

export const FavoritesPage: React.FC = () => {
  return (
    <div className='favorites__container'>
      <section className='favorites'>
        <div className='favorites__menu'>
          <a className='favorites__home' href='/product_catalog/'>
            <img className='favorites__home-icon' src={home} alt='home'></img>
          </a>
          <img className='favorites__arrow-icon' src={right} alt='ridht arrow'></img>
          <p className='favorites__page'>Favourites</p>
        </div>
        <h2 className='favorites__heading'>Favourites</h2>
        <p className='favorites__description'>5 items</p>
        <div className='favorites__phones-container'>
          <div className='favorites__phones'>
            <div className='favorites__card'>
              <PhoneCard />
            </div>
            <div className='favorites__card'>
              <PhoneCard />
            </div>
            <div className='favorites__card'>
              <PhoneCard />
            </div>
            <div className='favorites__card'>
              <PhoneCard />
            </div>
            <div className='favorites__card'>
              <PhoneCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
