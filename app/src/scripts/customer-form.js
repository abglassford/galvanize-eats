(function() {
  console.log(`form working`);
}());

$(`form`).on(`submit`, function (event) {
  event.preventDefault()
  $.ajax({
    type: 'POST',
    url: 'https://galvanize-eats-api.herokuapp.com/orders'
  }).done(function(data){
    console.log(data);
    $(`.info-form`).each(function(){
    this.reset();
    $(`.cart-list`).html(``)
    $(`.subtotal`).text(`Subtotal:`)
    $(`.tax`).text(`Tax:`)
    $(`.grand-total`).text(`Grand Total:`)
    })
  })
})
