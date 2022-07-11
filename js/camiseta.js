var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// DECORADOR
// Un patron de diseño q nos permite mediante unos metadatos que nosotros 
// definimos a una clase, hacer una copia de la misma clase, modificarla
// o que haga una cosa u otra en funcion de los parammetros que nosotros 
// le pasemos
// Adiciona una funcionalidad extra a cualquier clase y darles unas 
// caracteristicas diferentes cada que aplico el decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// CLASES
// Es un molde con el cual podemos crear infinidad de objetos con
// caracteristicas parecidas
// clase(molde del objeto -> que se llame igual que el fichero 
// export-> Permite el uso de la clase en cualquier otro archivo
var Camiseta = /** @class */ (function () {
    // Metodos (funciones o acciones del objeto)
    // Constructor -> Sirve para darle un valor inicial a las propiedades
    // del objeto  
    // Pasar como parametro al constructor cuando los instanciamos
    // Nunca devueve un dato
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    /* Cumple el contrato de la interface, es más estricto */
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Nike football')
    ], Camiseta);
    return Camiseta;
}());
// No da error porque los metodos de la interface existen
var camiseta = new Camiseta("asda", "asda", "asda", "asda", 54);
console.log(camiseta);
camiseta.estampacion();
// HERENCIA -> Una clase puede heredar todo lo que tiene una clase padre,
// es decir, sus propiedades, metodos, etc
// Clase hija -> Hereda de la clase padre Camiseta
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
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
