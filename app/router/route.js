app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl : 'app/view/welcome.view.html'/*,
		controller : 'welcomeController'*/
	})
	.when('/menu',{
		templateUrl : 'app/view/menu/read_menu.view.html',
		controller : 'menuController'
	})
	.otherwise({
		redirectTo : '/'
	})
});