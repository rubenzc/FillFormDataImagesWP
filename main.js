$().ready(function(){
    $("input[id=buttonForm]").click(function(){
        alert('Evento click');
    });
});



var shellForm = $("<form id='shellForm'></form>");
var divForm = $("<div id='divForm'></div>")

divForm.append('<label class="control-label" for="inputAlt">Alt<input type="text" value="" id="inputAlt" placeholder="Insert Alt"></label>');
divForm.append('<label class="control-label" for="inputTitle">Title<input type="text" id="inputTitle" value="" placeholder="Insert Title"></label>');
divForm.append('<label class="control-label" for="inputCat">Categorie<input type="text" id="inputCat" value="" placeholder="Insert Cetegorie"></label>');
divForm.append('<label class="control-label" for="buttonForm"><input type="button" id="buttonForm" value="SUBMIT"></label>');

$(shellForm).append(divForm);
$('body').append(shellForm);

/*Styles*/

$("#shellForm").css({
    'background': 'rgba(96, 125, 139, 0.5)',
    'position': 'fixed',
    'top': '0',
    'bottom': '0',
    'left': '0',
    'right': '0'

});

$("#divForm").css({
    'margin': '15% auto 0',
    'width': '200px'
});

$("#inputAlt").css({
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

$("#inputTitle").css({
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

$("#inputCat").css ({
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

$("#buttonForm").css ({
    'border': '1px solid !important',
    'border-radius': '30px',
    'background': '#00cc66',
    'color': '#fff',
    'display': 'block',
    'font-size': '12px',
    'height': '35px',
    'text-align': 'center',
    'text-transform': 'uppercase',
    'width': '204px'
});

$(".control-label").css ({
    'display': 'inline-block',
    'margin-bottom': '5px',
    'font-weight': '700'
});