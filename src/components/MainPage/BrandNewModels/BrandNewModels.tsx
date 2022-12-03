import React from 'react';
import arrowRightDefault from '../../../images/icons/Slider button - Default (right).png'
import arrowLeftDefault from '../../../images/icons/Slider button - Default (LEFT).png'
import arrowRightDisabled from '../../../images/icons/Slider button - Disabled (right).png'
import arrowLeftDisabled from '../../../images/icons/Slider button - Disabled (LEFT).png'
import arrowRightHover from '../../../images/icons/Slider button - Hover (right).png'
import arrowLeftHover from '../../../images/icons/Slider button - Hover (LEFT).png'
import { PhoneCard } from '../../PhoneCard';
import './BrandNewModels.scss';

export const BrandNewModels: React.FC = () => {
  return (
    <>
      <div className='brandNewModels'>
        <h2 className='brandNewModels__title__M'>Brand new models</h2>
        <h2 className='brandNewModels__title__S'>Brand new<br/>models</h2>
        <a href="#home">
          <img src={arrowLeftDisabled} alt="arrowLeft" />
        </a>
        <a href="#home">
          <img src={arrowRightDefault} alt="arrowRight"/>
        </a>
      </div>
      <div className='brandNewModels__phones'>
        <PhoneCard />
      </div>
    </>
  );
};
