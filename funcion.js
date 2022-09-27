function suma(valor1,valor2,valor3,valor4,valor5){
    let sumaproductos = (valor1 + valor2 + valor3 + valor4 + valor5);
    console.log(sumaproductos);
    alert("la suma de los valores es: " + sumaproductos);
}

const valor1prompt = prompt("ingrese el valor del producto 1");
const valor2prompt = prompt("ingrese el valor del producto 2");
const valor3prompt = prompt("ingrese el valor del producto 3");
const valor4prompt = prompt("ingrese el valor del producto 4");
const valor5prompt = prompt("ingrese el valor del producto 5");


suma(Number(valor1prompt),Number(valor2prompt),Number(valor3prompt),Number(valor4prompt),Number(valor5prompt));

