(function() {
  let itemTypeArr = []
  console.log('Hello Orders!');
  $.ajax('https://galvanize-eats-api.herokuapp.com/menu').done(
    function(data) {
    data.menu.forEach(function(item){
      console.log(item);
      if(!itemTypeArr.includes(item.type)){
        itemTypeArr.push(item.type)
        $('.items').append(`<optgroup class=${item.type} label=${item.type}>`)
      }
      $(`.${item.type}`).append(`<option>${item.name} - ${item.price}</option>`)
    })
  })
}());
