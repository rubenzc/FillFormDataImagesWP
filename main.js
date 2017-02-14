/* BOOTSTRAP CSS
$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" />');*/

/*Bootstrap CSS Styles
$('#inputAlt').addClass('form-control');
$('#inputTitle').addClass('form-control');
$('#inputCat').addClass('form-control');
$('#buttonForm').addClass('btn-success');
*/


var myForm = $("<form id='shellForm'></form>");
var divForm = $("<div id='divForm'></div>")

divForm.append('<label for=inputAlt><input type="text" value="" id="inputAlt" placeholder="Insert Alt"></label>');
divForm.append('<label for=inputTitle><input type="text" id="inputTitle" value="" placeholder="Insert Title"></label>');
divForm.append('<label for=inputCat><input type="text" id="inputCat" value="" placeholder="Insert Cetegorie"></label>');
divForm.append('<label for=buttonForm><input type="button" id="buttonForm" value="SUBMIT"></label>');

$(myForm).append(divForm);
$('body').append(myForm);

/*Styles*/

$("#inputAlt").css({
    'background': '#e0e0eb',
    'border': '2px solid #000000',
    'color': '#000000',
    'display': 'block',
    'font-size': '12px',
    'height': '30px',
    'width': '150px'
});

$("#inputTitle").css({
    'background': '#e0e0eb',
    'border': '2px solid #000000',
    'color': '#000000',
    'display': 'block',
    'font-size': '12px',
    'height': '30px',
    'width': '150px'
});

$("#inputCat").css ({
    'background': '#e0e0eb',
    'border': '2px solid #000000',
    'color': '#000000',
    'display': 'block',
    'font-size': '12px',
    'height': '30px',
    'width': '150px'
});

$("#buttonForm").css ({
    'background': '#00cc66',
    'color': '#fff',
    'display': 'block',
    'font-size': '12px',
    'height': '30px',
    'text-transform': 'uppercase',
    'width': '100px'
});