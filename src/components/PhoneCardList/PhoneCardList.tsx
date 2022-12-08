import React, { useEffect, useState } from 'react'
import './PhoneCardList.scss'
import { PhoneCard } from '../PhoneCard'
import { Product } from '../../Product'

interface Props {
  phonesAmount: Product[]
}

const useLocalStorage = (key: string, initialValue: any): any => {
  // const [value, setValue] = useState(() => {
  //   try {
  //     return localStorage.getItem(key) !== null
  //       ? JSON.parse((localStorage.getItem(key)) || initialValue)
  //       : initialValue
  //   } catch {
  //     return initialValue
  //   }
  // })

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

export const PhoneCardList: React.FC<Props> = ({ phonesAmount }) => {
  const [selected, setSelected] = useLocalStorage('selectedID', [])
  const [favorites, setFavorites] = useState<number[]>([])

  const addToSelect = (id: string): void => {
    setSelected((prev: string[]) => [...prev, id])
  }

  const removeFromSelected = (id: string): void => {
    setSelected((prev: string[]) => {
      if (prev.length > 0) {
        return prev.filter((x) => x !== id)
      }

      return []
    })
  }

  const addToFavorites = (id: number): void => {
    setFavorites((prev) => [...prev, id])
    // console.log(favorites)
  }

  const removeFromFavorites = (id: number): void => {
    setFavorites((prev) => {
      if (prev.length > 0) {
        return prev.filter((x) => x !== id)
      }

      return []
    })
  }

  return (
    <ul className="cardList">
      {
        phonesAmount.map((phone: Product) => (
          <li key={phone.id} className="cardList__item">
            <PhoneCard
              phone={phone}
              addToSelect={addToSelect}
              addToFavorites={addToFavorites}
              removeFromSelected={removeFromSelected}
              removeFromFavorites={removeFromFavorites}
              selected={selected}
              favorites={favorites}
            />
          </li>
        ))
      }
    </ul>
  )
}
