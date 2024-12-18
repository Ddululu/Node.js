// api-request.js
const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('<https://api.example.com/data>');
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();