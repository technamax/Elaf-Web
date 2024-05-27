const fetchMenuItems = async (empId, token) => {
  const response = await fetch(
    `https://gecxc.com:4041/api/Menu/GetUserMenuByEmpId?empId=${empId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  console.log(response);
  console.log(token);
  if (!response.ok) {
    throw new Error('Failed to fetch menu items');
  }
  const data = await response.json();
  console.log('Fetched data:', data.result); // Log the fetched data
  return data.result;
};

export default fetchMenuItems;
