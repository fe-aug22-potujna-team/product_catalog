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
  const currentCards = phonesAmount.slice(firstCardIndex, lastCardIndex);

  return (
    <div>
      <PhoneCardList phonesAmount={currentCards}/>
      <Pagination 
        cardPerPage={cardPerPage} 
        totalCards={phonesAmount.length} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
