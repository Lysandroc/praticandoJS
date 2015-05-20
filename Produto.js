'use strict';

var listaProduto = [];
var listaCategoria = [];

var Produto = function(nome, preco) {
	this.nome = nome;
	this.preco = preco;
	//this.setCategoria = function(variavel) {
	//	this.categoria = variavel;
	//};
};

var Categoria = function(descricao) {
	this.descricao = descricao;
};

//utilizando prototipagem
Produto.prototype.setCategoria = function(categoria) {
	this.categoria = categoria;
};

var AppTesteProduto = function() {
	var prod;
	var categ;

	this.printa = function() {

		console.log('\n\n******* lista de produtos ********');
		for(var obj in listaProduto) {
			console.log(listaProduto[obj]);	
		}
		console.log('******* fim da lista de produtos ********');


		console.log('\n\n******* lista de categorias ********');
		for(var obj in listaCategoria) {
			console.log(listaCategoria[obj]);	
		}
		console.log('******* fim da lista de categorias ********');

	};

	this.inicializa = function() {	
		
		prod = new Produto('chocolate',6.50);
		listaProduto.push(prod);
		
		categ = new Categoria('comida');
		listaCategoria.push(categ);
		prod.setCategoria(categ);

		prod = new Produto('detergente',2);
		listaProduto.push(prod);

		categ = new Categoria('limpeza');
		listaCategoria.push(categ);			
		prod.setCategoria(categ);
	};
};

var app = new AppTesteProduto();
app.inicializa();
app.printa();

