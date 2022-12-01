import React, { useState } from 'react';
import './Phones.scss';
import { PhoneCardList } from '../PhoneCardList';
import { Pagination } from '../Pagination';

export const Phones: React.FC = () => {
  const phonesAmount = [1,2,3,4,5,6,7,8,9,10];
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage, setCardPerPage] = useState(3);

  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentCard = phonesAmount.slice(firstCardIndex, lastCardIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    setCurrentPage(prev => prev - 1);
  }

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  }

  return (
    <div>
      <PhoneCardList phonesAmount={currentCard}/>
      <Pagination cardPerPage={cardPerPage} totalCards={phonesAmount.length} paginate={paginate}/>
    
      <button onClick={prevPage}>prevPage</button>
      <button onClick={nextPage}>nextPage</button>
    </div>
  );
};
