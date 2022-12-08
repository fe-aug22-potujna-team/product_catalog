import React from 'react';
import './App.scss';
import { Route, Routes } from "react-router-dom";
import { MainPage } from './components/MainPage';
import { PhonePage } from './components/PhonePage';
import { ItemCard } from './components/ItemCard';
import { TabletPage } from './components/TabletPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SelectedPhonePage } from './components/SelectedPhonePage';
import { CartPage } from './components/CartPage';
import { FavoritesPage } from './components/FavoritesPage';

const BASE_URL = '/product_catalog';

export const App: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route path={`${BASE_URL}/`} element={<MainPage />}></Route>
      <Route path={`${BASE_URL}/phones`} element={<PhonePage />}></Route>
      <Route path={`${BASE_URL}/phones/phone`} element={<ItemCard />}></Route>
      <Route path={`${BASE_URL}/tablets`} element={<TabletPage />}></Route>
      <Route path={`${BASE_URL}/accessories`} element={<AccessoriesPage />}></Route>
      <Route path={`${BASE_URL}/selected`} element={<SelectedPhonePage />}></Route>
      <Route path={`${BASE_URL}/favorites`} element={<FavoritesPage />}></Route>
      <Route path={`${BASE_URL}/checkout`} element={<CartPage />}></Route>
    </Routes>
    <Footer />
  </>
);
