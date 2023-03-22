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

// Calculamos la cuota mensual utilizando la función previamente definida
let cuotaMensual = calcularCuotaMensual(prestamo, tasaInteres / 100, plazo);

function cuotaTotal(){
    if(isNaN (cuotaMensual)){
      alert('error, ingrese nuevamente');
    }else{
// Imprimimos la cuota mensual resultante
alert("La cuota mensual es de: " + cuotaMensual.toFixed(2));
    }
    
    }
    
    cuotaTotal()




while (true) {
    // Pedimos al usuario que ingrese una opción
    let opcion = prompt("¿Desea calcular una nueva cuota mensual? (s/n): ");

    // Si el usuario ingresa "n", salimos del ciclo
    if (opcion === "n") {
        alert("¡Gracias por utilizar nuestro simulador de créditos!");
        break;

    }

    // Si el usuario ingresa "s", pedimos nuevamente los datos del préstamo
    else if (opcion === "s") {
        prestamo = parseFloat(prompt("Ingrese el monto del préstamo: "));
        tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (%): "));
        plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses: "));
        cuotaMensual = calcularCuotaMensual(prestamo, tasaInteres / 100, plazo);
        cuotaTotal();
    }

    // Si el usuario ingresa cualquier otra opción, le pedimos que ingrese una opción válida
    else {
        alert("Ingrese una opción válida (s/n)");
    }
}
