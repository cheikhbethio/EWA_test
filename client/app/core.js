'use strict';

angular.module('EWA', [
	'serviceMandat',
	'shared.mandat',
	'sharedBodyModule',
	'ui.bootstrap.showErrors',
    'snap',
    'ui.bootstrap',
    'ui.bootstrap.modal',
	'ui.router',
	'contenteditable',
    'ngStorage',    
    'textAngular',
    'dialogs.main',
	])
	.config(['$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/app');
			$stateProvider
				.state("app", {
					url : '/app',
					views : {
						'header' : {
							templateUrl : 'app/shared/body/header.html',
							controller : 'sharedBodyController'
						},
						'content' : {
							templateUrl : 'app/shared/body/content.html',
							controller : 'sharedBodyController'
						},
						'footer' : {
							templateUrl : 'app/shared/body/footer.html'
						}
					},
					data : {
						requireLogin : false
					}
				});
		}]);