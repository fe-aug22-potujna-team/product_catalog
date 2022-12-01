import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { PhoneCard } from '../PhoneCard';
import './MainPage.scss';

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <PhoneCard />
      <Footer />
    </>
  );
};