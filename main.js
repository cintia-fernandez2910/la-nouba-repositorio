var nombre = prompt ("Escriba su nombre");

alert ("Bienvenido a la Nouba " + nombre);

var agregar = prompt ("Agregue sus productos aqui")
var continuar = true;
while (continuar) {
  var respuesta = prompt("¿Quieres continuar? Marque no solo cuando haya terminado)");
  if (respuesta.toLowerCase() === "no") {
    continuar = false;
  }
}
alert ("su lista ya esta cargada en el carrito")
var objetos = prompt ("Cuantos objetos agrego al carrito")

if (objetos >= 6 ) {
    alert("accede al precio mayorista");
}

else if (objetos <= 5 && objetos > 4) {
    alert("te regalamos el envio a domicilio");
}
