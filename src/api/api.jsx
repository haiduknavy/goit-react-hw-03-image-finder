import axios from 'axios';

const API_KEY = '24457858-4dedb210520a0a663e952c085';
const BASE_URL = 'https://pixabay.com/api/';
const IMG_PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;

export default async function fetchGallery(searchQuery, page) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    page: page,
    per_page: IMG_PER_PAGE,
    image_type: 'photo&orientation=horizontal',
  });

  try {
    const response = await axios.get(`?${searchParams}`);
    return response.data;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
}
