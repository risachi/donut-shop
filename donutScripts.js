var DonutShop = function(name, minCustomers, maxCustomers, avgDonutsPerCustomer, numHoursOpen) {
  this.shopName = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgDonutsPerCustomer = avgDonutsPerCustomer;
  this.numHoursOpen = numHoursOpen;

  this.toTableRow = function() {
    var tableRow = "<tr><td>" + this.shopName + "</td>";
    tableRow += "<td class='numeric'>" + this.minCustomers + "</td>";
    tableRow += "<td class='numeric'>" + this.maxCustomers + "</td>";
    tableRow += "<td class='numeric'>" + this.avgDonutsPerCustomer + "</td>"
    tableRow += "<td class='numeric'>" + this.numHoursOpen + "</td></tr>";
    return tableRow;
  }
};

var shops = [
  new DonutShop("Blue Star Donuts", 8, 43, 4.5, 11),
  new DonutShop("Voodoo Doughnuts", 4, 37, 2, 24),
  new DonutShop("Coco", 9, 23, 6.33, 11),
  new DonutShop("Tonallis Donuts & Cream", 2, 28, 1.25, 17),
  new DonutShop("Sesame Donuts", 8, 58, 3.75, 24)
];

var printToTable = function() {
  for (var index = 0; index < shops.length; index++) {
		document.write(shops[index].toTableRow());
	};
}
