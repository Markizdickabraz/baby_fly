const gallery = document.querySelector('.gallery__list');
// console.log(gallery);

gallery.addEventListener('click', renderModal)

function renderModal(e) {
    if (e.target.className !== 'gallery__item') {
        return;
     }
    // console.dir(e.target)
}