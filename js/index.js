let historial = [];


function tiempoViaje(distancia, velocidad){
    let tiempoHoras = distancia / velocidad;
    let horas = Math.floor(tiempoHoras);
    let minutos = Math.round((tiempoHoras - horas) * 60);
    return { horas: horas, minutos: minutos };
}


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
    const distanciaInput = document.getElementById('distancia');
    const velocidadInput = document.getElementById('velocidad')
    
    let distancia = parseFloat(distanciaInput.value)
    if (isNaN(distancia) || distancia <= 0) {
        alert('Ingrese una distancia valida en kilometros')
        return;
    }

    let velocidad = parseFloat(velocidadInput.value)
    if (isNaN(velocidad) || velocidad <= 0) {
        alert('Ingrese una velocidad valida en kilometros por hora.')
        return;
    }

    let tiempo = tiempoViaje(distancia, velocidad);

    agregarResultado(distancia, velocidad, tiempo);
    agregarHistorial(distancia, velocidad, tiempo)
}

function restablecerHistorial() {
    historial = [];
    document.getElementById('historial').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

document.getElementById('simulacion').addEventListener('click', inicioSimulacion);
document.getElementById('reset').addEventListener('click', restablecerHistorial);
