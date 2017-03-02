//////////////////*FUNCTIONS*///////////////
$().ready(function(){
    $("form").submit(function(){
        alert('Evento click capturado!!');
    });
});

//////////////////*FORM*////////////////////

var shellForm = $("<form id='shellForm' action=''></form>");
var divForm = $("<div id='divForm'></div>");

divForm.append('<label class="control-legend" for="legendTitle">FORM FIELDS<legend value="" id="legendTitle"></label>');
divForm.append('<label class="control-label" for="inputAlt">Alt<input type="text" value="" id="inputAlt" placeholder=" Insert Alt"></label>');
divForm.append('<label class="control-label" for="inputTitle">Title<input type="text" id="inputTitle" value="" placeholder=" Insert Title"></label>');
divForm.append('<label class="control-label" for="inputCat">Categorie<input type="text" id="inputCat" value="" placeholder=" Insert Cetegorie"></label>');
divForm.append('<label class="control-label" for="buttonForm"><input type="submit" id="buttonForm" value="SUBMIT"></label>');

$(shellForm).append(divForm);
$('body').append(shellForm);

//////////////////*STYLES*//////////////////

$("#shellForm").css({
    'background': 'rgba(96, 125, 139, 0.5)',
    'position': 'fixed',
    'top': '0',
    'bottom': '0',
    'left': '0',
    'right': '0'

});

$("#divForm").css({
    'border': '2px solid #00a3ec',
    'padding': '3%',
    'margin': '15% auto 0',
    'width': '200px'
});

$("#legendTitle .control-label").css({
    'color': '#fff',
    'font-size': '16px',
    'font-weight': 'bold',
    'margin-bottom': '20px',
    'text-align': 'center',  
    'width': '200px'
});

$(".control-title").css ({
    'color': '#fff',
    'font-size': '16px',
    'font-weight': 'bold',
    'margin-bottom': '20px',
    'text-align': 'center',  
    'width': '200px'
});

$("#inputAlt").css({
    'border': '2px solid #00a3ec',
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

$("#inputTitle").css({
    'border': '2px solid #00a3ec',
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

$("#inputCat").css ({
    'border': '2px solid #00a3ec',
    'border-width': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

$("#buttonForm").css ({
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

$(".control-label").css ({
    'display': 'inline-block',
    'margin-bottom': '5px',
    'font-weight': '700',
});

$(".control-legend").css ({
    'display': 'inline-block',
    'margin-bottom': '20px',
    'font-weight': '700',
});