(function() {
  console.log('cart working');
}());

var subTotVar = 0
var taxRate = 0.08

$(`.add`).on(`click`, function () {
  console.log($('.items option:selected'));
  if(!$('.items option:selected').length){
    alert('Please Select Something!')
  } else {
    subTotVar += parseFloat($('.items option:selected').attr('price'))
    $(`.cart-list`).append(`<li>${$('.items option:selected').text()}</li>`)

    $(`.subtotal`).text(`Subtotal: ${subTotVar.toFixed(2)}`)
    var tax = (subTotVar * taxRate).toFixed(2)
    console.log(tax);
    $(`.tax`).text(`Tax: ${tax}`)
    var grandTot = parseFloat(subTotVar) + parseFloat(tax)
    $(`.grand-total`).text(`Grand Total: ${grandTot.toFixed(2)}`)
  }
})
