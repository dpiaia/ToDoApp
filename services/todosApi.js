angular.module('todoApp').factory('todoApi', function($http){

	var _getTodos = $http.get('http://localhost:3412/todos');
	var _saveTodo = function(tarefas){
		return $http.post('http://localhost:3412/todos', tarefas)
	}
	return {
		getTodos : _getTodos, 
		saveTodo : _saveTodo
	}

// return{
// 	todoApi : retorno
// }

})