function setupFormEvents() {
  document.addEventListener("change", displayNewShopValue);
}

function displayNewShopValue(e) {
  var newValue = e.target.value;
  var shopId = e.target.getAttribute('data-shop-id');
  var shop = shops[ shopId ];
  var property = e.target.getAttribute('data-shop-property');

  shop[property] = parseInt(newValue);
  shop.refresh();
}

// function setupFormEvents() {
//   $('input').on('change', function(e) {
//     displayNewShopValue(e);
//   });
// }

// function displayNewShopValue(e) {
//   var el = e.target;
//   var newValue = el.value;
//   var shop = shops[ $(el).data('shop-id') ];
//   var property = $(el).data('shop-property');
//
//   shop[property] = parseInt(newValue);
//   shop.refresh();
// }
