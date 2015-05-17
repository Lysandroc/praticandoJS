var globalClientes = (function () {
	
	var todosClientes = [];
	
	var melhoresClientes =[];
	
	var listaTodosClientes = function() {
		return todosClientes;
	};
	
	var listaMelhoresClientes = function() {
		return melhoresClientes;
	};

	var adicionarCliente = function(item) {
		todosClientes.push(item);
	};

	var adicionarMelhorCliente = function(item) {
		melhoresClientes.push(item);
	};

	return { todosClientes: listaTodosClientes, 
			 melhoresClientes : listaMelhoresClientes, 
			 adicionar: adicionarCliente,
			 adicionarMelhor : adicionarMelhorCliente	
	};
})();

function printa(item) {
	console.log("todos os clientes: ");
	console.log(item.todosClientes());
	console.log("*******************");
	console.log("melhores clientes: ");
	console.log(item.melhoresClientes());
	console.log("*******************");
};

var gcliente = globalClientes;
printa(gcliente);

gcliente.adicionar({nome: "lysandro", sexo: "m"});
gcliente.adicionar({nome: "Joao Pedro", sexo: "m"});
gcliente.adicionar({nome: "Amanda", sexo: "f"});
gcliente.adicionar({nome: "Lysandra", sexo: "f"});
printa(gcliente);

gcliente.adicionarMelhor({nome: "lysandro", sexo: "m"});
gcliente.adicionarMelhor({nome: "Joao Pedro", sexo: "m"});	
printa(gcliente);

