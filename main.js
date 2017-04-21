//////////////////*FORM*////////////////////

var shellForm = jQuery("<div id='shellForm'></div>");
var masterForm = jQuery("<form id='masterForm' action=''></form>");

masterForm.append('<label class="control-close" for="closeButton">X<div value="" id="closeButton"></label>');
masterForm.append('<label class="control-legend" for="legendTitle">MODIFICA LOS CAMPOS<legend value="" id="legendTitle"></label>');

masterForm.append('<label class="control-label" for="inputAlt">Alt/Descripción<input type="text" value="" id="inputAlt" placeholder="Modificar Alt"></label>');
masterForm.append('<label class="control-check" for="checkAlt"><input type="checkbox" id="checkAlt" checked="checked" value="checkAlt">Vaciar Alt</label>');

masterForm.append('<label class="control-label" for="inputTitle">Título<input type="text" id="inputTitle" value="" placeholder="Modificar Título"></label>');
masterForm.append('<label class="control-check" for="checkTitle"><input type="checkbox" id="checkTitle" value="checkTitle">Vaciar Title</label>');

masterForm.append('<label class="control-label" for="inputCat">Categoría<input type="text" id="inputCat" value="" placeholder="Modificar Categoría"></label>');
masterForm.append('<label class="control-check" for="checkCategorie"><input type="checkbox" id="checkCategorie" value="checkCategorie">Vaciar Categoría</label>');
masterForm.append('<label class="control-button" for="buttonForm"><button id="buttonForm" type="button">MODIFICAR</button>');


jQuery('body').append(shellForm);
jQuery('body').append(masterForm);

//////////////////*STYLES*//////////////////

jQuery("#shellForm").css({
    'background': 'rgba(0, 0, 0, 0.78)',
    'position': 'fixed',
    'top': '0',
    'bottom': '0',
    'left': '0',
    'right': '0'

});

jQuery("#masterForm").css({
    'background': '#fff',
    'padding': '3%',
    'margin': '15% auto 0',
    'height': '350px',
    'width': '200px',
    'position': 'fixed',
    'top': '0',
    'bottom': '0',
    'left': '0',
    'right': '0'
});

jQuery("#legendTitle .control-label").css({
    'color': '#242b37',
    'font-size': '16px',
    'font-weight': 'bold',
    'margin-bottom': '20px',
    'text-align': 'center',  
    'width': '200px'
});

jQuery(".control-title").css ({
    'color': '#fff',
    'font-size': '15px',
    'font-weight': 'bold',
    'margin-bottom': '20px',
    'text-align': 'center',  
    'width': '200px'
});

jQuery("#inputAlt").css({
    'border': '1px solid #ddd',
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

jQuery("#inputTitle").css({
    'border': '1px solid #ddd',
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

jQuery("#inputCat").css ({
    'border': '1px solid #ddd',
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

jQuery("#buttonForm").css ({
    'border': '0',
    'background': '#f6b401',
    'color': '#fff',
    'display': 'block',
    'font-size': '15px',
    'font-weight': 'bold',
    'height': '35px',
    'text-align': 'center',
    'text-transform': 'uppercase',
    'width': '200px'
});

jQuery(".control-label").css ({
    'display': 'inline-block',
    'margin-bottom': '5px',
    'font-weight': '700',
    'color': '#242b37'
});

jQuery(".control-button").css ({
    'display': 'inline-block',
    'margin-bottom': '5px',
    'font-weight': '700',
    'color': '#242b37',
    'padding-top': '20px'
});

jQuery(".control-legend").css ({
    'color': '#242b37',
    'display': 'inline-block',
    'margin-bottom': '20px',
    'font-weight': '700'
});

jQuery(".control-close").css ({
    'color': '#242b37',
    'float': 'right',
    'padding-bottom': '30px'
});

//////////////////*FUNCTIONS*///////////////


jQuery().ready(function(){
    
    jQuery("#buttonForm").on('click', function(){

        var inputAlt = jQuery('#inputAlt').val();
        var inputTitle = jQuery('#inputTitle').val();
        var inputCat = jQuery('#inputCat').val();
        var close = false;

        //Check empty fields
        if( inputAlt != ""){
            jQuery('#the-list .column input').val(inputAlt);
        }
        if( inputTitle != ""){
            jQuery('#the-list .column-5 textarea').val(inputTitle)
        }
        if( inputCat != ""){
            jQuery('#the-list .column-6 textarea').val(inputCat);
        }

        //Check checkbox 
        var chAlt = jQuery('#checkAlt');
        var ckTitle = jQuery('#checkTitle');
        var ckCategorie = jQuery('#checkCategorie');
        var message = "";

        if(chAlt.is(':checked')){
            jQuery('#the-list .column input').val("");
            message += " Alt ";
        }
        if(ckTitle.is(':checked')){
            jQuery('#the-list .column-5 textarea').val("");
            message += " Title ";
        }
        if(ckCategorie.is(':checked')){
            jQuery('#the-list .column-6 textarea').val("");
            message += " Categorie ";
        }

        if(message != ""){
            alert("Se han vaciado los campos: " + message);
        }


        jQuery("#shellForm").remove(); 
        jQuery("#masterForm").remove(); 

/*       //Validate inputAlt field
        if (inputAlt == ""){
            alert("El campo Alt debe tener un descripción");
           
        }else{
            jQuery('#the-list .column input').val(inputAlt) && jQuery('#the-list .column textarea').val(inputTitle) && jQuery('#the-list .column-6 textarea').val(inputCat);
           
        }*/

    });

    jQuery(".control-close").click(function(){
        jQuery("#shellForm").remove();
        jQuery("#masterForm").remove();
    });

    

});