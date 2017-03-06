$('.menu').on('click', (e) => {
  e.preventDefault()
  if ($('.menuNav').hasClass('slideup')) {
    $('.menuNav').removeClass('slideup').addClass('slidedown')
  } else {
    $('.menuNav').removeClass('slidedown').addClass('slideup')
  }
})
