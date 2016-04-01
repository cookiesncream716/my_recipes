var recipeBox = angular.module('recipeBox', [
	'ngRoute',
	'ui.bootstrap'
	//  'appRoutes',
	// 'createController',
	// 'dashboardController',
	// 'showController',
	// 'titleController'
	// 'updateController',
	// 'cookbookFactory'
])

recipeBox.config( function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/dashboard.html',
			// controller: 'titleController'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			// controller: 'dashboardController'
		})
		.when('/create', {
			templateUrl: 'partials/create.html',
			// controller: 'createController'
		})
		.when('/show/:id', {
			templateUrl: '/partials/show.html',
			// controller: 'showController'
		})
		.when('/update/:id', {
			templateUrl: '/partials/update.html',
			// controller: 'updateController'
		})
		.otherwise({
			templateUrl: 'partials.title.html',
			// controller: 'titleController'
		})
});