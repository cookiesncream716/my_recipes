recipeBox.controller('updateController', function($scope, $routeParams, cookbookFactory, recipeFactory){
	var box_id = $routeParams.id
	// console.log($routeParams.id)
	cookbookFactory.show(box_id, function(data){
		$scope.box = data;
	})
	$scope.createRecipe = function(){
		console.log($scope.addRecipe)
		recipeFactory.create($scope.addRecipe, function(data){
			console.log(data)
			if(data.message != undefined){
				$scope.errors = 'Recipe name, url, and category cannot be blank'
			} else{
				$scope.addRecipe = {};
			}
		})
	}
})