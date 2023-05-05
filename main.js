var nombre = prompt ("Escriba su nombre");

alert ("Bienvenido a la Nouba " + nombre);

var email = prompt ("Escriba su email para enviar resumen de compra");

alert ("Te enviaremos la factura a " + email);


const items = [
  { id: 1, nombre: "Cuaderno", precio: 1400 },
  { id: 2, nombre: "Lápiz", precio: 100 },
  { id: 3, nombre: "Goma de borrar", precio: 80 },
  { id: 4, nombre: "Regla 30cm", precio: 250 },
  { id: 5, nombre: "Libro", precio: 5600 },
];

function selectItem() {

  const options = items.map(item => item.nombre);

  const selectedItemNombre = prompt(`Seleccione un artículo:\n\n${options.join('\n')}`);

  return items.find(item => item.nombre === selectedItemNombre);
}


const selectedItems = [];

while (true) {
  
  const total = selectedItems.reduce((acc, item) => acc + item.precio, 0);
  alert(`Total acumulado: $${total.toFixed(2)}`);

  
  const continueAdding = confirm("¿Desea agregar más artículos a su compra?");
  if (!continueAdding) {
    
    break;
  }


  const selectedItem = selectItem();
  if (selectedItem) {
    selectedItems.push(selectedItem);
  } else {
  alert("El artículo que ha seleccionado no existe en nuestro inventario.");
  }
}


if (selectedItems.length > 0) {
  const itemList = selectedItems.map(item => `${item.nombre} ($${item.precio.toFixed(2)})`).join('\n');
  const total = selectedItems.reduce((acc, item) => acc + item.precio, 0);
  alert(`Ha seleccionado los siguientes artículos:\n\n${itemList}\n\nTotal de la compra: $${total.toFixed(2)}`);
} else {

  alert("La compra ha sido cancelada.");
}