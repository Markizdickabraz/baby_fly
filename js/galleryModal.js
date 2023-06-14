const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', renderModal)

function renderModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'PRE' && e.target.nodeName !== 'H3') {
        return;
    }
}