// Simular una clase en JS, usando JSON
var bicicleta = {
	color: "Rojo",
	modelo: " BMX",
	frenos: "De disco",
	velocidadMaxima: "60km",
	// Metodo de la clase
	cambiarColor: function(nuevo_color){
		// bicicleta.color = nuevo_color;
		// this -> hace referencia al objeto Json/clase
		this.color = nuevo_color;
		console.log(this)
	}
};

// Llamar la clase
bicicleta.cambiarColor("verde")
