//
// Configuration
//
var DELAY = 150;

var shops = [
  new DonutShop("Blue Star Donuts", 8, 43, 4.5, 11),
  new DonutShop("Voodoo Doughnuts", 4, 37, 2, 24),
  new DonutShop("Coco", 9, 23, 6.33, 11),
  new DonutShop("Tonallis Donuts & Cream", 2, 28, 1.25, 17),
  new DonutShop("Sesame Donuts", 8, 58, 3.75, 24)
];



$(function() {
  printButtons();
  printShops();
  setupEvents();
});

function printButtons() {
  $('#buttonList').append( buttons() );

  $( 'button' ).click(function(event) {
    var buttonId = event.target.id;
    var shopId = buttonId.slice(7);
    showShop(shopId);
    $('button').removeClass("pure-button-disabled");
    $('#'+buttonId).addClass("pure-button-disabled");
  });
}

function printShops() {
  $.each(shops, function( i, shop ) {
    $('#shopList').append( shop.toForm(i) );
    $('#shopList').append( shop.toTable(i) );
  });
}

function buttons() {
  result = "";
  $.each(shops, function( i, shop ) {
    result += '<button type=button class="buttonStyling pure-button" id=button-' + i + '>' + shop.shopName + '</button><br>';
  });
  return result;
}

function showShop(shopId) {
  hideShops();
  $( "#form-" + shopId ).delay(DELAY).fadeIn(DELAY);
  $( "#table-" + shopId ).delay(DELAY).fadeIn(DELAY);
}

function hideShops() {
  $( "form" ).fadeOut(DELAY);
  $( "table" ).fadeOut(DELAY);
}
