const menu = document.getElementsByClassName('menu')
const menuNav = document.getElementById('menuNav')

function slideMenu (elem) {
  if (elem.classList.contains('slideup')) {
    elem.classList.remove('slideup')
    elem.classList.add('slidedown')
  } else {
    elem.classList.remove('slidedown')
    elem.classList.add('slideup')
  }
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function (e) {
    e.preventDefault()
    slideMenu(menuNav)
  })
}

