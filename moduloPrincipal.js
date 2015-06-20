'use strict';
var modCliente = require('./moduloCliente.js');

var adicionaObjetosCerto = function() {
	//Insere um objeto 
	modCliente.insereCliente(
		{
			nome: 'Isaac',
			idade: 18, 
			salario: 1
		}
	);
};

var adicionaObjetosErro = function() {
	//Nao é um objeto, porem é um array 
	modCliente.insereCliente(
		[{
			nome: 'Joao',
			idade: 18, 
			salario: 1
		},
		{
			nome: 'Pedro',
			idade: 18, 
			salario: 1
		}]
	);
	
	//Nao é um objeto
	modCliente.insereCliente(2);
};


try {
	console.log(modCliente.listaClientes());
	
	adicionaObjetosCerto();
	console.log(modCliente.listaClientes());
	
	adicionaObjetosErro();
	console.log(modCliente.listaClientes());
} catch(erro) {
	console.log(erro);
}




