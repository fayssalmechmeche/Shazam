import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/charts/track',
  params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
  headers: {
    'X-RapidAPI-Key': 'b614d110f6mshbdee54d5a6508d4p18f3e0jsnb3a74d0a2bbc',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};
const getData = async options => {
  const response = await axios.request(options);
  return response;
};

export default {getData, options};
