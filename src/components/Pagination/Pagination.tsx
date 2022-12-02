import React from 'react';
import './Pagination.scss';

type Props = {
    cardPerPage: number;
    totalCards: number;
    setCurrentPage: (p: any) => void;
    currentPage: number;
}

export const Pagination: React.FC<Props> = ({ cardPerPage, totalCards, setCurrentPage, currentPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= (Math.ceil(totalCards / cardPerPage)); i++) {
    pageNumber.push(i);
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(Math.ceil(totalCards / cardPerPage) + 1);
    }
    setCurrentPage((prev: any) => prev - 1);
  }

  const nextPage = () => {
    if (currentPage === (Math.ceil(totalCards / cardPerPage))) {
      setCurrentPage(1);
      return;
    }
    setCurrentPage((prev: any) => prev + 1);
  }
  
    return (
    <div className='test'>
        <button onClick={prevPage}>prevPage</button>
      
        <ul>
            {
                pageNumber.map(n => (
                    <li>
                        <a 
                            href="#"
                            onClick={() => {paginate(n)}}
                        >
                            {n}
                        </a>
                    </li>
                ))
            }
        </ul>
        <button onClick={nextPage}>nextPage</button>
    </div>
  );
};