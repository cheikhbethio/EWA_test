'use strict';


angular.module('shared.mandat', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('app.mandat', {
			url: '/mandat',
			templateUrl: 'app/shared/mandat/mandat.html',
			controller: 'mandatController'
		})		
		.state('app.createMandat', {
			url: '/mandat/create',
			templateUrl: 'app/shared/mandat/create.html',
			controller: 'createMandatController'
		})
		.state('app.editMandat', {
			url : '/mandat/:id/edit',
			templateUrl : 'app/shared/mandat/edit.html',
			controller : 'editMandatController'
		})
		.state('app.showMandat', {
			url: '/mandat/:id',
			templateUrl: 'app/shared/mandat/show.html',
			controller: 'showMandatController'
		});

}])
.controller('mandatController', ['$scope', '$state','$stateParams',"$localStorage", 'Mandat', 
 function($scope, $state, $stateParams,$localStorage, Mandat){  

 	$scope.mandats = Mandat.query();
	$scope.success = $stateParams.success;
	$scope.editSuccess = $stateParams.editSuccess;

	$scope.closeAlert = function() {
        $scope.success = false;
        $scope.editSuccess = false;
    };

	$scope.deleteMandat = function(mandatIndex) {
		console.log(mandatIndex);

		console.log("Mandat: " + JSON.stringify($scope.mandats[mandatIndex]));

			Mandat.remove({id: $scope.mandats[mandatIndex]._id }, function(removed_mandat){
				$scope.mandats.splice(mandatIndex, 1);
			});
    };

}])
.controller('deleteMandatDialogController', function($scope, $modalInstance, data){

		$scope.mandat_title= mandat_title;
		console.log("Title to delete: " + $scope.mandat_title);
		
		$scope.cancel = function(){
			$modalInstance.dismiss('Canceled');
		};
		
		$scope.save = function(){
			$modalInstance.close();
		};

})
.controller('createMandatController', ['$scope', '$state','$stateParams',"$localStorage", 'Mandat',
 function($scope, $state, $stateParams,$localStorage, Mandat){   
 	$scope.addMandat = function() {
		
		var newMandat={
			title : $scope.title,
			adresse : $scope.adresse,
			photo : $scope.photo,
	        prix: $scope.prix,
		    date_creation : Date.now(),
		    date_validite : $scope.date_creation_fin
		};

		Mandat.save(newMandat);
		$state.go('app.mandat');
	}
}])
.controller('editMandatController', ['$scope', '$state','$stateParams',"$localStorage", 'Mandat',
 function($scope, $state, $stateParams,$localStorage, Mandat){   
	$scope.mandat = Mandat.get({id: $stateParams.id}, function(page) {
        console.log("get mandat "+$stateParams.id);
    });

    $scope.editMandat = function(){
    	if ($scope.editMandatForm.$valid){ 
	    	Mandat.update({id: $stateParams.id}, $scope.mandat);
	    	$state.go('app.mandat', {editSuccess:true});
	   	} else {
			console.log('Formulaire Invalide.');
		}
    }
}])
.controller('showMandatController', ['$scope', '$state','$stateParams',"$localStorage", 'Mandat',
 function($scope, $state, $stateParams,$localStorage, Mandat){   

	$scope.mandat = Mandat.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });
}]);
