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
  })
})
