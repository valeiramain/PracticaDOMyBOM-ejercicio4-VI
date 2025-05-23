
function obtenerFechayHora() {
    // objeto que tendra fecha y hora
    const fecha = new Date()

    // obtiene el dia de la semana en texto
    const diaSemana = fecha.getDay()
    let diaLetras = ''
    switch (diaSemana) {
        case 0:
            diaLetras = 'Domingo'
            break;
        case 1:
            diaLetras = 'Lunes'
            break;
        case 2:
            diaLetras = 'Martes'
            break;
        case 3:
            diaLetras = 'Miércoles'
            break;
        case 4:
            diaLetras = 'Jueves'
            break;
        case 5:
            diaLetras = 'Viernes'
            break;
        case 6:
            diaLetras = 'Sábado'
            break;
        default:
            break;
    }

    // obtiene el mes
    const mes = fecha.getMonth()
    let mesLetras = ''
    switch (mes) {
        case 0:
            mesLetras = 'Enero'
            break;
        case 1:
            mesLetras = 'Febrero'
            break;
        case 2:
            mesLetras = 'Marzo'
            break;
        case 3:
            mesLetras = 'Abril'
            break;
        case 4:
            mesLetras = 'Mayo'
            break;
        case 5:
            mesLetras = 'Junio'
            break;
        case 6:
            mesLetras = 'Julio'
            break;
        case 7:
            mesLetras = 'Agosto'
            break;
        case 8:
            mesLetras = 'Septiembre'
            break;
        case 9:
            mesLetras = 'Octubre'
            break;
        case 10:
            mesLetras = 'Noviembre'
            break;
        case 11:
            mesLetras = 'Diciembre'
            break;

        default:
            break;
    }

    const textoFecha = document.querySelector('#textoFecha')
    const hora = document.querySelector('#hora')
    const segundos = fecha.getSeconds() < 10 ? '0' + fecha.getSeconds() : fecha.getSeconds();
    const minutos = fecha.getMinutes() < 10 ? '0' + fecha.getMinutes() : fecha.getMinutes();
    let horas = fecha.getHours() < 10 ? '0' + fecha.getHours() : fecha.getHours();

    const ampm = horas >= 12 ? 'PM' : 'AM';
      // Convertir a formato 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12; // Si es 0, convertir a 12

    hora.textContent = `${horas}:${minutos}:${segundos} ${ampm}`
    textoFecha.textContent = `${diaLetras} ${fecha.getDate()} de ${mesLetras} de ${fecha.getFullYear()}`
}


setInterval(obtenerFechayHora, 1000)

