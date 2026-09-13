// Datos al azar con un switch, cada caso un dato. Al tocar un botón toma un número al azar que va a coincidir con un dato

let botonDatosRandom = document.querySelector("#botonDato");
let textoDato = document.querySelector("#datoCurioso")

botonDatosRandom.addEventListener("click", function() {

    let azar = Math.floor((Math.random() * 10 ) + 1);

    switch (azar) {

        case 1:
            textoDato.innerHTML = "Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos."
            break
        
        case 2:
            textoDato.innerHTML = "Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real."
            break

        case 3:
            textoDato.innerHTML = "En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet."
            break
        
        case 4:
            textoDato.innerHTML = "Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz."
            break

        case 5:
            textoDato.innerHTML = "Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia."
            break

        case 6:
            textoDato.innerHTML = "Ha expuesto sus obras en más de 70 países alrededor del mundo."
            break
        
        case 7:
            textoDato.innerHTML = "Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico."
            break
        
        case 8:
            textoDato.innerHTML = "Sus instalaciones suelen involucrar la participación activa del público para activar la obra."
            break
        
        case 9:
            textoDato.innerHTML = "Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte."
            break
        
        case 10:
            textoDato.innerHTML = "Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia."
            break
    }

});