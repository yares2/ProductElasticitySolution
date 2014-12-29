/**
 * Created with IntelliJ IDEA.
 * User: C.Placeres
 * Date: 1/15/14
 * Time: 8:57 AM
 * To change this template use File | Settings | File Templates.
 */

//Permit Validation Methods

var permitFormFields = [''];

$(function () {
//    $("[data-toggle='tooltip']").tooltip({'placement':'right'});
    $("[data-toggle=popover]").popover();
});



jQuery(function($){
    if( /Android/i.test(navigator.userAgent) ) {
//                alert("Mobile Browser!!!!");
    }
    else{
        $("input[type=tel]").mask("999 999-9999");
        $("input[id=lastFourTenant]").mask("9999");
        $("input[id=zipCodeTenant]").mask("99999");
    }
});
//        $('[data-toggle="tooltip"]').tooltip({
//            'placement': 'top'
//        });


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

function fullFormHandle(id){

       document.getElementById('city').value =  document.getElementById(id[0]).value;
    if(document.getElementById(id[0]).value != 'null'){
        $("#"+id[1]).collapse('show');
    }

    else {

        if(id[0] == 'projectId'){
            alert("Debe seleccionar un Proyecto, de no tener proyecto presione 'Crear Proyecto Nuevo'");
            if(document.getElementById(id[2]).value != 'null'){
                document.getElementById(id[2]).value = 'null';
                document.getElementById(id[2]).onchange();
                $("#"+id[1]).collapse('hide');
                $("#"+'fullForm').collapse('hide');
                $("#originalNumberLabel").addClass('invisible')
                $("#originalPermitNumber").addClass('invisible')
            }
            $("#"+id[1]).collapse('hide');
        }
        else if(id[0] == 'permitType'){
            alert("Debe seleccionar un Tipo de Permiso");
            $("#"+id[1]).collapse('hide');
        }
    }
}

function fullFormHandle2(id){


    $('.collapse').collapse({toggle: false})
    if(document.getElementById(id[0]).value=='Incendios' && document.getElementById("option").value=='null')
    {


        $("#"+'fullForm').collapse('hide');
        document.getElementById("option").value= 'null';



    }
    if(document.getElementById(id[0]).value=='Incendios')
    {

        $('#option').removeClass('invisible');
//        $("#"+'fullForm').collapse('hide');
        document.getElementById("option").value= 'null';



    }


    else if (id[0]=='permitType' && document.getElementById(id[0]).value!='Incendios' && document.getElementById(id[0]).value!='null')
    {
        $('#option').addClass('invisible');
        $("#originalNumberLabel").addClass('invisible')
        $("#originalPermitNumber").addClass('invisible')
        $("#"+'fullForm').collapse('show');


    } else
    {
        $('#option').addClass('invisible');


}


    if(document.getElementById(id[0]).value != 'null'){

        $("#"+id[1]).collapse('show');
    }


     else{

       if (id[0] == 'permitType'){

        alert("Debe seleccionar un Tipo de Permiso");
           $("#originalNumberLabel").addClass('invisible')
           $("#originalPermitNumber").addClass('invisible')

        $("#"+'fullForm').collapse('hide');
     }

}

}




function validatePermitNumber()
{

    if(document.getElementById("option").value=='Renovacion'){
    if(document.getElementById("originalPermitNumber").value=="" || document.getElementById("originalPermitNumber").value=='null')
    {
        alert("Por favor ingrese el Número de Permiso");
        return false
    }
    }
    return true

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

function valueLaw(value, id2){
    document.getElementById(id2).value = value;
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

function showElements(){
    var elements = document.forms["completePermitForm"].elements;
    var message = "";
    for (var i=0; i<elements.length; i++){
        var currElement = elements[i].getAttribute('id');
        if(document.getElementById(currElement).hasAttribute("required")){
            message += "\n"+currElement;
            alert(currElement);
        }
    }
    alert("Elements: "+message);
}

function validatePermitFormRequired(){


    var elements = document.forms["completePermitForm"].elements;
    var filteredElements = [];
    var j = 0;


    for (var i=0; i<elements.length; i++){
        var currElement = elements[i].getAttribute('id');
        if(currElement != null){
            if(document.getElementById(currElement).hasAttribute("required")){
                filteredElements[j]=currElement;
    //                    alert("Are we here?"+j+" Total:"+elements.length);
                j++;
            }
        }
//        console.log(i);
        if(i == elements.length-3){
            if((document.getElementById('permitTypeId').value === "Salud")||(document.getElementById('permitTypeId').value === "Incendios")){
                return ifAllRequiredAreNotNull(filteredElements);
            }
            else if(document.getElementById('permitTypeId').value === "Uso" || document.getElementById('permitTypeId').value === "Exclusión Categórica"){
                return validatePUSInner();
            }else if(document.getElementById('permitTypeId').value === "Permiso General Consolidado"){
                return permitPGCValidation();
            }else if(document.getElementById('permitTypeId').value === "Otras Obras"){
                return permitPGOValidation();
            }else if(document.getElementById('permitTypeId').value === "Generadores de Electricidad"){
                return permitPGEValidation();
            }else if(document.getElementById('permitTypeId').value === "Reconsideración" ){
                return permitSDRValidation();
            }else if(document.getElementById('permitTypeId').value === "Querella"){
                return validateSRQ();
            }else if(document.getElementById('permitTypeId').value === "Permiso de Urbanización"){
                return validatePCU2();
            }else if(document.getElementById('permitTypeId').value === "Permiso de Construcción"){
                return validatePCO2();
            }else if(document.getElementById('permitTypeId').value === "Prórroga O Reapertura"){
                return permitPRRValidation();
            }else if(document.getElementById('permitTypeId').value === "Certificación Equipos Energía Renovable"){
                return validateCERInner();
            }
            else if(document.getElementById('permitTypeId').value === "Consulta de Construcción"){
                return validateCCO2();

            }
            else if(document.getElementById('permitTypeId').value === "Variación a Lotificación"){
                return permitLOTValidation();
            }
            else if(document.getElementById('permitTypeId').value === "Recomendación Ambiental" || document.getElementById('permitTypeId').value === "Declaración de Evaluación Ambiental" || document.getElementById('permitTypeId').value === "Determinación de Impacto Ambiental"){
                return validateREA4();
            }
            else if(document.getElementById('permitTypeId').value === "Variación a Lotificación"){
                return permitPCTValidation();
            }
            else if(document.getElementById('permitTypeId').value === "Instalación de Sistemas"){
                return validateCISInner();
            }
            else if(document.getElementById('permitTypeId').value === "Permiso de Obra de Infraestructura Exenta de la Aprobación de OGPe"){
                return permitPIEValidation();
            }
            else if(document.getElementById('permitTypeId').value === "Permiso de Mantenimiento de Obras de Infraestructura Pública"){
                return permitPMOValidation();
            }
            else if(document.getElementById('permitTypeId').value === "Corte y Poda"){
                return validateACPInner();
            }else if(document.getElementById('permitTypeId').value === "Autorización de Servicio"){
                return validateASE();
            }
            else if(document.getElementById('permitTypeId').value === "Copia Expediente"){
                return validateSCEInner();
            }

            break;
        }
    }

}

function ownerDisableContactPerson(boxes){

    if(document.getElementById("hasContactPerson").checked)
    {
        for(var i=0;i<boxes.length;i++){
            document.getElementById(boxes[i]).setAttribute("required","");
        }
//        $('#copyData').addClass("invisible");
        $('#messageContactPerson').addClass("invisible");
        $("#contactPersonForm").collapse('toggle');
    }
    else
    {
        for(var i=0;i<boxes.length;i++){
            document.getElementById(boxes[i]).removeAttribute("required");
        }
//        $('#copyData').removeClass("invisible");
        $('#messageContactPerson').removeClass("invisible");
        $("#contactPersonForm").collapse('toggle');
    }
}

function formatAndroid(id){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if(document.getElementById(id).value.length == 10){
            var number = document.getElementById(id).value;
//            alert(number);
            var formatedNumber = number.substr(0,3)+" "+number.substr(3,3)+"-"+number.substr(6,4);
            document.getElementById(id).value = formatedNumber;

            if(id == 'faxProjectOwner' || id == 'faxLandOwner' || id == 'faxNumber'){
                $(id).blur();
            }
        }
    }
}

function ifAllRequiredAreNotNull(requiredElements){
//    alert("Required Elements Length "+requiredElements.length);
    for (var i=0; i<requiredElements.length; i++){
        if(document.getElementById(requiredElements[i]).value == ""){
            alert("Debe seleccionar opción para el campo");
            document.getElementById(requiredElements[i]).focus();

            if(requiredElements[i] == 'typeOfUseValue'){
                document.getElementById('typeOfUse').focus();
            }
            else if(requiredElements[i] == 'expeditoValue'){
                document.getElementById('other').scrollIntoView(true);
            }

            return false;
        }
    }

//    Validation if ALL materials are null
    var unfilteredMaterials = ['concreteValue','concreteCinderBlockValue','steelValue','woodValue','otherValue'];
    for (var k=0; k<unfilteredMaterials.length; k++){
//        alert(k);
        if(document.getElementById(unfilteredMaterials[k]).value != ""){
            break;
        }
        else if(k==4 && document.getElementById(unfilteredMaterials[k]).value == "") {
            alert("Debe seleccionar al menos un tipo de material de construcción.");
            document.getElementById('concrete').scrollIntoView(true);
            return false;
        }
//        else if(document.getElementById('numberOfStories').value == ""){
//            alert("Debe entrar la cantidad de plantas.");
//            document.getElementById('numberOfStories').scrollIntoView(true);
//            return false;
//        }
//        else if(document.getElementById('areaOfConstruction').value == ""){
//            alert("Debe entrar el Área de Construcción.");
//            document.getElementById('areaOfConstruction').scrollIntoView(true);
//            return false;
//        }

    }

//    alert("It is all true");
//    document.getElementById('validationButton').setAttribute('disabled');
//    document.getElementById('formPermitSubmit').removeAttribute('disabled');


//    var option = confirm("¿Esta seguro que entró el Área del Proyecto correcta?"+"\n\n Área Entrada: "+document.getElementById('areaOfConstruction').value+" ft2");
////    var option = '<div id="option" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">  ' +
////        '<div class="modal-header">    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>    ' +
////        '<h3 id="myModalLabel">¿Está usted seguro?</h3>  </div>  <div class="modal-body">    ' +
////        '<p>¿Está seguro que entró el Área del Proyecto correcta?<br/> Área Entrada: "' +
////        document.getElementById('areaOfConstruction').value + '" ft2</p>  </div>  <div class="modal-footer">    ' +
////        '<button class="btn" data-dismiss="modal" aria-hidden="true">Volver</button>    ' +
////        '<button type="submit" id="submitPermit" class="btn btn-primary">Próximo</button>  </div></div>';
////
////    $(option).modal('show');
////    alert(document.getElementById('submitPermit').onClick);
//    if(option == true){
//        return true;
//
//    } else {
//        document.getElementById('areaOfConstruction').focus();
//        return false;
//    }

//    return true;
}

function copyNumbers(){
    if(document.getElementById('primaryPhone').value != ""){
        document.getElementById('secondaryPhone').value = document.getElementById('primaryPhone').value;
        document.getElementById('extraPhone').value = document.getElementById('primaryPhone').value;
        document.getElementById('faxNumber').value = document.getElementById('primaryPhone').value;
        $(phoneCopy).popover('toggle');
    }
    else {
        alert("El telÃ©fono principal no puede estar en blanco.");
        document.getElementById('primaryPhone').focus();
    }
}


//function confirmArea(){
//    document.getElementById('areaOfConstruction').focus();
//    var answer = confirm('Â¿Esta seguro que entrÃ³ el Ãrea del Proyecto correcta?');
//    if(answer)
//        return true;
//    else
//        return false;
//}