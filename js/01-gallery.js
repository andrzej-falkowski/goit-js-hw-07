import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("ul.gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(element) {
  return element

    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const eventTarget = event.target.dataset.source;
  if (!eventTarget) return;

  const lightboxInstance = basicLightbox.create(
    `<img width="1280" src="${eventTarget}"/img>`
  );
  lightboxInstance.show();

  function onEscape(event) {
    if (event.code === "Escape") {
      lightboxInstance.close();
    }
  }
  document.addEventListener("keydown", onEscape);
});

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
