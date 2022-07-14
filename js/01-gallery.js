import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// console.log(createGalleryMarkup(galleryItems));

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryItemsClick);

document.addEventListener('keydown', closeModal);
// console.log(galleryClickItem);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
          
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
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
}

function onGalleryItemsClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  } else {
    const instance = basicLightbox.create(
      `<div class="modal"><img src="${event.target.dataset.source}"/></div>`,
    );

    return instance.show();
  }

  //   console.log(event.target.dataset.source);
}

function closeModal(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
  console.log(event.code);
}
