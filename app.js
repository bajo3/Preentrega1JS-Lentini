// Definimos una función para calcular la cuota mensual del préstamo
function calcularCuotaMensual(prestamo, tasaInteres, plazo) {
    let tasaMensual = tasaInteres / 12;
    let cuotaMensual = (prestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
    return cuotaMensual;
}

// Pedimos al usuario que ingrese los datos del préstamo


let prestamo = parseFloat(prompt("Ingrese el monto del préstamo: "));
let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (%): "));
let plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses: "));
    
function pedirDatos() {
    if(isNaN(prestamo, tasaInteres, plazo)){
      alert('error, ingrese nuevamente');
    pedirEdad()
    } 
    
    }
    
    pedirDatos()

// Calculamos la cuota mensual utilizando la función previamente definida
let cuotaMensual = calcularCuotaMensual(prestamo, tasaInteres / 100, plazo);

// Imprimimos la cuota mensual resultante
alert("La cuota mensual es de: " + cuotaMensual.toFixed(2));


while (true) {
    // Pedimos al usuario que ingrese una opción
    const opcion = parseInt(prompt("¿Desea calcular una nueva cuota mensual? 1 si 2 no: "));

    // Si el usuario ingresa "2", salimos del ciclo
    if (opcion === 2 ) {
        alert("¡Gracias por utilizar nuestro simulador de créditos!");
        break;
    }

    // Si el usuario ingresa "1", pedimos nuevamente los datos del préstamo
    else if (opcion === 1) {
        prestamo = parseFloat(prompt("Ingrese el monto del préstamo: "));
        tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (%): "));
        plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses: "));
        cuotaMensual = calcularCuotaMensual(prestamo, tasaInteres / 100, plazo);
        alert("La cuota mensual es de: " + cuotaMensual.toFixed(2));
    }

    // Si el usuario ingresa cualquier otra opción, le pedimos que ingrese una opción válida
    else {
        alert("Ingrese una opción válida (1/2)");
    }

  
}
