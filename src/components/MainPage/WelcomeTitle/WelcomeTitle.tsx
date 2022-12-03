import React from 'react';
import './WelcomeTitle.scss';

export const WelcomeTitle: React.FC = () => {
  return (
    <div className='welcomeTitle'>
      <div>
        <h2 className='welcomeTitle__title_L'>Welcome to Nice Gadgets store!</h2>
        <h2 className='welcomeTitle__title_M'>Welcome to Nice<br/>Gadgets store!</h2>
        <h2 className='welcomeTitle__title_S'>Welcome to Nice Gadgets store!</h2>
      </div>

      <div className='welcomeTitle__Slider'>
      </div>
    </div>
  );
};
