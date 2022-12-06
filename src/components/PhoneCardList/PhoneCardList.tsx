import React from 'react';
import './PhoneCardList.scss';
import { PhoneCard } from '../PhoneCard'
import { Product } from '../../Product'

type Props = {
  phonesAmount: Product[];
};

export const PhoneCardList: React.FC<Props> = ({ phonesAmount }) => {
  return (
    <ul className='cardList'>
        {
          phonesAmount.map((phone: Product) => (
            <li key={phone.id} className='cardList__item'>
              <PhoneCard phone={phone}/>
            </li>
          ))
        }
    </ul>
  );
};
