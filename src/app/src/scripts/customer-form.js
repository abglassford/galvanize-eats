(function() {
  console.log(`form working`);
}());

$(`form`).on(`submit`, function (event) {
  event.preventDefault()
  $.ajax({
    type: 'POST',
    url: 'https://galvanize-eats-api.herokuapp.com/orders'
  }).done(function(data){
    if($(`.name`).val() === '' || $(`.phone`).val() === '' || $(`.address`).val() === '' || cartNum === 0){
      $(`.status`).text(`ERROR!`).css(`background-color`, `rgb(223, 27, 27)`).delay(2000).fadeOut(400)
    } else {
      $(`.status`).text(`${data}`).css(`background-color`, `rgb(52, 182, 36)`).delay(2000).fadeOut(400)
      $(`.info-form`).each(function(){
      this.reset();
      $(`.cart-list`).html(``)
      $(`.subtotal`).text(`Subtotal: 0.00`)
      $(`.tax`).text(`Tax: 0.00`)
      $(`.grand-total`).text(`Grand Total: 0.00`)
      })
    }
  })
})
