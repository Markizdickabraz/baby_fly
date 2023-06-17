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
            moadlBody('./img/3v12.jpeg', './img/3v13.jpeg', './img/3v14.jpeg', './img/3v15.jpeg', './img/3v16.jpeg','./img/3v1.jpeg')

        }        
        if (e.target.id === 'bunnySwing') {
            moadlBody('./img/bunnySwing.jpeg', './img/bunnySwing2.jpeg', './img/bunnySwing3.jpeg', './img/bunnySwing4.jpeg','./img/bunnySwing5.jpeg','./img/bunnySwing6.jpeg')
        }
        if (e.target.id === 'cot') {
            moadlBody('./img/cot.jpeg', './img/cot2.jpeg', './img/cot3.jpeg', './img/cot4.jpeg', './img/cot5.jpeg','./img/cot6.jpeg')

        }  
        if (e.target.id === 'hunnyBunny') {
            moadlBody('./img/hunnyBunny.jpeg', './img/hunnyBunny2.jpeg', './img/hunnyBunny3.jpeg', './img/hunnyBunny4.jpeg', './img/hunnyBunny5.jpeg','./img/hunnyBunny6.jpeg')

        }  
        if (e.target.id === 'standart') {
            moadlBody('./img/standart.jpeg', './img/standart2.jpeg', './img/standart3.jpeg', './img/standart4.jpeg', './img/standart5.jpeg','./img/standart6.jpeg')

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

function moadlBody(photo1, photo2, photo3, photo4, photo5, photo6) {
    const modalItems = `
        <li class= modal__item><img class='modal__img' width= 150 height= 160 src=${photo1} alt="swing"></li>
        <li class= modal__item><img class='modal__img' width= 150 height= 160 src=${photo2} alt="swing"></li>
        <li class= modal__item><img class='modal__img' width= 150 height= 160 src=${photo3} alt="swing"></li>
        <li class= modal__item><img class='modal__img' width= 150 height= 160 src=${photo4} alt="swing"></li>
        <li class= modal__item><img class='modal__img' width= 150 height= 160 src=${photo5} alt="swing"></li>
        <li class= modal__item><img class='modal__img' width= 150 height= 160 src=${photo6} alt="swing"></li>
            `;
    modalList.insertAdjacentHTML('beforeend', modalItems); 
}
