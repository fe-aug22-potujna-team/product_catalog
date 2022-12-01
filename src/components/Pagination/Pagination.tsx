import React from 'react';
import './Pagination.scss';

type Props = {
    cardPerPage: number;
    totalCards: number;
    paginate: (p: number) => void;
}

export const Pagination: React.FC<Props> = ({ cardPerPage, totalCards, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i < Math.ceil(totalCards / cardPerPage); i++) {
    pageNumber.push(i);
  }
  
    return (
    <div className='test'>
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
    </div>
  );
};