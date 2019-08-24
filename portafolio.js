var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Descripción de la imagen",
    title: "Título de primer trabajo",
    about: "Texto simulado de descripción de primer trabajo",
    integrantes: "Carla Castillo y Fernando Gajardo"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo",
    integrantes: "Carla Castillo y Fernando Gajardo"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Descripción de la imagen",
    title: "Título de tercer trabajo",
    about: "Texto simulado de descripción de tercer trabajo",
    integrantes: "Carla Castillo y Fernando Gajardo"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "Título de cuarto trabajo",
    about: "Texto simulado de descripción de cuarto trabajo",
    integrantes: "Carla Castillo y Fernando Gajardo"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "Título de quinto trabajo",
    about: "Texto simulado de descripción de quinto trabajo",
    integrantes: "Carla Castillo y Fernando Gajardo"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "Título de sexto trabajo",
    about: "Texto simulado de descripción de sexto trabajo",
    integrantes: "Carla Castillo y Fernando Gajardo"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la 3e3e3imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo",
    integrantes: "Carla Castillo y Fernando Gajardo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p class="itemIntegrantes">Integrantes: ' + trabajos[i].integrantes + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro +'</div>')
});


function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  } 
