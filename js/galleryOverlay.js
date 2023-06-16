const gallery = document.querySelector('.gallery__list');
const backdrop = document.querySelector('[data-modal]')
console.dir(backdrop)

gallery.addEventListener('click', renderModal)
const button = document.querySelector('.btn__overlay')
const modalList = document.querySelector('.modal__list');

function renderModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'PRE' && e.target.nodeName !== 'H3' && e.target.nodeName !== 'BUTTON') {
        return;
    }
    if (e.target.nodeName === 'BUTTON') {
        button.addEventListener('click', toggleModal())
        if (e.target.id === '3v1') {
            const modalBody = `
        <li class= modal__item><img width = 100% src='../img/3v12.jpeg' alt="swing"></li>
        <li class= modal__item><img width = 100% src='../img/3v13.jpeg' alt="swing"></li>
        <li class= modal__item><img width = 100% src='../img/3v14.jpeg' alt="swing"></li>
            `;
            modalList.insertAdjacentHTML('beforeend', modalBody) 
        }        
        if (e.target.id === 'bunnySwing') {
            const modalBody = `
        <li class= modal__item><img width= 100% src='../img/bunnySwing2.jpeg' alt="swing"></li>
        <li class= modal__item><img width= 100% src='../img/bunnySwing.jpeg' alt="swing"></li>
        <li class= modal__item><img width= 100% src='../img/bunnySwing4.jpeg' alt="swing"></li>
            `;
            modalList.insertAdjacentHTML('beforeend', modalBody) 

        }
    }
}

const modalClose = document.querySelector("[data-modal-close]")
modalClose.addEventListener('click', () => {
    toggleModal()
    modalList.innerHTML = '';
})


function toggleModal() { 
    backdrop.classList.toggle('is-hidden')
}





