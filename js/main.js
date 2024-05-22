function tiempoViaje(distancia, velocidad){
    let tiempoHoras = distancia / velocidad;
    let horas = Math.floor(tiempoHoras);
    let minutos = Math.round((tiempoHoras - horas) * 60);
    return { horas: horas, minutos: minutos };
}

alert('Bienvenido al simulador de tiempo de viaje!')

let distancia, velocidad, tiempo;

do{
    distancia = parseFloat(prompt('Ingrese la distancia a recorrer en Kilometros'))
}   while (isNaN(distancia) || distancia <= 0 );

do{
    velocidad = parseFloat(prompt('Ingrese la velocidad a la que desea viajar e kilómetros por hora')); 
}   while (isNaN(velocidad) || velocidad <= 0);

// Calcular tiempo para reccorer la distancia a la velocidad indicada
tiempo = tiempoViaje(distancia, velocidad);

alert('Para recorrer una distancia de '+ distancia + 'km a una velocidad constante de ' + velocidad + 'km por hora, se necesitará aproximadamente ' +tiempo.horas + 'horas y ' + tiempo.minutos + ' minutos.')