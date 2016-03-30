recipeBox.controller('showController', function($scope, $routeParams, $location, cookbookFactory){
	var box_id = $routeParams.id;
	// console.log(box_id)
	cookbookFactory.show(box_id, function(data){
		$scope.box = data;
	})
	$scope.addRecipe = function(){
		$location.path('/update/' + box_id);
	}
	$scope.seeRecipe = function(url){
		console.log(url)
	}
})