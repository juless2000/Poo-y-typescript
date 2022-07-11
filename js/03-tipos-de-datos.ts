// Se debe cortar la ejecucion de la terminal y volver a lanzarlo 
// para que reconozca los ficheros nuevos


// TIPOS DE DATOS EN TYPESCRIPT

// string
let cadena: string = "Jules" 

// Marca error ya que es un number dentro de una cadena
// cadena = 64

// number
let numero: number = 69

// error porque NO es un string el numero
//numero = "F"

// boleano
let verdadero_falso: boolean = true;

// Error ya que es un boolenao(true o false)
// verdadero_falso = 93

// any -> permite meter cualquier valor
var cualquiera: any = "hola"; 

// No da error porque ANY acepta cualquier tipo de dato 
cualquiera = 39

// ARRAYS con tipado fuerte, string,number, solo se puede
// meter valores que sean igual al asignado   
var lenguajes: Array<string> = ["PHP", "HTML", "CSS"];

// error ya que se asignó que el array aceptaria unicamente valores
// de tipo string
// lenguajes: Array<string> = ["PHP", "HTML", "CSS", 46];

// Otra manera de crear array, tienen la misma funcionalidad
let years: number[] = [12,14,19,57]; 


// Multiples tipos de datos asignado a una variable
// Permite que tenga dos tipos de datos
// let edad: string | number = "Dos";

// edad = 35;


//  Tipos de datos personalizados

// crear tipo de datos que contengan tipo string o number
type letrasonumeros = string | number;
// Le asignamos el tipo de dato creado a la variable 
let edad: letrasonumeros = "Dos";


// LET vs VAR en TYPESCRIPT

// Var -> redifinir un valor a nivel global
// let -> redefinir un valor a nivel de bloque 

var numero1 = 10;
var numero2 = 12; 

if(numero1 == 10){
	let numero1 = 44;
	var numero2 = 55;

	console.log(numero1, numero2) // 44,55 -> dentro del if
}

console.log(numero1, numero2) // 10, 55 -> fuera del if



console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, edad); 
	