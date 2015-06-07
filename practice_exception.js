var Pessoa = function(nome) {
    this.nome = nome;
}

var adicionaPessoa = function(nome) {
	if (typeof nome !== 'string' || nome.trim() === '') {
		throw new Error('O tipo nome é inválido ou está vazio! nome: " '+ nome + ' " do tipo: '+ typeof nome);
	}
	return new Pessoa(nome);
}

var adicionaVariasPessoas = function(arrayNomes) {
	var listaPessoas = [];
	
	arrayNomes.forEach(function(nome) {
		try {
			var pessoa = adicionaPessoa(nome);
			listaPessoas.push(pessoa);
		} catch (excercao) {
			console.log(excercao);
		}
	}); 
	
	return listaPessoas;	
} 


// O aplicativo deve lancar uma excercao caso a informacoes passadas nao sejam válidas

adicionaPessoa('   ');
adicionaPessoa(123);
adicionaPessoa('nome teste 01');

console.log(adicionaVariasPessoas(['nome teste 01', 'nome teste 02', 123, '']));