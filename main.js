// String = Textos
// Number = Números
// Boolean = True || False

function onScroll() {
  if (scrollY > 40) {
    navegar.classList.add('scroll')
  } else {
    navegar.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 1000
}).reveal(`#home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
