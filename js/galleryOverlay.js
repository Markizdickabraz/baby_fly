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
            moadlBody('./img/3v12.jpeg','./img/3v13.jpeg','./img/3v14.jpeg' )

        }        
        if (e.target.id === 'bunnySwing') {
            moadlBody('./img/bunnySwing.jpeg' , './img/bunnySwing2.jpeg' , './img/bunnySwing3.jpeg')
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

function moadlBody(photo1, photo2, photo3) {
    const modalItems = `
        <li class= modal__item><img width= 100% src=${photo1} alt="swing"></li>
        <li class= modal__item><img width= 100% src=${photo2} alt="swing"></li>
        <li class= modal__item><img width= 100% src=${photo3} alt="swing"></li>
            `;
            modalList.insertAdjacentHTML('beforeend', modalItems); 
}
