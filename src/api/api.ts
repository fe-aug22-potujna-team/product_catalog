import { Product } from "../types/Product";

// eslint-disable-next-line max-len
const PHONES_PATH = 'https://main--luminous-cucurucho-0255ea.netlify.app/.netlify/functions/server/products';

export const getPhonesFromServer = async (query: string) => {
  // eslint-disable-next-line @typescript-eslint/semi
  const response = await fetch(`${PHONES_PATH}${query}`)

  // eslint-disable-next-line semi
  return response.json();
// eslint-disable-next-line @typescript-eslint/semi
}

export const getPhoneFromServer = async (id: string) => {
  // eslint-disable-next-line @typescript-eslint/semi
  const response = await fetch(`${PHONES_PATH}/${id}`)

  // eslint-disable-next-line semi
  return response.json();
// eslint-disable-next-line @typescript-eslint/semi
}

export const getBrandNew = async (): Promise<Product[]> => {
  const data = await fetch(`${PHONES_PATH}/newest`)

  return await data.json()
}

export const getBestPrice = async (): Promise<Product[]> => {
  const data = await fetch(`${PHONES_PATH}/discount`)

  return await data.json()
}