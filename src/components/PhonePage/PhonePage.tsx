import React, { useEffect, useState } from 'react';
import './PhonePage.scss';
// import { useSearchParams } from "react-router-dom";
import { PhoneCardList } from '../PhoneCardList/PhoneCardList';
import { Pagination } from '../Pagination/Pagination';
import house from '../../images/icons/house.svg'
import arrow from '../../images/icons/arrow.svg'
import { SortType, ProductsPerPage } from '../../Enums/Enums'
import { Product } from '../../Product'

export const PhonePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage, setCardPerPage] = useState(+ProductsPerPage.Eight);
  const [phonesFromServer, setPhonesFromServer] = useState<Product[]>([]);
  const [sort, setSort] = useState('newest');
  const [phonesCount, setPhonesCount] = useState(0);

  const PHONES_PATH = 'https://main--luminous-cucurucho-0255ea.netlify.app/.netlify/functions/server/products'

const query = `?sortType=${sort}&page=${currentPage}&perPage=${cardPerPage}`

const getPhonesByQuery = async (query:string) => {
    const response = await fetch(`${PHONES_PATH}?${query}`);
    return response.json()
};

const loadData = async () => {
  // console.log(query);
  const res = await getPhonesByQuery(query);
  console.log(res.products);
  setPhonesCount(res.length);
  setPhonesFromServer(res.products);
}

useEffect(() => {
  console.log(query);
  loadData();
  // console.log(phonesFromServer);
}, [query])

  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentCards = phonesFromServer.slice(firstCardIndex, lastCardIndex);

// const [searchParams, setSearchParams] = useSearchParams();
// const [phones, setPhones] = useState<Product[]>([]);
// const [phonesLength, setPhonesLength] = useState(0);
// const [sort, setSort] = useState(
//   searchParams.get('sort') || 'newest',
// );
// const [perPage, setPerPage] = useState(
//   Number(searchParams.get('perPage')) || phonesLength,
// );
// const [page, setPage] = useState(
//   (searchParams.get('page') && Number(searchParams.get('page'))) || 1,
// );
// const [hasError, setHasError] = useState(false);
// // const [isLoading, setIsLoading] = useState(false);

// const PHONES_PATH = 'https://main--luminous-cucurucho-0255ea.netlify.app/.netlify/functions/server/products'

// // const handleOnSortSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
// //   setSort(event.target.value);
// // };

// // const handleOnPerPageSelect = (
// //   event: React.ChangeEvent<HTMLSelectElement>,
// // ) => {
// //   setPerPage(+event.target.value);
// //   setPage(1);
// // };

// // const handlePageChange = (newPage: number) => {
// //   setPage(newPage);
// // };

// const getProductsByQuery = async (query:string) => {
//       const response = await fetch(`${PHONES_PATH}?${query}`);
//       return response.json()
//   };

// const getPhones = async () => {
//   try {
//     // setIsLoading(true);

//     const products = await getProductsByQuery(searchParams.toString());

//     setPhones(products.phones);
//     setPhonesLength(products.length);
//     // setIsLoading(false);
//   } catch (err: any) {
//     setHasError(true);
//     // setIsLoading(false);
//   }
// };

// useEffect(() => {
//   getPhones();
// }, [searchParams]);

// useEffect(() => {
//   const params = {};

//   if (sort !== 'newest') {
//     Object.assign(params, { sort });
//   }

//   if (page !== 1) {
//     Object.assign(params, { page });
//   }

//   if (perPage !== phonesLength) {
//     Object.assign(params, { perPage });
//   }

//   setSearchParams(params);
// }, [sort, perPage, page]);

// if (hasError) {
//   return 'error';
// }

// return (
//   <div className='PhonePage'>
//     <div className='PhonePage__rout Rout'>
//       <img  className='PhonePage__margin Rout__img' src={house} alt="img" />
//       <img  className='Rout__img' src={arrow} alt="img" />
//       <p className='Rout__text'>Phones</p>
//     </div>

//     <h1 className='PhonePage__title'>Mobile phones</h1>

//     <h1 className='PhonePage__models'>5 models</h1>
    
//     <div className='PhonePage__setting Setting'>
//         <div className='PhonePage__margin'>
//           <p className='Setting__title'>Sort by</p>
//           <select className='Setting__select Setting__select-sort'
//              onChange={(e) => setSort(e.target.value)}
//           >
//             <option value={'newest'}>Newest</option>
//             <option value={SortType.Alphabetically}>Alphabetically</option>
//             <option value={'cheapest'}>Cheapest</option>
//             <option value={SortType.Expensive}>Expensive</option>
//           </select>
//         </div>

//         <div>
//           <p className='Setting__title'>Items on page</p>
//           <select className='Setting__select' onChange={(e) => setPerPage(+e.target.value)}>
//             <option value={ProductsPerPage.Eight}>8</option>
//             <option value={ProductsPerPage.Sixteen}>16</option>
//             <option value={ProductsPerPage.TwentyFour}>24</option>
//             <option value={phonesLength}>all</option>
//           </select>
//         </div>
//     </div>

//     {phones.length > 0
//       ? <PhoneCardList phonesAmount={phones}/>
//       : 'nothing'
//     }
//     <Pagination 
//       cardPerPage={perPage} 
//       totalCards={phonesLength} 
//       setCurrentPage={setPage}
//       currentPage={page}
//     />
//   </div>
// );

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

      {phonesFromServer.length > 0
        ? <PhoneCardList phonesAmount={phonesFromServer}/>
        : 'nothing'
      }
      <Pagination 
        cardPerPage={cardPerPage} 
        totalCards={phonesCount} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};