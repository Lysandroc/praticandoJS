'use strict';

//Quando for criar objeto colocar no singular
//Criar um construtor 
//Existe um convenção no javascript para quando foir criar um costrutor a primeira letra ser maiuscula 
var Cliente = function(){

	var todosClientes = [];
	var melhoresClientes = [];

	this.listaTodosClientes = function() {
		return todosClientes;
	};
	
	this.listaMelhoresClientes = function() {
		return melhoresClientes;
	};

	this.adicionarCliente = function(item) {
		todosClientes.push(item);
	};

	this.adicionarMelhorCliente = function(item) {
		melhoresClientes.push(item);
	};
};

var AppTeste = function(){
	// No javascript usa aspas simple para string
	function printa(item) {
		console.log('todos os clientes: ');
		console.log(item.listaTodosClientes());
		console.log('*******************');
		console.log('melhores clientes: ');
		console.log(item.listaMelhoresClientes());
		console.log('*******************');
	}

	this.init = function(){
		var gcliente = new Cliente();
		printa(gcliente);

		// No javascript usa aspas simple para string 
		gcliente.adicionarCliente({nome: 'lysandro', sexo: 'm'});
		gcliente.adicionarCliente({nome: 'Joao Pedro', sexo: 'm'});
		gcliente.adicionarCliente({nome: 'Amanda', sexo: 'f'});
		gcliente.adicionarCliente({nome: 'Lysandra', sexo: 'f'});
		printa(gcliente);

		gcliente.adicionarMelhorCliente({nome: 'lysandro', sexo: 'm'});
		gcliente.adicionarMelhorCliente({nome: 'Joao Pedro', sexo: 'm'});	
		printa(gcliente);	
	}

}

var app = new AppTeste();
app.init();
 


