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
window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 400)
})