/* 010217 */
var alt = document.createElement("Input");
alt.setAttribute("type","text");
alt.setAttribute("value","Alt");
document.body.appendChild(alt);

var title = document.createElement("Input");
title.setAttribute("type","text");
title.setAttribute("value","Title");
document.body.appendChild(title);

var etiqueta = document.createElement("Input");
etiqueta.setAttribute("type","text");
etiqueta.setAttribute("value","Etiqueta");
document.body.appendChild(etiqueta);


var button = document.createElement("BUTTON");
var buttonText = document.createTextNode("ACEPTAR");
button.appendChild(buttonText);
document.body.appendChild(button);