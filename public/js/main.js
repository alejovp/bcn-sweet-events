const menu_1 = document.getElementById('menu_1')
const menu_2 = document.getElementById('menu_2')
const menuNav = document.getElementById('menuNav')
const main = document.getElementsByTagName('main')[0]
const footer = document.getElementsByTagName('footer')[0]

function slideMenu (elem) {
  if (elem.classList.contains('slideup')) {
    elem.classList.remove('slideup')
    elem.classList.add('slidedown')
  } else {
    elem.classList.remove('slidedown')
    elem.classList.add('slideup')
  }
}

menu_2.addEventListener('click', function (e) {
  e.preventDefault()
  slideMenu(menuNav)
  menu_2.addEventListener('transitionend', function (e) {
    main.classList.add('hide')
    footer.classList.add('hide')
  })
})

menu_1.addEventListener('click', function (e) {
  e.preventDefault()
  main.classList.remove('hide')
  footer.classList.remove('hide')
  slideMenu(menuNav)
})

