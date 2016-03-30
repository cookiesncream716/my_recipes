recipeBox.factory('cookbookFactory', function($http){
	var factory = {};
	var cookbooks = [];
	factory.create = function(data, callback){
		$http.post('/cookbook', data).success(function(output){
			// console.log(output, 'in factory')
			callback(output)
		})
	}
	factory.index = function(callback){
		$http.get('/cookbook').success(function(output){
			// console.log(output)
			callback(output)
		})
	}
	factory.show = function(id, callback){
		$http.post('/cookbook/'+id).success(function(output){
			callback(output);
		})
	}
	return factory;
})