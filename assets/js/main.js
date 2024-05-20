/* Scroll */
const about = document.querySelector('#sobre');

about.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

const portifolio = document.querySelector('.graus');

portifolio.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

const contato = document.querySelector('.projeto');

contato.addEventListener('click', () =>{
    window.scroll({top: 610, behavior: "smooth"})
})

/* Menu */
class MobileNavbar {
  constructor(menu, navList, navLinks) {
    this.menu = document.querySelector(menu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.menu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.menu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.menu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();