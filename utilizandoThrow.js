var Pessoa = function(nome) {
	this.nome = nome;
};

var listaObj = [];

var adicionarUsuario = function(texto) {
	
	if (!texto) throw 'Houve algum problema ao receber a informacao!';
	if (!(typeof texto === 'string')) throw 'Tipo inválido!'
	
	listaObj.push(new Pessoa(texto));
};


try { 
    adicionarUsuario();
    console.log(listaObj);	
} catch (e) {
	console.log('Mensagem' + e);
}

try { 
    adicionarUsuario(10);
    console.log(listaObj);	
} catch (e) {
	console.log('Mensagem' + e);
}

try {
    adicionarUsuario('teste01');
	adicionarUsuario('teste02');
	adicionarUsuario('teste03');
	adicionarUsuario('teste04');
	adicionarUsuario('teste05');
	adicionarUsuario('teste06');
	console.log(listaObj);	
} catch (e) {
	console.log('Mensagem de erro: ' + e);
}
