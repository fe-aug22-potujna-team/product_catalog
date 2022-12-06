import React, { useCallback, useEffect, useState } from 'react';
import './PhonePage.scss';
// import { useSearchParams } from "react-router-dom";
import { PhoneCardList } from '../PhoneCardList/PhoneCardList';
import { Pagination } from '../Pagination/Pagination';
import house from '../../images/icons/house.svg'
import arrow from '../../images/icons/arrow.svg'
import { SortType, ProductsPerPage } from '../../Enums/Enums'
import { Product } from '../../Product'
import { Loader } from '../Loader'
import '../../utils__styles/grid.scss'

export const PhonePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage, setCardPerPage] = useState(+ProductsPerPage.Eight);
  const [phonesFromServer, setPhonesFromServer] = useState<Product[]>([]);
  const [sort, setSort] = useState('newest');
  const [phonesCount, setPhonesCount] = useState(0);

  const PHONES_PATH = 'https://main--luminous-cucurucho-0255ea.netlify.app/.netlify/functions/server/products'

const getPhones = useCallback(async () => {
  const query = `?sortType=${sort}&page=${currentPage}&perPage=${cardPerPage}`
  const response = await fetch(`${PHONES_PATH}${query}`);
  return response.json()
}, [cardPerPage, currentPage, sort]);

const loadData = useCallback(async () => {
    const res = await getPhones();
    console.log(res.products);
    setPhonesCount(res.length);
    setPhonesFromServer(res.products);
  }, [getPhones]
) 
useEffect(() => {
  console.log();
  loadData();
}, [cardPerPage, sort, currentPage, loadData])


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
            <select className='Setting__select Setting__select-sort'
               onChange={(e) => setSort(e.target.value)}
            >
              <option value={'newest'}>Newest</option>
              <option value={SortType.Alphabetically}>Alphabetically</option>
              <option value={SortType.Cheapest}>Cheapest</option>
              <option value={SortType.Expensive}>Expensive</option>
            </select>
          </div>

          <div>
            <p className='Setting__title'>Items on page</p>
            <select className='Setting__select' onChange={(e) => {
              setCardPerPage(+e.target.value);
              setCurrentPage(1);
            }}>
              <option value={ProductsPerPage.Eight}>8</option>
              <option value={ProductsPerPage.Sixteen}>16</option>
              <option value={ProductsPerPage.TwentyFour}>24</option>
              <option value={phonesCount}>all</option>
            </select>
          </div>
      </div>

        {
           (phonesFromServer.length > 0
            ? (
                <>
                  {/* <div className='grid grid--block grid__item--desctop-4-10'> */}
                  <PhoneCardList phonesAmount={phonesFromServer}/>
                {/* </div> */}

                <Pagination 
                  cardPerPage={cardPerPage} 
                  totalCards={phonesCount} 
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
                </>
              )
            : <Loader />
          )
        }
    </div>
  );
};