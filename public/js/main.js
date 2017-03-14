const menu = document.getElementsByClassName('menu')
const menuNav = document.getElementById('menuNav')
const main = document.getElementsByTagName('main')[0]
const footer = document.getElementsByTagName('footer')[0]

let menuDown = false

function slideMenu (elem) {
  if (elem.classList.contains('slideup')) {
    elem.classList.remove('slideup')
    elem.classList.add('slidedown')
    menuDown = true
  } else {
    elem.classList.remove('slidedown')
    elem.classList.add('slideup')
    menuDown = false
  }
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function (e) {
    e.preventDefault()

    if (menuDown) {
      slideMenu(menuNav)
      main.classList.remove('hide')
      footer.classList.remove('hide')
    } else {
      slideMenu(menuNav)
      menuNav.addEventListener('transitionend', function (e) {
        if (menuDown) {
          main.classList.add('hide')
          footer.classList.add('hide')
        }
      })
    }
  })
}

/** ************************ Add Cart ajax *****************************/

$('.addProduct').click(function (e) {
  e.preventDefault()
  const url = this.href
  let cartCount = $('.numberCircle').text()
  // let title = this.siblings('h3').text()
  // console.log(title)
  console.log(cartCount)
  $.ajax({ url })
    .done(function () {
      $('.numberCircle').text(Number(cartCount) + 1)
      console.log('added to the cart')
    })
})
