var myApp = angular.module('myApp',
  ['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/all_items.html',
      controller: 'Shopping'
    }).
    when('/Inventory/:uID', {
      templateUrl: 'views/inventory.html',
      controller: 'ShoppingInventory'
    }).
    when('/Inventory/:uID/:mID/', {
      templateUrl: 'views/item.html',
      controller: 'ShoppingItem'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);