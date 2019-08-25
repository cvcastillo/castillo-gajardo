var trabajos = [{
    figure: "media/trabajo-01-casaPerro.jpg",
    alt: "Render de casa de perro",
    title: "CAD y CAM Casa de perro",
    about: "Casa para perro diseñada para la manofactura asistida por computador, especificamente para la maquina CNC router. ",
    integrantes: "Carla Castillo, Fernando Gajardo y Florencia Vicuña"
}, {
    figure: "media/trabajo2_nauca.jpg",
    alt: "Urinario de pvc para mujeres en situación de emergencia",
    title: "Nauca",
    about: "Nauca, es un urinario público para mujeres, el cual facilita la necesidad de orinar en contextos de emergencia, solucionando los principales problemas femeninos en éstas situaciones, tales como la falta de privacidad e higiene.",
    integrantes: "Carla Castillo, Chriss Ramírez, Florencia Valdés, Shuting Zhong"
}, {
    figure: "media/trabajo3_micelio.png",
    alt: "Logotipo del proyecto dentro de la página web",
    title: "Micelio",
    about: "Sistema dedicado a proporcionar y compartir conocimientos del rubro agricultor",
    integrantes: "Carla Castillo, Fernando Gajardo, Monserrat Pulgar, Florencia Vicuña, María Jesús Viñales"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "Título de cuarto trabajo",
    about: "Texto simulado de descripción de cuarto trabajo",
    integrantes: "Carla Castillo y Fernando Gajardo"
}, {
    figure: "media/trabajo5_tumis.png",
    alt: "Contenedor de comida plegable",
    title: "Tumis",
    about: "Portador de colaciones hermético y plegable, que aporta en el aprendizaje de hábitos alimenticios de niños en edad pre escolar y escolar.",
    integrantes: "Carla Castillo, Fernando Gajardo, Rodrigo Guzmán, María Jesús Viñales"
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
    var cuatro = '<p class="itemIntegrantes">Autores: ' + trabajos[i].integrantes + '</p>';
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
