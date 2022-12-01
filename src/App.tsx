import React from 'react';
import './App.scss';
import { Header } from './components/Header'
import { PhoneCard } from './components/PhoneCard';
import { Footer } from './components/Footer'

export const App: React.FC = () => (
  <div>
    <Header />
    <PhoneCard />
    <Footer />
  </div>
);
