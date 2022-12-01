import React from 'react';
import './App.scss';
import { Header } from './components/Header'
import { PhoneCard } from './components/PhoneCard';
import { Footer } from './components/Footer'
import { Phones } from './components/Phones'

export const App: React.FC = () => (
  <div>
    <Header />
    {/* <PhoneCard /> */}
    <Phones />
    <Footer />
  </div>
);
