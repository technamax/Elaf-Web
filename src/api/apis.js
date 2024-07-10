import axios from 'axios';

export const GetCollectionList = async () => {
  try {
    const response =
      await axios.get(`https://gecxc.com:449/api/CollectionRegistration/GetCollectionList
    `);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
