// Se debe cortar la ejecucion de la terminal y volver a lanzarlo 
// para que reconozca los ficheros nuevos
// TIPOS DE DATOS EN TYPESCRIPT
// string
var cadena = "Jules";
// Marca error ya que es un number dentro de una cadena
// cadena = 64
// number
var numero = 69;
// error porque NO es un string el numero
//numero = "F"
// boleano
var verdadero_falso = true;
// Error ya que es un boolenao(true o false)
// verdadero_falso = 93
// any -> permite meter cualquier valor
var cualquiera = "hola";
// No da error porque ANY acepta cualquier tipo de dato 
cualquiera = 39;
// ARRAYS con tipado fuerte, string,number, solo se puede
// meter valores que sean igual al asignado   
var lenguajes = ["PHP", "HTML", "CSS"];
// error ya que se asignó que el array aceptaria unicamente valores
// de tipo string
// lenguajes: Array<string> = ["PHP", "HTML", "CSS", 46];
// Otra manera de crear array, tienen la misma funcionalidad
var years = [12, 14, 19, 57];
// Le asignamos el tipo de dato creado a la variable 
var edad = "Dos";
// LET vs VAR en TYPESCRIPT
// Var -> redifinir un valor a nivel global
// let -> redefinir un valor a nivel de bloque 
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2); // 44,55 -> dentro del if
}
console.log(numero1, numero2); // 10, 55 -> fuera del if
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, edad);
