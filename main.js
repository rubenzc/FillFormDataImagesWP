/* BOOTSTRAP CSS
$('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" />');*/

/*Bootstrap CSS Styles
$('#inputAlt').addClass('form-control');
$('#inputTitle').addClass('form-control');
$('#inputCat').addClass('form-control');
$('#buttonForm').addClass('btn-success');
*/

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

var myForm = $("<form id='shellForm'><div id='divForm'><div/></form>");

myForm.append('<input type="text" id="inputAlt" value="" placeholder="Insert Alt">');
myForm.append('<input type="text" id="inputTitle" value="" placeholder="Insert Title">');
myForm.append('<input type="text" id="inputCat" value="" placeholder="Insert Cetegorie">');
myForm.append('<input type="button" id="buttonForm" value="SUBMIT">');

$('body').append(myForm);


