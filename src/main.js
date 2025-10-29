import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton,} from './js/render-functions.js';



const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('[data-load-more]');

const PER_PAGE = 15;
let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', onSearchSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearchSubmit (event) {
    event.preventDefault();

    const searchText = event.currentTarget.elements['search-text'].value.trim();

    if(!searchText) {
        iziToast.error({
            message: 'Please enter a search query.',
            position: 'topRight',
        });
        return;
    }

    query = searchText;
    page = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page, PER_PAGE);
        totalHits = data.totalHits ?? 0;

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

        const shown = page * PER_PAGE;

        if (totalHits > shown) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
        } 
        
    } catch (err) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
            icon: '',
            class: 'toast-error',
        });

    } finally {
        setTimeout(() => {
            hideLoader();
        }, 6000);
        
        form.reset();
    }
}

async function onLoadMore() {
    page += 1;
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page, PER_PAGE);
        createGallery(data.hits);

        smoothScrollByTwoCards();

        const shown = page * PER_PAGE;
        if (shown >= totalHits) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });  
        } else {
            showLoadMoreButton();
        }

    } catch (err) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
            icon: '',
            class: 'toast-error',
        });
    } finally {
        setTimeout(() => {
            hideLoader();
        }, 6000);
    }
}

function smoothScrollByTwoCards() {
    const firstCard = document.querySelector('.gallery .gallery-item');
    if (!firstCard) return;
    const { height } = firstCard.getBoundingClientRect();
    window.scrollBy({
        top: height * 2,
        behavior: 'smooth',
    });
}
