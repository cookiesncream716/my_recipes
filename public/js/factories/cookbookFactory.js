angular.module('cookbookFactory', []).factory('cookbookFactory', ['$http', function($http){
	return {
		create: function(data, callback){
			$http.post('/cookbook', data).success(function(output){
				// console.log(output, 'in factory')
				callback(output)
			})
		},
		index: function(callback){
			$http.get('/cookbook').success(function(output){
				// console.log(output)
				callback(output)
			})
		}
	}
}])