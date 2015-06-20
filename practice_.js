function foo() { 
	console.log(tmp); // undefined 
	if (!tmp) {
		var tmp = 3;
		console.log(tmp); 
	}
}

foo();
