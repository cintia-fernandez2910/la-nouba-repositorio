function saludar (){
    console.log ('bienvenido');
    alert ("Bienvenido a la nouba");;
}
saludar();

const agregar = function() {
    prompt ("Agregue su producto aqui");
    alert ("Bien su producto ya esta guardado")
}
agregar();

const email = (email) => prompt ("Escriba su mail para recibir novedades");

email("email");

let numero = parseInt (prompt("Ingrese un numero"));
for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    alert(numero + "x"+ i + " = " + resultado);
}