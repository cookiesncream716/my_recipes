recipeBox.factory('recipeFactory', function($http){
	var factory = {};
	var recipes = [];
	factory.create = function(data, callback){
		// console.log('factory', data)
		$http.post('/recipe', data).success(function(output){
			// console.log(output)
			callback(output);
		})
	}
	return factory;
})