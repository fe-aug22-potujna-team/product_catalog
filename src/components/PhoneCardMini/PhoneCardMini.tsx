import React, { useEffect, useState } from 'react';
import './PhoneCardMini.scss';
// import cn from 'classnames'
import { Product2 } from '../../Product'
import plus from '../../images/icons/plus.svg'
import minus from '../../images/icons/minus.svg'
import close from '../../images/icons/close.svg'

interface Props {
  phone: Product2
  setSelected: any
  setTotalSum: any
  setTotalQuantity: any
}

export const PhoneCardMini: React.FC<Props> = ({
  phone, setSelected, setTotalSum, setTotalQuantity
}) => {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setTotalSum((prev: number) => prev + phone.priceRegular * quantity)
    setTotalQuantity((prev: number) => prev + quantity)
  }, [])

  const phoneImage = `https://luminous-cucurucho-0255ea.netlify.app/${phone.images[0]}`

  const removeFromSelected = (id: string): void => {
    setSelected((prev: string[]) => {
      if (prev.length > 0) {
        return prev.filter((x) => x !== id)
      }

      return []
    })
  }

  const increaseQuantity = (): void => {
    setQuantity(prev => prev + 1)
    setTotalSum((prev: number) => prev + phone.priceRegular)
    setTotalQuantity((prev: number) => prev + 1)
  }

  const decreaseQuantity = (): void => {
    if (quantity === 1) {
      return
    }

    setQuantity(prev => prev - 1)
    setTotalSum((prev: number) => prev - phone.priceRegular)
    setTotalQuantity((prev: number) => prev - 1)
  }

  return (
    <div className="cart__phonecard" key={phone.id}>
      <div className="cart__phonecard-about">
        <button
          className="cart__deleteBtn"
          onClick={() => removeFromSelected(phone.id)}
        >
          <img src={close} alt="phone" className="cart__delete" />
        </button>
        <img
          src={phoneImage}
          alt="phone"
          className="cart__phonecard-photo"
        />
        <p className="cart__phonecard-name">{phone.name}</p>
      </div>
      <div className="cart__phonecard-about cart__phonecard-quantity">
        <button
          className="cart__quantityBtn cart__quantityBtn-delete"
          onClick={decreaseQuantity}
        >
          <img src={minus} alt="delete" />
        </button>
        <span className="cart__quantity">{` ${quantity} `}</span>
        <button
          className="cart__quantityBtn cart__quantityBtn-add"
          onClick={increaseQuantity}
        >
          <img src={plus} alt="add" />
        </button>
        <p className="cart__price">{`$${phone.priceDiscount}`}</p>
      </div>
    </div>
  )
};
