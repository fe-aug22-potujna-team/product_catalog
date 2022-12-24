import { Product } from '../types/Product'
import { ExtendedProduct } from "../types/ExtendedProduct";

// eslint-disable-next-line max-len
const API_URL = 'https://luminous-cucurucho-0255ea.netlify.app/.netlify/functions/server/products'
// const API_URL = 'http://localhost:5000/products'

export const getBrandNew = async (): Promise<Product[]> => {
  const data = await fetch(`${API_URL}/newest`)

  return await data.json()
}

export const getBestPrice = async (): Promise<Product[]> => {
  const data = await fetch(`${API_URL}/discount`)

  return await data.json()
}

export const getProductById = async (id: string | undefined): Promise<ExtendedProduct> => {
  const data = await fetch (`${API_URL}/${id}`)

  return await data.json()
}
