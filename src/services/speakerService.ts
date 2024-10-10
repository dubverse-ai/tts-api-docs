import axios from 'axios';

const API_URL = 'https://poopy.dubverse.ai/api/v3/data/speakers/';

export const fetchSpeakers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching speakers:', error);
    throw error;
  }
};