import React from 'react';
import './App.scss';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MainPage } from './components/MainPage';

export const App: React.FC = () => (
  <div>
    <Header />
    <MainPage/>
    <Footer />
  </div>
);
