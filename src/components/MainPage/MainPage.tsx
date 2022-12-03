import React from 'react';
import { HotPrices } from './HotPrices';
import { ShopByCategory } from './ShopByCategory';
import { BrandNewModels } from './BrandNewModels';
import { WelcomeTitle } from './WelcomeTitle';

import './MainPage.scss';

export const MainPage: React.FC = () => {
  return (
    <>
      <WelcomeTitle />
      <BrandNewModels />
      <ShopByCategory />
      <HotPrices />
    </>
  );
};