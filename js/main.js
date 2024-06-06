let historial = [];


function tiempoViaje(distancia, velocidad){
    let tiempoHoras = distancia / velocidad;
    let horas = Math.floor(tiempoHoras);
    let minutos = Math.round((tiempoHoras - horas) * 60);
    return { horas: horas, minutos: minutos };
}

// alert('Bienvenido al simulador de tiempo de viaje!')

function agregarResultado(distancia, velocidad, tiempo) {
    const resultadoDiv = document.getElementById('resultado')
    const simularDiv = document.createElement('div');
    simularDiv.className = 'simular'
    simularDiv.textContent = `Para recorrer una distancia de 
    ${distancia} kilómetros a una velocidad de ${velocidad} kilómetros por hora, el tren necesitará aproximadamente ${tiempo.horas} horas
    y ${tiempo.minutos} minutos`

    resultadoDiv.appendChild(simularDiv)
}


function agregarHistorial(distancia, velocidad, tiempo) {
    historial.push({ distancia, velocidad, tiempo});
    const historialDiv = document.getElementById('historial')
    const historialItem = document.createElement('div');
    historialItem.className = 'historial-item';
    historialItem.textContent = `Distancia: ${distancia} km, Velocidad: ${velocidad} km/h, Tiempo: ${tiempo.horas} horas y ${tiempo.minutos} minutos.`;
    historialDiv.appendChild(historialItem)


}



function inicioSimulacion(){
    let distancia = parseFloat(prompt('Ingrese la distancia entre las estaciones en kilómetros'))
    while (isNaN(distancia) || distancia <= 0 ){
        distancia = parseFloat(prompt('Ingrese una distancia válidad en kilómetros'))
    }

    let velocidad = parseFloat(prompt('Ingrese la velocidad del tren en kilómetros por hora')); 
    while (isNaN(velocidad) || velocidad <= 0){
        velocidad = parseFloat(prompt('Ingrese una velocidad válida en kilometros por hora'))
    }

    let tiempo = tiempoViaje(distancia, velocidad);

    agregarResultado(distancia, velocidad, tiempo);
    agregarHistorial(distancia, velocidad, tiempo)
}

document.getElementById('simulacion').addEventListener('click', inicioSimulacion)







// alert('Para recorrer una distancia de '+ distancia + 'km a una velocidad constante de ' + velocidad + 'km por hora, se necesitará aproximadamente ' +tiempo.horas + 'horas y ' + tiempo.minutos + ' minutos.')