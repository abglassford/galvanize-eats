(function() {
  console.log('menu-call working');

  let itemTypeArr = []
  let itemArr = []

  $.ajax(`https://galvanize-eats-api.herokuapp.com/menu`).done(
    function(data) {
    data.menu.forEach(function(item){
      itemArr.push(item)
      if(!itemTypeArr.includes(item.type)){
        itemTypeArr.push(item.type)
        $(`.items`).append(`<optgroup class=${item.type} label=${item.type}>`)
      }
      $(`.${item.type}`).append(`
        <option class=${item.id} price=${item.price} name='${item.name}'>${item.name} - ${item.price}</option>`)
    })
  })
}());
