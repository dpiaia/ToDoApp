angular.module('todoApp').service('diaApi', function($http){

	var _getDias = function(){
		return $http.get('http://localhost:3412/dias');	
	}
	this.getDias = _getDias;

});