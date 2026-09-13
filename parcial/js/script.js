// Galeria de imagenes

let obras = [
    {
        nombre : "Unfinished Arch",
        año : 2026,
        imagen : "img/galeriauno.jpg",
    },
    {
        nombre : "Black Hole",
        año : 2026,
        imagen : "img/galeriados.jpg"
    },
    {
        nombre : "Undercurrents",
        año : 2026,
        imagen : "img/galeriatres.jpg",
    },
    {
        nombre : "Homage to Felguérez",
        año : 2026,
        imagen : "img/galeriacuatro.jpg",
    },
    {
        nombre : "Pulse Garden",
        año : 2026,
        imagen : "img/galeriacinco.jpg",
    },
    {
        nombre : "Spiral Reflector",
        año : 2026,
        imagen : "img/galeriaseis.jpg",
    },
    {
        nombre : "Resurgent Streams",
        año : 2026,
        imagen : "img/galeriasiete.jpg",
    },
    {
        nombre : "Collider Beacon",
        año : 2026,
        imagen : "img/galeriaocho.jpg",
    },
    {
        nombre : "Voice Path",
        año : 2026,
        imagen : "img/galerianueve.jpg"
    },
];

const galeria = document.querySelector("#galeriaArte");

for (let i = 0; i < obras.length; i++) {

    let presentacion = '<br><img src="'+ obras[i].imagen + '" id= "obraTamaño' + i +'" alt="'+ obras[i].nombre + '">'
    presentacion += '<div><p>' + obras[i].nombre + '<br>';
    presentacion += obras[i].año + '</p></div>'

    galeria.innerHTML += presentacion;
};

// Botón para cambiar el diseño

let botonTamaño = document.querySelector("#personalizar");

    botonTamaño.addEventListener("click", function() {

    for (let i = 0; i < obras.length; i++) {

        let fotos = document.querySelector("#obraTamaño" + i );
        fotos.style.width = "50%";
    }
});

// Datos al azar

