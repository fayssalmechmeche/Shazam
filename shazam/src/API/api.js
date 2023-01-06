import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/charts/track',
  params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
  headers: {
    'X-RapidAPI-Key': '63ff15c25bmsh1c32cd3e8a500d9p19226ajsn4cdb03d68caf',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};
const getData = async options => {
  const response = await axios.request(options);
  return response;
};

export default {getData, options};
