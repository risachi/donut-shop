// A class which represents one donut shop
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
