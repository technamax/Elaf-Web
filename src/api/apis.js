import axios from 'axios';

export const GetCollectionList = async () => {
  try {
    const response =
      await axios.get(`http://100.42.177.77:83/api/CollectionRegistration/GetCollectionList
    `);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
