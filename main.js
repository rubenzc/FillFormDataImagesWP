
var shellForm = $("<form id='shellForm'></form>");
var divForm = $("<div id='divForm'></div>")

divForm.append('<label for=inputAlt><input type="text" value="" id="inputAlt" placeholder="Insert Alt"></label>');
divForm.append('<label for=inputTitle><input type="text" id="inputTitle" value="" placeholder="Insert Title"></label>');
divForm.append('<label for=inputCat><input type="text" id="inputCat" value="" placeholder="Insert Cetegorie"></label>');
divForm.append('<label for=buttonForm><input type="button" id="buttonForm" value="SUBMIT"></label>');

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
    'margin': '5% auto 0',
    'text-align': 'center',
    'width': '200px'
});

$("#inputAlt").css({
    'border': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

$("#inputTitle").css({
    'border': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

$("#inputCat").css ({
    'border': '0 !important',
    'color': '#000000',
    'height': '30px',
    'margin-bottom': '5px',
    'width': '200px'
});

$("#buttonForm").css ({
    'border': '0 !important',
    'background': '#00cc66',
    'color': '#fff',
    'display': 'block',
    'font-size': '12px',
    'height': '30px',
    'text-align': 'center',
    'text-transform': 'uppercase',
    'width': '204px'
});