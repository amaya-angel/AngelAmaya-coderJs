/* PRE-ENTREGA 1
0. detectarCuandoSeApretaElBoton():
1. obtenerNombreCiudadOrigen(): nombreCiudadOrigen
2. validarOrigen(ciudadesDisponiblesOrigen, ciudadOrigen): si es valida o no
3. obtenerNombreCiudadDestino(): nombreCiudadDestino
4. validarDestino(ciudadesDisponiblesDestino, ciudadDestino): si es valida o no
5. calcularPrecioViaje(ciudadOrigen, ciudadDestino): precioViaje
6. mostrarPrecio(precioViaje):
*/

/* PRE-ENTREGA 2
1. estructura html del proyecto 
2. variables de js necesarias
3. funciones esenciales del proceso a simular
4. objetos de js
5. arrays
6. metodos de busqueda y filtrado sobre el array
*/




const ciudadesDisponiblesOrigen = ["tandil", "miramar", "necochea"];
const ciudadesDisponiblesDestino = ["cordoba", "puerto iguazu", "el calafate"];


// Definición de objetos para info sobre las ciudades
const ciudadCordoba = {
    nombre: "Córdoba",
    descripcion: "Una ciudad en el centro de Argentina conocida por su historia y cultura."
};

const ciudadPuertoIguazu = {
    nombre: "puerto iguazu",
    descripcion: "Una ciudad en el noreste de Argentina donde se encuentran las famosas cataratas del iguazu."
};

const ciudadElCalafate = {
    nombre: "El Calafate",
    descripcion: "Una ciudad en la Patagonia argentina famosa por su belleza natural y glaciares."
};

// esta funcion es para mostrar al usuario info sobre el destino
function mostrarInformacionCiudad(ciudad) {
    alert(`Nombre: ${ciudad.nombre}, Descripción: ${ciudad.descripcion}`);
}

//acá estoy ejecutando está funcion
detectarCuandoSeApretaElBoton()

function detectarCuandoSeApretaElBoton(){
    let botonInicioCotizacion = document.getElementById("boton-inicio-cotizacion")
    botonInicioCotizacion.addEventListener("click",cotizarViaje)
}

function cotizarViaje(){
    console.log("estoy cotizando un viaje")
    let ciudadOrigen = obtenerNombreCiudadOrigen()
    let ciudadDestino = obtenerNombreCiudadDestino()
    let precioDeViaje = calcularPrecioViaje(ciudadOrigen, ciudadDestino)
    mostrarPrecio(precioDeViaje)
}


function obtenerNombreCiudadOrigen(){
    let origen = prompt("ingrese ciudad Origen")
    let origenValidado = validarOrigen(origen)

    while(origenValidado == false){
        origen = prompt("la ciudad es invalida, ingrese ciudad Origen nuevamente")
        origenValidado = validarOrigen(origen)
    }
    return origen
}

function validarOrigen(ciudadOrigen) {
    const origenValidado = ciudadesDisponiblesOrigen.includes(ciudadOrigen.toLowerCase());
    return origenValidado;
}

function obtenerNombreCiudadDestino(){
    let destino = prompt("ingrese ciudad Destino")
    let destinoValidado = validarDestino(destino)

    while(destinoValidado == false){
        destino = prompt("la ciudad es invalida, ingrese ciudad Origen nuevamente")
        destinoValidado = validarDestino(destino)
    }

    return destino
}

function validarDestino(ciudadDestino) {
    const destinoValidado = ciudadesDisponiblesDestino.includes(ciudadDestino.toLowerCase());
    return destinoValidado;
}

function calcularPrecioViaje(ciudadOrigen, ciudadDestino) {
    let precioViaje


    let origen = ciudadOrigen.toLowerCase();
    let destino = ciudadDestino.toLowerCase();

    if (origen === "tandil") {
        if (destino === "cordoba") {
            precioViaje = 500;
        } else if (destino === "puerto iguazu") {
            precioViaje = 800;
        } else if (destino === "el calafate") {
            precioViaje = 1000;
        } else {
            precioViaje = "Ruta no encontrada o no disponible";
        }
    } else if (origen === "miramar") {
        if (destino === "cordoba") {
            precioViaje = 600;
        } else if (destino === "puerto iguazu") {
            precioViaje = 900;
        } else if (destino === "el calafate") {
            precioViaje = 1100;
        } else {
            precioViaje = "Ruta no encontrada o no disponible";
        }
    } else if (origen === "necochea") {
        if (destino === "cordoba") {
            precioViaje = 550;
        } else if (destino === "puerto iguazu") {
            precioViaje = 850;
        } else if (destino === "el calafate") {
            precioViaje = 1050;
        } else {
            precioViaje = "Ruta no encontrada o no disponible";
        }
    } else {
        precioViaje = "Ciudad de origen no válida";
    }

    return precioViaje;
}


function mostrarPrecio(precioViaje){
    alert(precioViaje)
}