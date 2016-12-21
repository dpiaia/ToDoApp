var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

    var diasdasemana = [
      {nome:"Segunda-feira", abrev:"Seg",semana:"meio de semana"},
      {nome:"Terça-feira", abrev:"Ter",semana:"meio de semana"},
      {nome:"Quarta-feira", abrev:"Qua",semana:"meio de semana"},
      {nome:"Quinta-feira", abrev:"Qui",semana:"meio de semana"},
      {nome:"Sexta-feira", abrev:"Sex",semana:"meio de semana"},
      {nome:"Sabado", abrev:"Sab",semana:"fim semana"},
      {nome:"Domingo", abrev:"Dom",semana:"fim semana"},
    ];

    var todos = [
      {id:1,afazer:'Lavar o carro', dia : "Segunda"},
      {id:2,afazer:'Tozar cachorro', dia : "Terça"}
    ];


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/todos', function(req, res) {
  res.json(todos);
});

app.get('/todos/:id', function(req, res) {
  todos.forEach(function (todo) {
  	if (todo.id == req.params.id) {
  		res.json(todo);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/todos', function(req, res) {
  todos.push(req.body);
  res.json(true);
});

app.get('/dias', function(req, res) {
  res.json(diasdasemana);
});

app.listen(process.env.PORT || 3412);
console.log('server listening on 3412');