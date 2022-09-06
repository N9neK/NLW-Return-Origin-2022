// String = Textos
// Number = Números
// Boolean = True || False

let navbar = document.getElementById("navigation")
window.addEventListener('scroll', onScroll)

onScroll()

// Gerenciar os diversos Scrolls da page
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

//Mostrar o Nav ao fazer o Scroll
function showNavOnScroll() {
  if (scrollY > 0) {
    navbar.classList.add('scroll')
  } else {
    navbar.classList.remove('scroll')
  }
}

//Mostrar o botão 'BackToTop' ao fazer Scroll
function showBackToTopButtonOnScroll() {
  if (scrollY > 360) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//Abrir o menu-expanded ao clicar no ícone dos 3 tracinhos
function openMenu() {
  document.body.classList.add('menu-expanded')
}

//Fechar o menu-expanded ao clicar
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

//Efeito dos elementos da página vão aparecerendo a medida que desce a page
ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 800
}).reveal(`#home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
