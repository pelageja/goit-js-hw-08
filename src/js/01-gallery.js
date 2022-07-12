// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const ulRef = document.querySelector('.gallery');

const cartMarkup = createPictureCartMarkup(galleryItems);
ulRef.insertAdjacentHTML('beforeend', cartMarkup);

//Создаем функцию для создания разметки

function createPictureCartMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`;
    })
    .join('');
};

new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
});


