// Setting up the module
angular.module('iDecidedThis', []);

// Setting Controller
angular.module('iDecidedThis').controller("mainController", ["$scope", function($scope){ 
	$scope.greeting = "Hello people!"
	$scope.buttonClick = function() {
		console.log("I should have asked for help earlier!")
		$scope.greeting = "WOOHOO!!!!!!!"
	}





  }])