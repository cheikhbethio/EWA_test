angular.module('serviceMandat', ['ngResource'])

.factory('Mandat', ['$resource', function($resource){
	return $resource('http://localhost:8080/api/mandat/:id', {}, {
    	query: {method:'GET', isArray:true},
    	get: {method:'GET', isArray:false},
    	save: {method:'POST', isArray:false},
     	update: {method:'PUT', isArray:false},
     	remove : {method : 'DELETE'}
    });
  }]);
