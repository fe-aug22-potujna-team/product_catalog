import React from 'react';
import './PhoneCardList.scss';
import { PhoneCard } from '../PhoneCard'
import { Product } from '../../Product'

type Props = {
  phonesAmount: Product[];
};

export const PhoneCardList: React.FC<Props> = ({ phonesAmount }) => {
  return (
    <ul className='test'>
        {
          phonesAmount.map((phone: Product) => (
            <li key={phone.id}>
              <PhoneCard phone={phone}/>
            </li>
          ))
        }
    </ul>
  );
};
