import React, { useState, useEffect, useCallback } from 'react'
import './CartPage.scss'
import { Product2 } from '../../Product'
import { getPhoneFromServer } from '../../api/api';
// import cart1 from './phones-hardcoded/cart1.png'
// import cart2 from './phones-hardcoded/cart2.png'
// import cart3 from './phones-hardcoded/cart3.png'
import arrow from '../../images/icons/slider_arrow_left.png'
// import close from '../../images/icons/close.svg'
// import plus from '../../images/icons/plus.svg'
// import minus from '../../images/icons/minus.svg'
import { PhoneCardMini } from '../PhoneCardMini'

const useLocalStorage = (key: string, initialValue: any): any => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialValue
  )

  const save = (x: any): void => {
    setValue((prev: any) => {
      const newValue = x(prev)

      localStorage.setItem(key, JSON.stringify(newValue))

      return newValue
    })
  }

  return [value, save]
}

export const CartPage: React.FC = () => {
  const [selected, setSelected] = useLocalStorage('selectedID', [])
  const [selectedPhones, setSelectedPhones] = useState<Product2[]>([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalSum, setTotalSum] = useState(0)

  const loadData = async (): Promise<any> => {
    const res = await Promise.all(selected.map(async (id: string) => {
      return getPhoneFromServer(id)
    }))

    setSelectedPhones(res)
  }

  useEffect(() => {
    loadData()
  }, [selected])

  const sum = selectedPhones.reduce((sum1, n) => sum1 + n.priceDiscount, 0)
  const quantity = selectedPhones.reduce((sum1, n) => sum1 + n.quantity, 0)

  return (
    <div className="cart__container">
      <section className="cart">
        <div className="cart__back">
          <img className="cart__backIcon" src={arrow} alt="back" />
          <a className="cart__backBtn" href="/product_catalog/">
            Back
          </a>
        </div>
        <h2 className="cart__heading">Cart</h2>

        <div className="cart__checkout">
          <div className="cart__selectedItems">
            {selectedPhones.map(phone => (
              <div key={phone.id}>
                <PhoneCardMini
                  phone={phone}
                  setSelected={setSelected}
                  setTotalSum={setTotalSum}
                  setTotalQuantity={setTotalQuantity}
                />
              </div>
            ))}
          </div>
          <div className="cart__total">
            <p className="cart__total-amount">{`$${totalSum}`}</p>
            <p className="cart__total-text">{`Total for ${totalQuantity} items`}</p>

            <div className="cart__line" />
            <button className="cart__button">Checkout</button>
          </div>
        </div>
      </section>
    </div>
  )
};
