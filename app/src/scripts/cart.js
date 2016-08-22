(function() {
  console.log('cart working');
}());

var subTotVar = 0
var taxRate = 0.08

//click event to add item to cart
$(`.add`).on(`click`, function () {
  //if there is no item selected, alert the user
  if(!$('.items option:selected').length){
    alert('Please Select Something!')
  } else {
    //if the quantity is undefined, alert the user
    if($(`.quantity`).val() === ''){
      alert('Please Specify a Quantity!')
    } else {
      //append the desired quantity of items to the cart
      for (var i = 0; i < $(`.quantity`).val(); i++) {
        //set subtotal to the total of the prices of the items in the cart
        subTotVar += parseFloat($('.items option:selected').attr('price'))
        //append the selected and submitted item names and prices to the cart
        $(`.cart-list`).append(`<li>${$('.items option:selected').text()}</li>`)
      }
    }
    //set subtotal text on page
    $(`.subtotal`).text(`Subtotal: ${subTotVar.toFixed(2)}`)
    //create variable to hold the value of the total tax to be added to total
    var tax = (subTotVar * taxRate).toFixed(2)
    //set tax text on page
    $(`.tax`).text(`Tax: ${tax}`)
    //create variable to hold grand total (tax + subtotal)
    var grandTot = parseFloat(subTotVar) + parseFloat(tax)
    //set grand total text on page
    $(`.grand-total`).text(`Grand Total: ${grandTot.toFixed(2)}`)
  }
  $(`.quantity`).val('')
})
