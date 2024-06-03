/* Scroll */
const about = document.querySelector('#sobre');

about.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

const portifolio = document.querySelector('#causas');

portifolio.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

const contato = document.querySelector('#graus');

contato.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

/* Menu */
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}