import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(imagesArray) {

    const markup = imagesArray
    .map(img => {
        return `
        <li class="gallery-item">
            <a class="gallery-link" href="${img.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${img.webformatURL}"
                    alt="${img.tags}"
                />
            </a>

            <ul class="stats">
                <li class="stats-item">
                    <span class="stats-label">Likes</span>
                    <span class="stats-value">${img.likes}</span>
                </li>
                <li class="stats-item">
                    <span class="stats-label">Views</span>
                    <span class="stats-value">${img.views}</span>
                </li>
                <li class="stats-item">
                    <span class="stats-label">Comments</span>
                    <span class="stats-value">${img.comments}</span>
                </li>
                <li class="stats-item">
                    <span class="stats-label">Downloads</span>
                    <span class="stats-value">${img.downloads}</span>
                </li>
            </ul>
        </li>
        `
    })
    .join('');

    galleryList.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();

}

export function clearGallery() {
    galleryList.innerHTML = '';
}

export function toggleLoader(position, show = true) {
    const selector = position === 'top' ? '[data-loader-top]' : '[data-loader-bottom]';
    const element = document.querySelector(selector);
    element?.classList.toggle('is-hidden', !show);
}

export function toggleLoadMoreButton(show = true) {
    const btn = document.querySelector('[data-load-more]');
    btn?.classList.toggle('is-hidden', !show);
}