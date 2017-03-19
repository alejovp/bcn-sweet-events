(function () {
  const menu = document.getElementsByClassName('menu')
  const menuNav = document.getElementById('menuNav')
  const main = document.getElementsByTagName('main')[0]
  const footer = document.getElementsByTagName('footer')[0]
  const navToColor = document.getElementById('sweetNav')
  const navLogo = document.getElementById('navLogo')

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
      window.scrollTo(0, 0)

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

  window.onscroll = function () {
    if (document.body.scrollTop >= 130) {
      navToColor.classList.add('nav-colored')
      navLogo.classList.add('nav-colored')
    } else {
      navToColor.classList.remove('nav-colored')
      navLogo.classList.remove('nav-colored')
    }
  }
})()

/** **************************** Products / details section *****************************/

// Product price total
$('.selectpicker').on('change', function (e) {
  e.preventDefault()
  const priceCont = $(this).closest('.proData').find('.price')
  const price = priceCont.attr('data-price') * 1
  const total = $(this).val() * price
  priceCont.find('span').text(total)
})

// Add product to cart with ajax post
$('.proData').on('click', '.addProduct', function (e) {
  e.preventDefault()
  let cartCount = $('.numberCircle').text()
  const url = '/cart'
  const method = 'POST'
  const id = $(this).attr('data-id')
  const qtty = $(this).closest('.proData').find('select').val()
  const data = { id, qtty }

  $.ajax({ url, method, data })
    .then(() => {
      $('.numberCircle').text(Number(cartCount) + 1)
      console.log('added to the cart')
    })
    .catch(() => alert('There was an error while adding your product to cart, please try again!'))
})

// Add Product to cart with a get ajax request
// $('.addProduct').click(function (e) {
//   e.preventDefault()
//   const url = this.href
//   let cartCount = $('.numberCircle').text()
//   // let title = this.siblings('h3').text()
//   // console.log(title)
//   console.log(cartCount)
//   $.ajax({ url })
//     .done(function () {
//       $('.numberCircle').text(Number(cartCount) + 1)
//       console.log('added to the cart')
//     })
// })

/** *************************** Shopping Cart *********************/

const cartArticles = document.getElementsByClassName('cartArticles')[0]
const itemPrices = document.getElementsByClassName('itemPrice')
const totalNumbers = document.getElementsByClassName('totalNumbers')
let subTotal = +totalNumbers[0].innerHTML
let shipping = +totalNumbers[1].innerHTML
let result = document.getElementsByClassName('result')

showCartResults()

cartArticles.addEventListener('mousemove', showCartResults)

cartArticles.addEventListener('click', showCartResults)

// Delete product from cart with ajax
$('.remove').click(function (e) {
  e.preventDefault()
  let cartCount = $('.numberCircle').text()
  const url = '/cart'
  const method = 'DELETE'
  const id = $(this).attr('data-id')
  const data = { id }

  // Remove article from the session cart
  $.ajax({ url, method, data })
    .then(() => {
      // Remove article from the DOM cart
      $(this).closest('article').remove()
      $('.numberCircle').text(Number(cartCount) - 1)
      showCartResults()
    })
    .catch(() => alert('There was an error while deleting your order, please try again!'))
})

// Helper functions
function cartSum (itemPrices) {
  let acc = 0
  for (let i = 0; i < itemPrices.length; i++) {
    acc += +itemPrices[i].innerHTML
  }
  return acc
}

function showCartResults () {
  subTotal = cartSum(itemPrices)
  totalNumbers[0].innerHTML = subTotal
  result[0].innerHTML = subTotal + shipping
}

