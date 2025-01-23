import axios from 'axios';

const BASE_URL = 'https://nextjs-rho-red-22.vercel.app/api';

export const fetchVehicleData = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/vehicle/${id}`);
    console.log('API Response:', JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
    throw error;
  }
};