app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl : 'app/view/welcome.view.html'/*,
		controller : 'welcomeController'*/
	})
	// .when('/category',{
	// 	templateUrl : 'app/category/read_category.template.html',
	// 	controller : 'categoryController'
	// })
	.otherwise({
		redirectTo : '/'
	})
});