angular.module('todoApp').controller('mainCtrl', function($scope, $filter, $http, todoApi, diaApi){
			$scope.todos = [];

			todoApi.getTodos.then(function(res){
				$scope.todos = res.data;
			}, function(error){
			});

			var nomeApp = "To-Bob-Do";
			$scope.app = $filter('uppercase')(nomeApp);

			// $scope.todos = [
			// 	{afazer:'Reunião',quando:'Quarta'},
			// 	{afazer:'Lavar o carro',quando:'Terça'},
			// 	{afazer:'Tozar cachorro',quando:'Quinta'}
			// ];

			$scope.novaTarefa = function(tarefas){

				todoApi.saveTodo(tarefas).then(function(res){

				});

				$scope.todos.push(angular.copy(tarefas));
				delete $scope.tarefas;
			}

			diaApi.getDias().then(function(res){
				$scope.diasdasemana = res.data;
			});

			// $scope.diasdasemana = [
			// 	{nome:"Segunda-feira", abrev:"Seg", semana:"meio da semana"},
			// 	{nome:"Terça-feira", abrev:"Ter", semana:"meio da semana"},
			// 	{nome:"Quarta-feira", abrev:"Qua", semana:"meio da semana"},
			// 	{nome:"Quinta-feira", abrev:"Qui", semana:"meio da semana"},
			// 	{nome:"Sexta-feira", abrev:"Sex", semana:"meio da semana"},
			// 	{nome:"Sábado", abrev:"Sab", semana:"fim da semana"},
			// 	{nome:"Domingo", abrev:"Dom", semana:"fim da semana"}
			// ];
			$scope.excluirTarefa = function(tarefas){
				var naoExcluidas = tarefas.filter(function(tarefa){
					if(!tarefa.concluida){
						return tarefa;
					}
				});
				$scope.todos=naoExcluidas;
			}
			$scope.desabilitar = function(tarefas){

				var desabilitar = tarefas.some(function(tarefa){
					return tarefa.concluida;
				});
				return desabilitar;
			}
		});
