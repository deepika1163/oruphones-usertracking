import axios from 'axios';

// This will send data to the backend server
export async function trackUser(data: any) {
  try {
    await axios.post('https://oruphones-usertracking-backend.onrender.com/api/track', data);

  } catch (error) {
    console.error('Tracking failed:', error);
  }
}
