// Interface
// Contrato en la que definimos que propiedades y metodos obligatorios
// va a tener una clase.
// Se aplica a las interfaces que querramos
// Por ende la clase deberá cumplir ese contrato de la interfaz
interface CamisetaBase{
	setColor(color);
	getColor();
}

// DECORADOR
// Un patron de diseño q nos permite mediante unos metadatos que nosotros 
// definimos a una clase, hacer una copia de la misma clase, modificarla
// o que haga una cosa u otra en funcion de los parammetros que nosotros 
// le pasemos

// Adiciona una funcionalidad extra a cualquier clase y darles unas 
// caracteristicas diferentes cada que aplico el decorador
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo de: " + logo);
		}
	}
}

// CLASES
// Es un molde con el cual podemos crear infinidad de objetos con
// caracteristicas parecidas

// clase(molde del objeto -> que se llame igual que el fichero 
// export-> Permite el uso de la clase en cualquier otro archivo
@estampar('Nike football')
class Camiseta implements CamisetaBase{
	// propiedades (caracteristicas del objeto)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	// Metodos (funciones o acciones del objeto)
	// Constructor -> Sirve para darle un valor inicial a las propiedades
	// del objeto  
	// Pasar como parametro al constructor cuando los instanciamos
	// Nunca devueve un dato
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	/* Cumple el contrato de la interface, es más estricto */
	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color;
	}

}

// No da error porque los metodos de la interface existen
var camiseta = new Camiseta("asda","asda","asda","asda",54);

console.log(camiseta)
camiseta.estampacion();

// HERENCIA -> Una clase puede heredar todo lo que tiene una clase padre,
// es decir, sus propiedades, metodos, etc

// Clase hija -> Hereda de la clase padre Camiseta
class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha():boolean{
		return this.capucha;
	}
}

//Instanciamos un objeto -> contiene las propiedades de la clase Camiseta
var sudadera_nike = new Sudadera("Rojo", "Manga larga", "NIKE", "M", 95);
// Darle valor a capucha
sudadera_nike.setCapucha(true);
// El metodo heredado de la clase anterior tmb funciona con la clase heredada 
sudadera_nike.setColor("Gris");
console.log(sudadera_nike);


/*

// Creando objetos que tienen como molde la clase
// Instanciar una clase 
// Pasamos los parametros del constructor 
var camiseta = new Camiseta("rojo", "manga larga", "nike", "L", 16);
camiseta.setColor("Rojo");

console.log(camiseta)

camiseta.color = "Rojo";
camiseta.modelo = "Manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;


var playera = new Camiseta("rojo", "manga larga", "nike", "L", 16);
playera.setColor("Azul");

playera.color = "Azul";
playera.modelo = "Manga corta";
playera.marca = "Adidas";
playera.talla = "M";
playera.precio = 15;


console.log(camiseta.getColor(), playera)

*/