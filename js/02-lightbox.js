import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

// galleryContainer.addEventListener('click', onGalleryItemsClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      
        <a
          class="gallery__item"
          href="${original}"
          
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            class="gallery__image"
            src="${preview}"
                        alt="${description}"
          />
        </a>
      `;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
//   // Do something…
// });
