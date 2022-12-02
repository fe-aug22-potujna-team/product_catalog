import React from 'react';
import './PhoneCardList.scss';
import { PhoneCard } from '../PhoneCard'

type Props = {
  phonesAmount: number[];
};

export const PhoneCardList: React.FC<Props> = ({ phonesAmount }) => {
  return (
    <ul className='test'>
        {
          phonesAmount.map((x: number) => (
            <li key={x}>
              <PhoneCard />
              {x}
            </li>
          ))
        }
    </ul>
  );
};
