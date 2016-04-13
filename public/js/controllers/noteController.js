recipeBox.controller('noteController', function($scope, $routeParams, $location, recipeFactory){
	var id = $routeParams.id;
	recipe_box = $routeParams.title
	$scope.box_title = recipe_box
	console.log(id + recipe_box)
	// recipeFactory.show(id, function(data){
	// 	$scope.recipe = data
	// })
	// $scope.showBox = function{
	// 	$location.path('/show')
	// }
})