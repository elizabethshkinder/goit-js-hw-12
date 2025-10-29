import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52986014-6c248434ffeaf5f82fd167a25';

export async function getImagesByQuery(query, page = 1, perPage = 15) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: perPage,
    };

    const { data } = await axios.get(BASE_URL, { params });
    return data;
}