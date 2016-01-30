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
		$scope.enableSelecter = false;
		$scope.deleteNow = false;
		$scope.toDelete = {};


	$scope.deleter = function() {
		$scope.enableSelecter = !$scope.enableSelecter;
		$scope.deleteNow = true;
		if ($scope.deleteNow) {			
			for (var m in $scope.toDelete) {
				Mandat.remove({id: $scope.mandats[m]._id }, function(removed_mandat){
					$scope.mandats.splice(m, 1);
				});
			};
			$scope.toDelete = {};
		} else{
			alert('chosir les mandats à supprimer!');
		}
	
    }

}])
.controller('createMandatController', ['$scope', '$state','$stateParams',"$localStorage", 'Mandat',
 function($scope, $state, $stateParams,$localStorage, Mandat){  	
	$scope.compareLesDates = true;	
	var verifDate = function(date){
			if (Date.now() > date || date == "Invalid Date") {
				$scope.compareLesDates = false;
			} else{
				$scope.compareLesDates = true;
			}
			return $scope.compareLesDates;
	}

 	$scope.addMandat = function(isValidForm) {
		var thisDate = verifDate(new Date ($scope.date_creation_fin));
		if (isValidForm && thisDate) {
			var newMandat={
				title : $scope.title,
				adresse : $scope.adresse,
				photo : $scope.photo,
		        prix: $scope.prix,
			    date_creation : Date.now(),
			    date_validite : new Date ($scope.date_creation_fin)
			};
			Mandat.save(newMandat);
			$state.go('app.mandat');
		}else{
			alert("Le formulaire est invalide!!! \nVeillez respecter les contrainte");
		}
	}

}])
.controller('editMandatController', ['$scope', '$state','$stateParams',"$localStorage", 'Mandat',
 function($scope, $state, $stateParams,$localStorage, Mandat){   

	$scope.mandat = Mandat.get({id: $stateParams.id}, function(page) {
       // console.log("get mandat "+$stateParams.id);
    });
	
	$scope.compareLesDates = true;	
	var verifDate = function(date){
			if (Date.now() > date || date == "Invalid Date") {
				$scope.compareLesDates = false;
			} else{
				$scope.compareLesDates = true;
			}
			return $scope.compareLesDates;
	}

    $scope.editMandat = function(isValidForm){
		var thisDate = verifDate(new Date ($scope.mandat.date_validite));
    	if (isValidForm && thisDate){ 
	    	Mandat.update({id: $stateParams.id}, $scope.mandat);
	    	$state.go('app.mandat', {editSuccess:true});
	   	} else {
			alert('Formulaire Invalide.');
		}
    }
}])
.controller('showMandatController', ['$scope', '$state','$stateParams',"$localStorage", 'Mandat',
 function($scope, $state, $stateParams,$localStorage, Mandat){   

	$scope.mandat = Mandat.get({id: $stateParams.id}, function(page) {
        console.log("get article "+$stateParams.id);
    });
}]);
