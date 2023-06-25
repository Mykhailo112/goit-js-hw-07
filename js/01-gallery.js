import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery')

function galleryPhoto (arr) {
return arr.map(({preview,original,description})=>
`    <li class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="return false;">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
  </a>
</li>`
).join('');
};

 list.insertAdjacentHTML('beforeend', galleryPhoto(galleryItems));

list.onclick = (event) => {
  event.preventDefault()
    if (!event.target.classList.contains('gallery__image')) {
        return;
  }
  const instance = basicLightbox.create(`
		<img class="gallery__image" src="${event.target.dataset.source}">
	`);
  instance.show()
 
  list.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close()}
})
 };
