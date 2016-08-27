angular.module('dap', [
	'ngResource',
  	'ngMaterial',
	'ngAnimate',
	'ui.router',

	'dap.controllers',
	'dap.services',
	'dap.directives',
	'dap.filters'

])
	.config(function ($interpolateProvider, $stateProvider, $httpProvider, $resourceProvider, $urlRouterProvider) {

    // Force angular to use square brackets for template tag
    // The alternative is using {% verbatim %}
    $interpolateProvider.startSymbol('[[').endSymbol(']]');

    // CSRF Support
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    // This only works in angular 3!
    // It makes dealing with Django slashes at the end of everything easier.
    $resourceProvider.defaults.stripTrailingSlashes = false;

    // Django expects jQuery like headers
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    // Routing
    $stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/static/views/home.html',
			controller: 'homeController'
		});

	$urlRouterProvider.otherwise('/');

	//Interceptor to handle bad request,response...
	//$httpProvider.interceptors.push('APIInterceptor');

	})

	// ANGULAR MATERIAL THEME CONFIG
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('blue')
    		.accentPalette('blue-grey')
			.warnPalette('red')
			.backgroundPalette('red');
		});