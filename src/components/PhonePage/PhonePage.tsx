import React, { useState } from 'react';
import './PhonePage.scss';
import { PhoneCardList } from '../PhoneCardList/PhoneCardList';
import { Pagination } from '../Pagination/Pagination';
import house from '../../images/icons/house.svg'
import arrow from '../../images/icons/arrow.svg'
import { SortPhones } from '../../Enums/Enums'

export const PhonePage: React.FC = () => {
  const phonesAmount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage, setCardPerPage] = useState(4);

  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentCards = phonesAmount.slice(firstCardIndex, lastCardIndex);

  return (
    <div className='PhonePage'>
      <div className='PhonePage__rout Rout'>
        <img  className='PhonePage__margin Rout__img' src={house} alt="img" />
        <img  className='Rout__img' src={arrow} alt="img" />
        <p className='Rout__text'>Phones</p>
      </div>

      <h1 className='PhonePage__title'>Mobile phones</h1>

      <h1 className='PhonePage__models'>5 models</h1>
      
      <div className='PhonePage__setting Setting'>
          <div className='PhonePage__margin'>
            <p className='Setting__title'>Sort by</p>
            <select className='Setting__select Setting__select-sort'>
              <option value={SortPhones.Newest}>Newest</option>
              <option value={SortPhones.Alphabetically}>Alphabetically</option>
              <option value={SortPhones.Cheapest}>Cheapest</option>
            </select>
          </div>

          <div>
            <p className='Setting__title'>Items on page</p>
            <select className='Setting__select' onChange={(e) => setCardPerPage(+e.target.value)}>
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
            </select>
          </div>
      </div>

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