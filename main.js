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
