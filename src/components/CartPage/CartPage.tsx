import React from 'react'
import { useState } from 'react';
import './CartPage.scss'
import cart1 from './phones-hardcoded/cart1.png'
import cart2 from './phones-hardcoded/cart2.png'
import cart3 from './phones-hardcoded/cart3.png'
import arrow from '../../images/icons/slider_arrow_left.png'
import CartItem from './CartItem';

const phonesFromStorage = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
    imgSrc: cart1,
    price: 999,
  },
  {
    id: 2,
    name: 'Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)',
    imgSrc: cart2,
    price: 859,
  },
  {
    id: 3,
    name: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/ A)',
    imgSrc: cart3,
    price: 799,
  }
]

export const CartPage: React.FC = () => {
  const selectedPhones = [...phonesFromStorage];

  const [phones, setPhones] = useState(selectedPhones);
  const sum = phones.reduce((sum, n) => sum + n.price, 0);

  const [quantityTotal, setQuantityTotal] = useState(phones.length);
  const [amountTotal, setAmountTotal] = useState(sum);

  return (
    <div className="cart__container">
      <section className="cart">
        <div className="cart__back">
          <img className="cart__backIcon" src={arrow} alt="back" />
          <a className="cart__backBtn" href="/">
            Back
          </a>
        </div>
        <h2 className="cart__heading">Cart</h2>

        <div className="cart__checkout">
          <div className="cart__selectedItems">

            {phones.map(phone => (
              <CartItem
                phone={phone}
                setPhones={setPhones}
                phones={phones}
                setQuantityTotal={setQuantityTotal}
                setAmountTotal={setAmountTotal}
              />
            ))}
          </div>
          <div className="cart__total">
            <p className="cart__total-amount">{`$${amountTotal}`}</p>
            <p className="cart__total-text">{`Total for ${quantityTotal} items`}</p>
            <div className="cart__line" />
            <button className="cart__button">Checkout</button>
          </div>
        </div>
      </section>
    </div>
  )
};
