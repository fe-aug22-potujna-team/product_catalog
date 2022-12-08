// eslint-disable-next-line max-len
const PHONES_PATH = 'https://main--luminous-cucurucho-0255ea.netlify.app/.netlify/functions/server/products';

export const getPhonesFromServer = async (query) => {
  // eslint-disable-next-line @typescript-eslint/semi
  const response = await fetch(`${PHONES_PATH}${query}`)

  // eslint-disable-next-line semi
  return response.json();
// eslint-disable-next-line @typescript-eslint/semi
}

export const getPhoneFromServer = async (id) => {
  // eslint-disable-next-line @typescript-eslint/semi
  const response = await fetch(`${PHONES_PATH}/${id}`)

  // eslint-disable-next-line semi
  return response.json();
// eslint-disable-next-line @typescript-eslint/semi
}
