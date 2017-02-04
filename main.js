var myForm = $("<form id='shellForm'><div id='divForm'><div/></form>");

myForm.append('<input type="text" id="inputAlt" value="" placeholder="Insert Alt">');
myForm.append('<input type="text" id="inputTitle" value="" placeholder="Insert Title">');
myForm.append('<input type="text" id="inputCat" value="" placeholder="Insert Cetegorie">');
myForm.append('<input type="button" id="buttonForm" value="SUBMIT">');

$('body').append(myForm);