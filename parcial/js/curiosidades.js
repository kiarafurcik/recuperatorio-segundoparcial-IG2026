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

// Ejercicio luces móviles de JS - primer formulario

let obras = document.querySelector("#obrasCantidad");
let enviar = document.querySelector("#botonEnviar");

let consumoKwh = document.querySelector("#consumo");
let costo = document.querySelector("#costoKwh");


let datos = document.querySelector("#datosObras");

let botonEnviarObra = document.querySelector("#enviarObra");

// Declaro lo que voy a usar para calcular al final
let botonCalcular = document.querySelector("#calcular");
let aparecerResultados = document.querySelector("#resultados");
let botonReiniciar = document.querySelector("#reinicio");

botonEnviarObra.disabled =  true
botonReiniciar.disabled = false;


botonReiniciar.addEventListener("click", function() {

    location.reload();

});

enviar.addEventListener("click", function(e) {

    e.preventDefault();

    let cantidad = Number(obras.value);


    if (cantidad <= 0) {
        alert("El valor ingresado debe ser mayor a 0")
        return;

    } else if (Number(consumoKwh.value) <= 0) {
        alert("Debe ingresar un número mayor a 0");
        return;

    } else if (Number(costo.value) <= 0) {
        alert("Debe ingresar un valor por kWh mayor a 0");
        return;

    } else {

    botonEnviarObra.disabled = false;

    obras.disabled = true;
    enviar.disabled = true;
    consumoKwh.disabled = true;
    costo.disabled = true
    }
});

//Segundo formulario

let obrasUsuario = [];

botonEnviarObra.addEventListener("click", function() { 

    let nombreValor = document.querySelector("#nombreObra").value;
    let lucesValor = Number(document.querySelector("#lucesCantidad").value);
    let horasValor = Number(document.querySelector("#lucesHoras").value);

    if (nombreValor === "") {
        alert("Ingresar nombre de la obra");

    } else if (lucesValor <= 0) {
        alert("Ingresar cantidad de luces mayor a 0");

    } else if (horasValor <= 0 || horasValor > 24) {
        alert("Ingresar un valor entre 1 y 24")
    } else {

        obrasUsuario.push({
        nombre : nombreValor,
        luces : lucesValor,
        horas : horasValor,

    });
    }

    document.querySelector("#nombreObra").value = "";
    document.querySelector("#lucesCantidad").value = "";
    document.querySelector("#lucesHoras").value = ""; //Van afuera del if para que al poner los datos de la tercera obra, no queden viendose despues de enviarlos.


    if (obrasUsuario.length < Number(obras.value)) {

    } else {
        botonEnviarObra.disabled = true;
        botonCalcular.disabled = false;

        let calcularConsumo = Number(consumoKwh.value);
        let totalConsumo = 0;

        // para recorrer las obras:
        
        for (let i = 0; i < obrasUsuario.length; i++) {
            
            let consumoPorObra = obrasUsuario[i].luces * obrasUsuario[i].horas * calcularConsumo;

            totalConsumo = totalConsumo + consumoPorObra; // Acá esta el consumo total de todas las obras
        }

         let promedio = totalConsumo / obrasUsuario.length; //Acá está el promedio por obra

        // Para calcular la mayor obra

        let obraMasHoras = 0

        for (let i = 0; i < obrasUsuario.length; i++) {

            if (obrasUsuario[i].horas > obrasUsuario[obraMasHoras].horas) {

                obraMasHoras = i
            }

        }

        let nombreMayor = obrasUsuario[obraMasHoras].nombre; //Acá está la mayor obra y debajo cuanto consume
        let MasConsumo = obrasUsuario[obraMasHoras].luces * obrasUsuario[obraMasHoras].horas * calcularConsumo;
        let costoDiario = MasConsumo * Number(costo.value); //Acá el costo diario pedido

        // Ahora la ultima parte, el porcentaje de obras con mas de 20 luces:

        let mayorA20 = 0

        for (let i = 0; i < obrasUsuario.length; i++) {

            if (obrasUsuario[i].luces > 20) {

                mayorA20 = mayorA20 + 1;

                //Dice cuantas obras tienen mayor a 20 luces en cantidad
            }
        }

        let porcentaje = mayorA20 * 100 / obrasUsuario.length; // Cálculo en porcentaje

        // boton para los resultados

        botonCalcular.addEventListener("click", function() {

            aparecerResultados.innerHTML = `

            <h2>Resultados</h2>

            <p>Consumo diario total: ${totalConsumo} kWh</p>
            <p>Consumo diario promedio por obra: ${promedio} kWh</p>
            <p>Obra con mayor tiempo de funcionamiento: ${nombreMayor}</p>
            <p>Costo diario de esa obra: $${costoDiario}</p>
            <p>Porcentaje de obras que utilizan mas de 20 luces: ${porcentaje}%</p>

            `;

            botonReiniciar.disabled = false

        });

    }
});
