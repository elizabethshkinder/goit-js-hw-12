import { getImagesByQuery } from "./js/pixabay-api.js";

import {createGallery, clearGallery, showLoader, hideLoader,} from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');

form.addEventListener('submit', handleSearchSubmit);

function handleSearchSubmit(event) {
    event.preventDefault();

    const searchText = event.currentTarget.elements['search-text'].value.trim();

    if(searchText === '') {
        iziToast.error({
            message: 'Please enter a search query.',
            position: 'topRight',
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(searchText)
    .then(data => {

        if(!data.hits || data.hits.length === 0){
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                icon: '',
                class: 'toast-error', 
            });
            return;
        }

        createGallery(data.hits);
    })
    .catch(err => {
        console.error(err);
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
            icon: '',
            class: 'toast-error',
        });
    })
    .finally(() => {
        hideLoader();
    });

}