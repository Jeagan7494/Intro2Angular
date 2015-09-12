// Setting up the module
angular.module('iDecidedThis', []);

// Setting Controller
angular.module('iDecidedThis').controller("mainController", ["$scope", function($scope){ 
	$scope.greeting = "Hello people!"
	$scope.unorderedList = "List to come..."
	$scope.buttonClick = function() {
		console.log("I should have asked for help earlier!")
		$scope.greeting = "WOOHOO!!!!!!!"
	
	
	$scope.buttonClick2 = function() {
		console.log("Will I ever get the hang of this?")
		$scope.unorderedList = [ 
	 		'Jessica',
	 		'Eagan',
	 		'Jessey'
	 ]
	}
}




  }])