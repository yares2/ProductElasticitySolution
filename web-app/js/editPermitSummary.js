/**
 * Created by Omar Aviles on 05-07-14.
 */

$(document).ready(function() {
        $("[data-toggle='tooltip']").tooltip({'placement':'right'});
});

function showUpload(){
    if(document.getElementById('attachmentList').value != 'null'){
        $("#"+'uploadArea').removeClass('invisible');
    }
    else {
        $("#"+'uploadArea').addClass('invisible');
        alert("Necesita seleccionar un tipo de Documento antes de poder subirlo");
    }
}

function valueLaw(value, id2){
    document.getElementById(id2).value = value;
}

function showButton(){
    if(document.getElementById('document').value != "")
        $('#uploadButton').removeClass('invisible');
    else
        $('#uploadButton').addClass('invisible');
}

function showSpinner(){
    $('#spinner').removeClass('hidden');
    $('#uploadArea').addClass('invisible');
    var delay = 1000;
    setTimeout("submitForm()", delay);
}

function submitForm(){
    document.forms['uploadForm'].submit();
}

function validation(){
    if(document.getElementById('concreteValue').value=="" && document.getElementById('concreteCinderBlockValue').value=="" && document.getElementById('steelValue').value=="" && document.getElementById('woodValue').value=="")
    {
        alert("Por favor seleccione los tipos de materiales de su permiso.");
        return false
    }
    if(document.getElementById('expeditoValue').value==""){
        alert("Por favor seleccione si el permiso esta bajo la Ley de Empleos Ahora.");
        return false
    }
    return true
}

function useChange(id1){
    var typeChosen = document.getElementById(id1).value;
    if(typeChosen == '339'){
        textActivation(['typeOfUseValue']);
        $('#typeOfUseValue').setAttribute("required");
    }
//    else {
//        valueSet(id1,'typeOfUseValue');
//        textDeactivation(['typeOfUseValue']);
//    }
}

function valueSet(id1, id2){
    document.getElementById(id2).value = document.getElementById(id1).value;
}

function valueFromId(value,id2){
    if(document.getElementById(id2).value == ""){
        document.getElementById(id2).value = value;
    }
    else
        document.getElementById(id2).value = "";
}

function toggleSingle(clickedButtonId){
    if(clickedButtonId == 'other'){
        if(!$('#other').hasClass('active')){
            textActivation(['otherValue']);
            document.getElementById('otherValue').setAttribute('required');
        }
        else if($('#other').hasClass('active')){
            textDeactivation(['otherValue']);
            document.getElementById('otherValue').removeAttribute('required')
        }
    }
}

function toggleButtons(buttons){
//    $("#"+buttons[0]).removeClass("disabled");
//    for(var i=1;i<buttons.length;i++){
//        $("#"+buttons[i]).addClass("disabled");
//    }
}

function textActivation(boxes){
    for(var i=0;i<boxes.length;i++){
        $("#"+boxes[i]).removeClass("invisible");
    }
}

function textDeactivation(boxes){
    for(var i=0;i<boxes.length;i++){
        $("#"+boxes[i]).addClass("invisible");
    }
}