import React from 'react'
import './CartPage.scss'
import cart1 from './phones-hardcoded/cart1.png'
import cart2 from './phones-hardcoded/cart2.png'
import cart3 from './phones-hardcoded/cart3.png'
import arrow from '../../images/icons/slider_arrow_left.png'
import close from '../../images/icons/close.svg'
import plus from '../../images/icons/plus.svg'
import minus from '../../images/icons/minus.svg'

const selectedPhones = [
  {
    name: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
    imgSrc: cart1,
    price: 999,
    quantity: 1
  },
  {
    name: 'Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)',
    imgSrc: cart2,
    price: 859,
    quantity: 1
  },
  {
    name: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/ A)',
    imgSrc: cart3,
    price: 799,
    quantity: 1
  }
]

export const CartPage: React.FC = () => {
  const sum = selectedPhones.reduce((sum, n) => sum + n.price, 0)
  const quantity = selectedPhones.reduce((sum, n) => sum + n.quantity, 0)

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
            {selectedPhones.map(phone => (
              <div className="cart__phonecard">
                <div className="cart__phonecard-about">
                  <button className="cart__deleteBtn">
                    <img src={close} alt="phone" className="cart__delete" />
                  </button>
                  <img src={phone.imgSrc} alt="phone" className="cart__phonecard-photo" />
                  <p className="cart__phonecard-name">{phone.name}</p>
                </div>
                <div className="cart__phonecard-about cart__phonecard-quantity">
                  <button className="cart__quantityBtn cart__quantityBtn-delete">
                    <img src={minus} alt="delete" />
                  </button>
                  <span className="cart__quantity">{` ${phone.quantity} `}</span>
                  <button className="cart__quantityBtn cart__quantityBtn-add">
                    <img src={plus} alt="add" />
                  </button>
                  <p className="cart__price">{`$${phone.price}`}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__total">
            <p className="cart__total-amount">{`$${sum}`}</p>
            <p className="cart__total-text">{`Total for ${quantity} items`}</p>
            <div className="cart__line" />
            <button className="cart__button">Checkout</button>
          </div>
        </div>
      </section>
    </div>
  )
}
