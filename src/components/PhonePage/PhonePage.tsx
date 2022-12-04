import React, { useEffect, useState } from 'react';
import './PhonePage.scss';
import { PhoneCardList } from '../PhoneCardList/PhoneCardList';
import { Pagination } from '../Pagination/Pagination';
import house from '../../images/icons/house.svg'
import arrow from '../../images/icons/arrow.svg'
import { SortType, ProductsPerPage } from '../../Enums/Enums'
import { Product } from '../../Product'

export const PhonePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage, setCardPerPage] = useState(+ProductsPerPage.Eight);
  const [phonesFromServer, setPhonesFromServer] = useState<Product[]>([])

  const PHONES_PATH = 'https://main--luminous-cucurucho-0255ea.netlify.app/.netlify/functions/server/products'

const query = `?perPage=${cardPerPage}&page=${currentPage}`

const getPhonesByQuery = async (query:string) => {
    const response = await fetch(`${PHONES_PATH}?${query}`);
    return response.json()
};

const loadData = async () => {
  const res = await getPhonesByQuery(query);
  setPhonesFromServer(res);
}

useEffect(() => {
  loadData();
  console.log(phonesFromServer);
}, [])

  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentCards = phonesFromServer.slice(firstCardIndex, lastCardIndex);

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
              <option value={SortType.Newest}>Newest</option>
              <option value={SortType.Alphabetically}>Alphabetically</option>
              <option value={SortType.Cheapest}>Cheapest</option>
              <option value={SortType.Expensive}>Expensive</option>
            </select>
          </div>

          <div>
            <p className='Setting__title'>Items on page</p>
            <select className='Setting__select' onChange={(e) => setCardPerPage(+e.target.value)}>
              <option value={ProductsPerPage.Eight}>8</option>
              <option value={ProductsPerPage.Sixteen}>16</option>
              <option value={ProductsPerPage.TwentyFour}>24</option>
              <option value={phonesFromServer.length}>all</option>
            </select>
          </div>
      </div>

      {currentCards.length > 0
      ? <PhoneCardList phonesAmount={currentCards}/>
      : 'nothing'
      }
      <Pagination 
        cardPerPage={cardPerPage} 
        totalCards={phonesFromServer.length} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};