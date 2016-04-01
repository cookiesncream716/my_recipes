recipeBox.controller('showController', function($scope, $routeParams, $location, cookbookFactory, recipeFactory){
	var box_id = $routeParams.id;
	// console.log(box_id)
	cookbookFactory.show(box_id, function(data){
		$scope.box = data;
	})
	$scope.max = 5;
	$scope.isReadOnly = false;
	$scope.hoveringOver = function(value){
		$scope.overStar = value;
	}
	// $scope.ratingStates = [{stateOn:'glyphicon-heart', stateOff: 'glyphicon-heart'}]
	$scope.addRating = function(id, rating){
		recipeFactory.update(id, rating, function(data){
			cookbookFactory.show(box_id, function(data){
				$scope.box = data
			})
		})
	}
	$scope.addRecipe = function(){
		$location.path('/update/' + box_id);
	}
	$scope.deleteRecipe = function(id){
		// console.log(id)
		recipeFactory.delete(id, function(data){
			cookbookFactory.show(box_id, function(data){
				$scope.box = data;
			})
		})
	}
})