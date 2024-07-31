function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getSales(storeId) {
  var apiKey = 'YOUR_ECOMMERCE_API_KEY';
  var url = 'https://api.ecommerce.com/sales?storeId=' + storeId + '&apiKey=' + apiKey;
  var response = UrlFetchApp.fetch(url);
  var json = JSON.parse(response.getContentText());
  return '<p>Total Sales: ' + json.totalSales + '</p><p>Number of Orders: ' + json.orders + '</p><p>Average Order Value: ' + json.avgOrderValue + '</p>';
}
