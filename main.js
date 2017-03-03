//////////////////*FORM*////////////////////

var shellForm = jQuery("<form id='shellForm' action=''></form>");
var divForm = jQuery("<div id='divForm'></div>");

divForm.append('<label class="control-close" for="closeButton">X<span value="" id="closeButton"></label>')
divForm.append('<label class="control-legend" for="legendTitle">FORM FIELDS<legend value="" id="legendTitle"></label>');
divForm.append('<label class="control-label" for="inputAlt">Alt<input type="text" value="" id="inputAlt" placeholder=" Insert Alt"></label>');
divForm.append('<label class="control-label" for="inputTitle">Title<input type="text" id="inputTitle" value="" placeholder=" Insert Title"></label>');
divForm.append('<label class="control-label" for="inputCat">Categorie<input type="text" id="inputCat" value="" placeholder=" Insert Cetegorie"></label>');
divForm.append('<label class="control-label" for="buttonForm"><input type="submit" id="buttonForm" value="SUBMIT"></label>');

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
    'border': '2px solid #00a3ec',
    'padding': '3%',
    'margin': '15% auto 0',
    'width': '200px'
});

jQuery("#legendTitle .control-label").css({
    'color': '#fff',
    'font-size': '16px',
    'font-weight': 'bold',
    'margin-bottom': '20px',
    'text-align': 'center',  
    'width': '200px'
});

jQuery(".control-title").css ({
    'color': '#fff',
    'font-size': '16px',
    'font-weight': 'bold',
    'margin-bottom': '20px',
    'text-align': 'center',  
    'width': '200px'
});

jQuery("#inputAlt").css({
    'border': '2px solid #00a3ec',
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

jQuery("#inputTitle").css({
    'border': '2px solid #00a3ec',
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

jQuery("#inputCat").css ({
    'border': '2px solid #00a3ec',
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

jQuery("#buttonForm").css ({
    'border': '0',
    'background': '#00a3ec',
    'color': '#fff',
    'display': 'block',
    'font-size': '14px',
    'font-weight': 'bold',
    'height': '35px',
    'text-align': 'center',
    'text-transform': 'uppercase',
    'width': '204px'
});

jQuery(".control-label").css ({
    'display': 'inline-block',
    'margin-bottom': '5px',
    'font-weight': '700',
    'color': '#fff'
});

jQuery(".control-legend").css ({
    'color': '#fff',
    'display': 'inline-block',
    'margin-bottom': '20px',
    'font-weight': '700',
});

//////////////////*FUNCTIONS*///////////////


jQuery().ready(function(){
    
    jQuery("form").submit(function(){

        var inputAlt = jQuery('#inputAlt').val();
        var inputTitle = jQuery('#inputTitle').val();
        var inputCat = jQuery('#inputCat').val();
        /*var formOk = false;*/

        //Validate inputAlt field
        if (inputAlt == ""){

            alert("El campo Alt debe tener un descripción");
            return false;

        }else{

            jQuery('#the-list .column input').val(inputAlt) && jQuery('#the-list .column textarea').val(inputTitle) && jQuery('#the-list .column-6 textarea').val(inputCat);
            return false;
        }

    });
});