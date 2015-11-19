var DELAY = 100;

var DonutShop = function(name, minCustDay, maxCustDay, avgDonutsPerCustomer, numHoursOpen) {
  this.shopName = name;
  this.minCustDay = minCustDay;
  this.maxCustDay = maxCustDay;
  this.avgDonutsPerCustomer = avgDonutsPerCustomer;
  this.numHoursOpen = numHoursOpen;

  this.minCustHour = Math.floor(this.minCustDay / this.numHoursOpen);
  this.maxCustHour = Math.floor(this.maxCustDay / this.numHoursOpen);

  this.hourlyCustomers = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  };

  // this.dailyCustomers = Math.floor(Math.random() * (this.maxCustDay - this.minCustDay + 1)) + this.minCustDay;

  // this.soldToday = Math.floor(this.dailyCustomers * this.avgDonutsPerCustomer);

  this.toTable = function(shopId) {
    var tableRows ="<table id='table-" + shopId + "' class='shop'><tr><th id=topLevel colspan='5'>" + this.shopName + "</th></tr>";
    tableRows += "<tr><th class=subHeader>" + "Hour" + "</th>";
    tableRows += "<th class=subHeader>" + "# of Customers" + "</th>";
    tableRows += "<th class=subHeader>" + "# of Donuts" + "</th></tr>";

    var totalCustomers = 0;
    var totalDonuts = 0;

    for (i = 0; i < this.numHoursOpen; i++) {
      var currentCustomerCount = this.hourlyCustomers();
      var soldHourly = Math.floor(currentCustomerCount * this.avgDonutsPerCustomer);
      totalCustomers += currentCustomerCount;
      totalDonuts += soldHourly;

      tableRows += "<tr><td class='numeric'>" + (i + 1) + "</td>";
      tableRows += "<td class='numeric'>" + currentCustomerCount + "</td>";
      tableRows += "<td class='numeric'>" + soldHourly + "</td></tr>";
    }

    tableRows += "<tr id='totals'><td class='lastRow'>" + "Total" + "</td>";
    tableRows += "<td class='lastRow'>" + totalCustomers + "</td>";
    tableRows += "<td class='lastRow'>" + totalDonuts + "</td></tr>";

    tableRows += "</table>";
    // <div id=extraSpacing></div>";

    return tableRows;
  };
};

var shops = [
  new DonutShop("Blue Star Donuts", 8, 43, 4.5, 11),
  new DonutShop("Voodoo Doughnuts", 4, 37, 2, 24),
  new DonutShop("Coco", 9, 23, 6.33, 11),
  new DonutShop("Tonallis Donuts & Cream", 2, 28, 1.25, 17),
  new DonutShop("Sesame Donuts", 8, 58, 3.75, 24)
];

var buttons = function () {
  result = "";
  $.each(shops, function( i, shop ) {
    result += '<button type="button" class="buttonStyling pure-button" id="button-' + i + '">' + shop.shopName + '</button><br>';
  });
  return result;
};


var hideAllShops = function() {
  $( "table" ).fadeOut(DELAY);
};

var showOneShop = function(shopId) {
  $( "#table-" + shopId ).delay(DELAY).fadeIn(DELAY);
};

var printToTable = function() {
  $.each(shops, function( i, shop ) {
    document.write(shop.toTable(i));
  });
};

var printButtons = function () {
  document.write(buttons());

  $( 'button' ).click(function(event) {
    var buttonId = event.target.id;
    var shopId = buttonId.slice(7);
    hideAllShops();
    showOneShop(shopId);
  });
};
