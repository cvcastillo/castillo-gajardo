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
    figure: "media/trabajo-04-Ecoparque.jpg",
    alt: "Niños mostrando sus plantas en un parque",
    title: "Visitas guiadas Ecoparque Peñalolén",
    about: "Rediseño de las visitas guiadas a jardines infantiles en el ecoparque de Peñalolén, el proyecto incluyo la creación de actividades, juegos y canciones",
    integrantes: "Luciano Carprile, Fernando Gajardo, Rodrigo Guzmán y Florencia Vicuña"
}, {
    figure: "media/trabajo5_tumis.png",
    alt: "Contenedor de comida plegable",
    title: "Tumis",
    about: "Portador de colaciones hermético y plegable, que aporta en el aprendizaje de hábitos alimenticios de niños en edad pre escolar y escolar.",
    integrantes: "Carla Castillo, Fernando Gajardo, Rodrigo Guzmán, María Jesús Viñales"
}, {
    figure: "media/trabajo6_lagarra.png",
    alt: "Render de implemento para recoger juguetes",
    title: "La Garra",
    about: "Implemento ergonómico que ayuda a recoger juguetes pequeños del piso sin tener que agacharse.",
    integrantes: "Carla Castillo, Loreto Maturana, María Jesús Viñales, Shuting Zhong"
}, {
    figure: "media/trabajo-07-laTribu.jpg",
    alt: "Componentes del juego de mesa",
    title: "La Tribu",
    about: "Juego de mesa que tiene como objetivo desarrollar habilidades necesarias para realizar una investigación, en donde se propone mejorar las capacidades de percibir, describir, seleccionar y analizar.",
    integrantes: "Luciano Caprile, Fernando Gajardo y Rodrigo Guzmán"
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
