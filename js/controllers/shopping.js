myApp.controller('Shopping',
	['$scope', '$rootScope', '$location', '$http',
	function($scope, $rootScope, $location, $http) {

		$http({
		  method: 'GET',
		  url: 'http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php'
		}).then(function successCallback(response) {

			$scope.items = response.data['Data'];

		}, function errorCallback(response) {

			alert('We Are Sold Out!')

		});


}]);

myApp.controller('ShoppingInventory',
	['$scope', '$rootScope', '$location', '$http', '$routeParams',
	function($scope, $rootScope, $location, $http, $routeParams) {

		$scope.whichitem = $routeParams.uID.toString();

		console.log($scope.whichitem)

		$http({
		  method: 'GET',
		  url: 'http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php?category=' + $scope.whichitem
		}).then(function successCallback(response) {
			//console.log(response)
			$scope.items = response.data['Data'];

		}, function errorCallback(response) {

			alert('We Are Sold Out!')

		});


}]);

myApp.controller('ShoppingItem',
	['$scope', '$rootScope', '$location', '$http', '$routeParams',
	function($scope, $rootScope, $location, $http, $routeParams) {

		$scope.whichitem = $routeParams.uID.toString();
		$scope.productitem = $routeParams.mID.toString();

		var url_ = 'http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php?category='

		$http({
		  method: 'GET',
		  url: url_ + $scope.whichitem + '&product=' + $scope.productitem
		}).then(function successCallback(response) {

			console.log(response);
			$scope.item = response.data['Data'];

		}, function errorCallback(response) {

			alert('We Are Sold Out!')

		});


}]);





