recipeBox.factory('recipeFactory', function($http){
	var factory = {};
	var recipes = [];
	factory.create = function(data, callback){
		// console.log('factory', data)
		$http.post('/recipe', data).success(function(output){
			// console.log(output)
			callback(output);
		})
	};
	factory.update_rating = function(id, rating, callback){
		// console.log(id, rating)
		info = {recipe_rating: rating}
		$http.post('/recipe/'+ id, info).success(function(output){
			callback();
		})
	};
	factory.update_notes = function(notes, id, callback){
		// console.log(notes, id)
		$http.post('/recipe/notes/' + id, notes).success(function(output){
			callback()
		})
	};
	factory.show = function(id, callback){
		// console.log('factory', id)
		$http.post('/recipe/note/' + id).success(function(output){
			callback(output);
		})
	}
	factory.delete = function(id, callback){
		$http.delete('/recipe/' + id).success(function(output){
			callback();
		})
	};
	return factory;
})