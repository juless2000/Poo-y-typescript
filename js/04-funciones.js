// FUNCION NORMAL EN JAVASCRIPT
/*
function getNumero(numero = 13){
    return "El numero es: " + numero;
};

console.log(getNumero(69))
*/
// FUNCION EN TYPESCRIPT
// Se puede definir el tipo del parametro y devuelve un string
function getNumero(numero) {
    if (numero === void 0) { numero = 13; }
    return "El numero es: " + numero;
}
;
console.log(getNumero(69));
