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
  document.addEventListener("keydown", onEscape);

  function onEscape(event) {
    if (event.code !== "Escape") return;
    lightboxInstance.close();

    document.removeEventListener("keydown", onEscape);
  }
});
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
