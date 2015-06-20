'use strict';
var lista = [];

(function() {
	lista = [
		{
			nome: 'Lysandro',
			idade: 21, 
			salario: 100
		},
		{
			nome: 'Amanda',
			idade: 20, 
			salario: 200 
		},
		{
			nome: 'Lucas',
			idade: 20, 
			salario: 300 
		}
	];
})(); //inicializa a lista de array

var getClientes = function() {
	return lista;
};

var setCliente = function(obj) {
	//Verifica se é um array ou nao é um objeto
	if(Array.isArray(obj) || typeof obj != 'object') {
		throw new Error('Informe novamente os dados do cliente!');
	} else {
		lista.push(obj);	
	}
};

module.exports.listaClientes = getClientes;
module.exports.insereCliente = setCliente;
