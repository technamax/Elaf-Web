const fetchMenuItems = async (empId, token) => {
  try {
    const response = await fetch(
      `http://100.42.177.77:83/api/Menu/GetUserMenuByEmpId?empId=${empId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch menu items');
    }

    const data = await response.json();
    // console.log('Fetched data:', data.result); // Log the fetched data
    return data.result;
  } catch (error) {
    console.error('Failed to fetch menu items:', error.message);
    throw error;
  }
};

export default fetchMenuItems;
