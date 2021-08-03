import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ebumGYR7hbyZ91an3xYVfcI6hyQE67DCHq-fk3XOyZo',
  },
});
