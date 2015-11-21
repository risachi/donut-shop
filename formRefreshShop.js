// pg. 316
function refreshShop(shopId) {
  $('#table-' + shopId).replaceWith(shops[shopId].toTable(shopId));
  $('#table-' + shopId).show();
}


$(function() {

  $('#numHoursOpen').on('change', function(e) {
    alert("it changed to " + e.target.value);
  });

  $('#avgDonuts').on('change', function() {
    alert("it changed again");
  });

  $('#minCust').on('change', function() {

  });

  $('#maxCust').on('change', function() {

  });

});
