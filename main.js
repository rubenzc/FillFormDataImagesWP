//////////////////*FORM*////////////////////

var shellForm = jQuery("<form id='shellForm' action=''></form>");
var divForm = jQuery("<div id='divForm'></div>");

divForm.append('<label class="control-close" for="closeButton">X<div value="" id="closeButton"></label>');
divForm.append('<label class="control-legend" for="legendTitle">MODIFICA LOS CAMPOS<legend value="" id="legendTitle"></label>');
divForm.append('<label class="control-label" for="inputAlt">Alt/Descripción<input type="text" value="" id="inputAlt" placeholder="Modificar Alt"></label>');
divForm.append('<label class="control-label" for="inputTitle">Título<input type="text" id="inputTitle" value="" placeholder="Modificar Título"></label>');
divForm.append('<label class="control-label" for="inputCat">Categoría<input type="text" id="inputCat" value="" placeholder="Modificar Categoría"></label>');
divForm.append('<label class="control-button" for="buttonForm"><button id="buttonForm" type="button">MODIFICAR</button>');

jQuery(shellForm).append(divForm);
jQuery('body').append(shellForm);

//////////////////*STYLES*//////////////////

jQuery("#shellForm").css({
    'background': 'rgba(0, 0, 0, 0.78)',
    'position': 'fixed',
    'top': '0',
    'bottom': '0',
    'left': '0',
    'right': '0'

});

jQuery("#divForm").css({
    'background': '#fff',
    'padding': '3%',
    'margin': '15% auto 0',
    'width': '200px'
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
    
    //Submit & validation first field
    jQuery("#buttonForm").on('click', function(){

        var inputAlt = jQuery('#inputAlt').val();
        var inputTitle = jQuery('#inputTitle').val();
        var inputCat = jQuery('#inputCat').val();
        var close = false;

        jQuery('#the-list .column input').val(inputAlt) && jQuery('#the-list .column textarea').val(inputTitle) && jQuery('#the-list .column-6 textarea').val(inputCat);
        jQuery("#shellForm").remove();

/*       //Validate inputAlt field
        if (inputAlt == ""){
            alert("El campo Alt debe tener un descripción");
           
        }else{
            jQuery('#the-list .column input').val(inputAlt) && jQuery('#the-list .column textarea').val(inputTitle) && jQuery('#the-list .column-6 textarea').val(inputCat);
           
        }*/

    });

    jQuery(".control-close, #shellForm").click(function(){
        jQuery("#shellForm").remove();
    });

    jQuery("#divForm").click(function(){
        return false;
    });

});