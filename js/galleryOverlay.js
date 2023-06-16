const gallery = document.querySelector('.gallery__list');
const backdrop = document.querySelector('[data-modal]')
console.dir(backdrop)

gallery.addEventListener('click', renderModal)

function renderModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'PRE' && e.target.nodeName !== 'H3' && e.target.nodeName !== 'BUTTON') {
        return;
    }

    if (e.target.nodeName === 'BUTTON') {
        e.addEventListener('click', toggleModal())
        if (e.target.id === '3v1') {
        console.log('dadadaa')
        }        
        if (e.target.id === 'bunnySwing') {
            console.log('trrrr')
        }
    }
}

const modalClose = document.querySelector("[data-modal-close]")
modalClose.addEventListener('click', toggleModal)

function toggleModal() { 
    backdrop.classList.toggle('is-hidden')
}