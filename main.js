const burger = document.querySelector('.header-burger')
const mobileMenu = document.querySelector('.mobile-menu-container')
const body = document.body

burger.addEventListener('click', () => {
  if (burger.classList.contains('open')) {
    body.style.overflow = 'auto'
    burger.classList.remove('open')
    mobileMenu.classList.remove('isOpen')
  } else {
    body.style.overflow = 'hidden'
    burger.classList.add('open')
    mobileMenu.classList.add('isOpen')
  }
})

mobileMenu.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    if (mobileMenu.classList.contains('isOpen')) {
      body.style.overflow = 'auto'
      burger.classList.remove('open')
      mobileMenu.classList.remove('isOpen')
    }
  }
})

window.addEventListener('resize', () => {
  const clientWidth = window.innerWidth
  if (clientWidth > 1000) {
    body.style.overflow = 'auto'
    burger.classList.remove('open')
    mobileMenu.classList.remove('isOpen')
  }
})