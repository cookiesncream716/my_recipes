angular.module('createController', []).controller('createController', function($scope, cookbookFactory, $location){
	$scope.createBox = function(){
		// console.log($scope.newBox)
		cookbookFactory.create($scope.newBox, function(output){
			$scope.newBox = {};
			// console.log(output)
			if(output.error == 'Recipe Box name is already taken'){
				$scope.errors = output.error;
			} else{
				console.log(output)
				$location.path('/show/' + output)
			}
			// $location.path
		})
	}
})