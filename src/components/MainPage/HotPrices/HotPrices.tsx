import React from 'react';
import arrowRightDefault from '../../../images/icons/Slider button - Default (right).png'
import arrowLeftDefault from '../../../images/icons/Slider button - Default (LEFT).png'
import arrowRightDisabled from '../../../images/icons/Slider button - Disabled (right).png'
import arrowLeftDisabled from '../../../images/icons/Slider button - Disabled (LEFT).png'
import arrowRightHover from '../../../images/icons/Slider button - Hover (right).png'
import arrowLeftHover from '../../../images/icons/Slider button - Hover (LEFT).png'
import { PhoneCard } from '../../PhoneCard';
import './HotPrices.scss';

export const HotPrices: React.FC = () => {
  return (
    <>
      <div className='hotPrices'>
        <h2 className='hotPrices__title'>Hot prices</h2>
        <a href="#home">
          <img src={arrowLeftDisabled} alt="arrowLeft" />
        </a>
        <a href="#home">
          <img src={arrowRightDefault} alt="arrowRight"/>
        </a>
      </div>
      <div className='hotPrices__phones'>
        <PhoneCard />
      </div>
    </>
  );
};
