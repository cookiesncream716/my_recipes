angular.module('dashboardController', []).controller('dashboardController', function($scope, $location, cookbookFactory){
	cookbookFactory.index(function(data){
		$scope.boxes = data
	})
	$scope.addBox = function(){
		console.log('click to add box')
		$location.path('/create');
	}
})