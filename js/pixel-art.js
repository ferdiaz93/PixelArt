$(document).ready(function(){

var nombreColores = [
  "White",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "Khaki",
  "Yellow",
  "Gold",
  "Orange",
  "DarkOrange",
  "OrangeRed",
  "Tomato",
  "Coral",
  "DarkSalmon",
  "LightSalmon",
  "LightCoral",
  "Salmon",
  "PaleVioletRed",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Maroon",
  "Brown",
  "Sienna",
  "SaddleBrown",
  "IndianRed",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "DarkKhaki",
  "DarkSeaGreen",
  "MediumAquaMarine",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "YellowGreen",
  "LawnGreen",
  "Chartreuse",
  "GreenYellow",
  "Lime",
  "SpringGreen",
  "LimeGreen",
  "LightGreen",
  "PaleGreen",
  "PaleTurquoise",
  "AquaMarine",
  "Cyan",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "DeepSkyBlue",
  "LightSeaGreen",
  "CadetBlue",
  "DarkCyan",
  "Teal",
  "Steelblue",
  "LightSteelBlue",
  "Honeydew",
  "LightCyan",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "RoyalBlue",
  "SlateBlue",
  "MediumSlateBlue",
  "DarkSlateBlue",
  "Indigo",
  "Purple",
  "DarkMagenta",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "DarkOrchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "MediumPurple",
  "Lavender",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "DarkSlateGray",
  "Black"
];

/// -------VARIABLES
  var $paleta = $("#paleta");
  var $grilla = $("#grilla-pixeles");
  var cantidadPixelesGrilla = 1750;
  var $indicadorColor= $('#indicador-de-color');
  var colorAPintar;
  var colorIndicado;

  /// --------- FUNCION QUE CREA LA PALETA DE COLORES
  function paletaColores() {
    nombreColores.forEach(function (valor) {
      $paleta.append(
        "<div class='color-paleta' style='background-color:" + valor + "'></div>"
      );
  });
}

  paletaColores();


/// -------FUNCION QUE CREA LAS GRILLAS DE LA HOJA
  function grillaPixeles() {
    for (var i = 0; i < cantidadPixelesGrilla; i++) {
      $grilla.append("<div class='pixelDeGrilla'></div>");
    }
  }

  grillaPixeles();


/// ------- EVENTO PARA SELECCIONAR UN COLOR
  $(".color-paleta").click(colorSeleccionado);

  function colorSeleccionado(e){
    var $backgroundColor = $(this).css('background-color');
    colorAPintar = $backgroundColor;
    $('#indicador-de-color').css('background-color', $backgroundColor);

  }

/// EVENTO PARA PINTAR EN LA GRILLA
  var $divPixelGrilla = $('#grilla-pixeles div');
  $($divPixelGrilla).mousedown(pintarPixel);

  function pintarPixel() {
    $(this).css("background-color", colorAPintar);
  }



// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
  var $colorPersonalizado = $("#color-personalizado");

  $colorPersonalizado.change(function () {
  // Se guarda el color de la rueda en colorActual
    var colorActual = $colorPersonalizado.val();
    $indicadorColor.css("background-color", colorActual);
    colorAPintar = colorActual;
  // Completar para que cambie el indicador-de-color al colorActual
  });


////// ---- EVENTOS PARA PINTAR
var presionado = false;

  $($divPixelGrilla).mousedown(function(){
    presionado = true;
  }
  )

  $($divPixelGrilla).mouseup(function(){
    presionado = false;

  }
  )

  $($divPixelGrilla).mouseover(function(e){
    if(presionado){
      var $colorElegido = $indicadorColor.css("background-color");
      $(e.target).css("background-color", $colorElegido);
  }
  }
  )



  ///////// FUNCION BORRAR GRILLAS
  function borrarTodo() {
    var $elemento = $(".pixelDeGrilla");
    $elemento.animate({"backgroundColor": "white"}, 1000);
  }

  function botonBorrar() {
    var $aprietaBoton = $("#borrar");
    $aprietaBoton.click(borrarTodo); 
    
  }
  botonBorrar();

  ////// FUNCION GUARDAR DIBUJO

  function guardarImagen(){
    $("#guardar").click(function(){
      guardarPixelArt();
    });
  }
  guardarImagen()

  

  $("#batman").click(function(){
    cargarSuperheroe(batman)
  
  });
  $("#wonder").click(function(){
    cargarSuperheroe(wonder)
  
  });
  $("#flash").click(function(){
    cargarSuperheroe(flash)
  
  });
  $("#invisible").click(function(){
    cargarSuperheroe(invisible)
  
  });

  

}); /// DOCUMENTE READY
