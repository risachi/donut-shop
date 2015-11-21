function setupFormEvents() {
  $('input').on('change', function(e) {
    displayNewShopValue(e);
  });
}

function displayNewShopValue(e) {
  var el = e.target;
  var newValue = el.value;
  var shop = shops[ $(el).data('shop-id') ];
  var property = $(el).data('shop-property');

  shop[property] = newValue;
  shop.refresh();
}
