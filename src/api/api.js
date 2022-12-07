const PHONES_PATH = 'https://main--luminous-cucurucho-0255ea.netlify.app/.netlify/functions/server/products';

export const getPhonesFromServer = async (query) => {
   const response = await fetch(`${PHONES_PATH}${query}`);
   return response.json();
}