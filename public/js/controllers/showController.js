recipeBox.controller('showController', function($scope, $routeParams, $location, cookbookFactory, recipeFactory){
	var box_id = $routeParams.id;
	// console.log(box_id)
	$scope.Bread_note = false;
	$scope.Beverage_note = false;
	$scope.Dessert_note = false;
	$scope.Main_note = false;
	$scope.Salad_note = false;
	$scope.Side_note = false;
	$scope.Soup_note = false;
	$scope.Other_note = false;
	cookbookFactory.show(box_id, function(data){
		$scope.box = data;
		// console.log($scope.box);
	})
	$scope.max = 5;
	$scope.isReadOnly = false;
	$scope.hoveringOver = function(value){
		$scope.overStar = value;
	}
	// $scope.ratingStates = [{stateOn:'glyphicon-heart', stateOff: 'glyphicon-heart'}]
	$scope.addRating = function(id, rating){
		recipeFactory.update_rating(id, rating, function(data){
			cookbookFactory.show(box_id, function(data){
				$scope.box = data
			})
		})
	}
	$scope.addRecipe = function(){
		$location.path('/update/' + box_id);
	}
	$scope.showNotes = function(name, notes, id){
		// console.log(name, notes, id)
		$scope[name] ={note: notes, recipe_id: id, category: name}
		// console.log($scope[name])
		var category = name + '_note'
		// console.log(category)
		$scope[category] = true
	}
	$scope.addNote = function(recipe_id){
		// console.log($scope.newNote, $scope.newNote[recipe_id].notes)
		recipeFactory.update_notes($scope.newNote[recipe_id], recipe_id, function(data){
			cookbookFactory.show(box_id, function(data){
				$scope.box = data
			})
		})
	}
	$scope.closeNote = function(category){
		// console.log(category)
		var div = category + '_note'
		$scope[div] = false
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