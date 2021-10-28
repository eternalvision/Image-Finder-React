import axios from 'axios';
const API_KEY = '22714133-87c7cc427dfc460d08f350db1';
const BASE_URL = 'https://pixabay.com/api';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=12&key=${API_KEY}`;

  return axios.get(url);
};
// eslint-disable-next-line
export default { fetchImages };
