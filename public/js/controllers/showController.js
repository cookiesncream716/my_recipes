recipeBox.controller('showController', function($scope, $routeParams, $location, cookbookFactory, recipeFactory){
	var box_id = $routeParams.id;
	// console.log(box_id)
	cookbookFactory.show(box_id, function(data){
		$scope.box = data;
	})
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