recipeBox.controller('showController', function($scope, $routeParams, $location, cookbookFactory, recipeFactory){
	var box_id = $routeParams.id;
	// console.log(box_id)
	// $scope.Bread_note = false;
	// $scope.Beverage_note = false;
	$scope.dessert_note = false;
	$scope.maindish_note = false;
	$scope.salad_note = false;
	$scope.side_note = false;
	$scope.soup_note = false;
	$scope.other_note = false;
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
	// $scope.breadNotes = function(notes, id){
	// 	$scope.note ={note: notes, recipe_id: id}
	// 	console.log($scope.note)
	// 	$scope.bread_note = true
	// }
	$scope.dessertNotes = function(notes, id){
		$scope.dess_note = {note: notes, recipe_id: id}
		$scope.dessert_note = true
	}
	$scope.maindishNotes = function(notes, id){
		$scope.main_note = {note: notes, recipe_id: id}
		$scope.maindish_note = true
	}
	$scope.saladNotes = function(notes, id){
		$scope.salads_note = {note: notes, recipe_id: id}
		$scope.salad_note = true
	}
	$scope.sideNotes = function(notes, id){
		$scope.sides_note = {note: notes, recipe_id: id}
		$scope.side_note = true
	}
	$scope.soupNotes = function(notes, id){
		$scope.soups_note = {note: notes, recipe_id: id}
		$scope.soup_note = true
	}
	$scope.otherNotes = function(notes, id){
		$scope.others_note = {note: notes, recipe_id: id}
		// console.log($scope.others_note)
		$scope.other_note = true
		console.log($scope.other_note)
	}
	$scope.showNotes = function(name, notes, id){
		console.log(name, notes, id)
		$scope.note ={note: notes, recipe_id: id}
		var category = name + '_note'
		console.log(category)
		$scope[category] = true
	}
	$scope.addNote = function(recipe_id){
		console.log($scope.newNote, $scope.newNote[recipe_id].notes)

		recipeFactory.update_notes($scope.newNote[recipe_id], recipe_id, function(data){
			cookbookFactory.show(box_id, function(data){
				$scope.box = data
				// $scope.newNote = {}
			})
		})
	}
	$scope.closeNote = function(){
		// console.log(note)
		$scope.note = false
		$scope.Bread_note = false;
		$scope.Beverage_note = false;
		$scope.dessert_note = false;
		$scope.maindish_note = false;
		$scope.salad_note = false;
		$scope.side_note = false;
		$scope.soup_note = false;
		$scope.other_note = false;
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