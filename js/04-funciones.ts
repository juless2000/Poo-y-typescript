
// FUNCION NORMAL EN JAVASCRIPT
/*
function getNumero(numero = 13){
	return "El numero es: " + numero;
};

console.log(getNumero(69))
*/

// FUNCION EN TYPESCRIPT
// Se puede definir el tipo del parametro y devuelve un string
function getNumero(numero:number = 13):string{
	return "El numero es: " + numero;
};

console.log(getNumero(69))