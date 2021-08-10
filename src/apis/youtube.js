import axios from 'axios';

const KEY = 'AIzaSyC3KGVgP9NvoYBfd_ri1nwOR1f2vMcV1qU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
