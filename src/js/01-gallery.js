import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

const listImage = document.querySelector('.gallery');
const itemImage = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join('');
listImage.insertAdjacentHTML('afterbegin', itemImage);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

listImage.addEventListener('click', bigImage);

function bigImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
}

console.log(galleryItems);
