import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52986014-6c248434ffeaf5f82fd167a25';

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    };

    return axios 
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}