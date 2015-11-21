var DELAY = 150;

function DonutShop(name, minCustHour, maxCustHour, avgDonutsPerCustomer, numHoursOpen) {
  this.shopName = name;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgDonutsPerCustomer = avgDonutsPerCustomer;
  this.numHoursOpen = numHoursOpen;

  this.hourlyCustomers = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  };

  this.toForm = function(shopId) {
    return '<form id=form-' + shopId + ' class="pure-form pure-form-aligned">' +
           '<fieldset>' +
           '<div class="pure-control-group">' +
           '<label for="numHoursOpen">Number of Hours Open:</label>' +
           '<input data-shop-id=' + shopId + ' data-shop-property=numHoursOpen type="number" placeholder="10" min=1 max=24>' +
           '</div>' +

           '<div class="pure-control-group">' +
           '<label for="avgDonuts">Avg Donuts per Customer:</label>' +
           '<input id="avgDonuts" type="number" placeholder="4" min=1 max=99>' +
           '</div>' +

           '<div class="pure-control-group">' +
           '<label for="minCust">Min Customers<br>per Hour:</label>' +
           '<input id="minCust" type="number" placeholder="3" min=0 max=99>' +
           '</div>' +

           '<div class="pure-control-group">' +
           '<label for="maxCust">Max Customers<br>per Hour:</label>' +
           '<input id="maxCust" type="number" placeholder="6" min=0 max=99>' +
           '</div>' +
           '</fieldset>' +
           '</form>';
  };

  this.toTable = function(shopId) {
    this.shopId = shopId;
    var tableRows ="<table id=table-" + shopId + " class=shop><tr><th id=topLevel colspan=5>" + this.shopName + "</th></tr>";
    tableRows += "<tr><th class=subHeader>" + "Hour" + "</th>" +
                 "<th class=subHeader>" + "# of Customers" + "</th>" +
                 "<th class=subHeader>" + "# of Donuts" + "</th></tr>";

    var totalCustomers = 0;
    var totalDonuts = 0;

    for (i = 0; i < this.numHoursOpen; i++) {
      var currentCustomerCount = this.hourlyCustomers();
      var soldHourly = Math.floor(currentCustomerCount * this.avgDonutsPerCustomer);
      totalCustomers += currentCustomerCount;
      totalDonuts += soldHourly;

      tableRows += "<tr><td class=numeric>" + (i + 1) + "</td>" +
                   "<td class=numeric>" + currentCustomerCount + "</td>" +
                   "<td class=numeric>" + soldHourly + "</td></tr>";
    }

    tableRows += "<tr id=totals><td class=lastRow>" + "Total" + "</td>" +
                 "<td class=lastRow>" + totalCustomers + "</td>" +
                 "<td class=lastRow>" + totalDonuts + "</td></tr>" +

                 "</table>";

    return tableRows;
  };

  // pg. 316
  this.refresh = function () {
    $('#table-' + this.shopId).replaceWith(this.toTable(this.shopId));
    $('#table-' + this.shopId).show();
  };

}

var shops = [
  new DonutShop("Blue Star Donuts", 8, 43, 4.5, 11),
  new DonutShop("Voodoo Doughnuts", 4, 37, 2, 24),
  new DonutShop("Coco", 9, 23, 6.33, 11),
  new DonutShop("Tonallis Donuts & Cream", 2, 28, 1.25, 17),
  new DonutShop("Sesame Donuts", 8, 58, 3.75, 24)
];

function buttons() {
  result = "";
  $.each(shops, function( i, shop ) {
    result += '<button type=button class="buttonStyling pure-button" id=button-' + i + '>' + shop.shopName + '</button><br>';
  });
  return result;
}

function hideShops() {
  $( "form" ).fadeOut(DELAY);
  $( "table" ).fadeOut(DELAY);
}

function showShop(shopId) {
  $( "#form-" + shopId ).delay(DELAY).fadeIn(DELAY);
  $( "#table-" + shopId ).delay(DELAY).fadeIn(DELAY);
}

function printShops() {
  $.each(shops, function( i, shop ) {
    document.write(shop.toForm(i));
    document.write(shop.toTable(i));
  });
}

function printButtons() {
  document.write(buttons());

  $( 'button' ).click(function(event) {
    var buttonId = event.target.id;
    var shopId = buttonId.slice(7);
    hideShops();
    showShop(shopId);
    $('button').removeClass("pure-button-disabled");
    $('#'+buttonId).addClass("pure-button-disabled");
  });
}
