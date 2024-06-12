/* Scroll */
const about = document.querySelector('#about');

about.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

const portifolio = document.querySelector('#causes');

portifolio.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

const contato = document.querySelector('#levels');

contato.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

/* Menu */
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
  }else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
  }
}

/* Top Button*/
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;