import close from '../../images/icons/close.svg'
import plus from '../../images/icons/plus.svg'
import minus from '../../images/icons/minus.svg'
import { useState } from 'react';

//add types after getting phones from locale storage

type Props = {
  phone: any,
  setPhones: (phone: any) => void,
  phones: any,
  setQuantityTotal: any,
  setAmountTotal: any,
}

const CartItem: React.FC<Props> = ({ phone, setPhones, phones, setQuantityTotal, setAmountTotal }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(prev => prev + 1);

    setQuantityTotal((prev: number) => prev + 1);
    setAmountTotal((prev: any) => prev + phone.price);
  };

  const handleSubtact = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      
      setQuantityTotal((prev: number) => prev - 1);
      setAmountTotal((prev: any) => prev - phone.price);
    }
  };

  const handleDelete = (id: number) => {
    setQuantityTotal((prev: number) => prev - quantity);
    setAmountTotal((prev: any) => prev - (phone.price * quantity));

    setPhones(phones.filter((phone: any) => phone.id !== id));
  };
  
  return (
    <div className="cart__phonecard" key={phone.id}>
      <div className="cart__phonecard-about">
        <button className="cart__deleteBtn" onClick={() => handleDelete(phone.id)}>
          <img src={close} alt="phone" className="cart__delete" />
        </button>
        <img src={phone.imgSrc} alt="phone" className="cart__phonecard-photo" />
        <p className="cart__phonecard-name">{phone.name}</p>
      </div>
      <div className="cart__phonecard-about cart__phonecard-quantity">
        <button className="cart__quantityBtn cart__quantityBtn-delete" onClick={handleSubtact}>
          <img src={minus} alt="delete" />
        </button>
        <span className="cart__quantity">{`${quantity}`}</span>
        <button className="cart__quantityBtn cart__quantityBtn-add" onClick={handleAdd}>
          <img src={plus} alt="add" />
        </button>
        <p className="cart__price">{`$${phone.price}`}</p>
      </div>
    </div>
  )
};

export default CartItem;
