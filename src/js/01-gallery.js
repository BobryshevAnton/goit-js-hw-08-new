// console.log('5');

import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//console.log(galleryItems);
const newGallery = document.querySelector('.gallery');

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
});

newGallery.insertAdjacentHTML('afterbegin', galleryItem.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// console.log(newGallery);
