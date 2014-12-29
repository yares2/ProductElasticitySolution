/**
 * Created with IntelliJ IDEA.
 * User: C.Placeres
 * Date: 1/15/14
 * Time: 9:00 AM
 * To change this template use File | Settings | File Templates.
 */

//Project Validation Methods

//    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//        alert("Mobile Browser!!!");
//    }
//    else{
//        $("[data-toggle='tooltip']").tooltip({'placement':'right'});
//    }
//$(function () {
//    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//        alert("Mobile Browser!!!");
//    }
//    else{
//        $("[data-toggle='tooltip']").tooltip({'placement':'right'});
//    }
//});

jQuery(function($){
    if( /Android/i.test(navigator.userAgent) ) {
//                alert("Mobile Browser!!!!");
    }
    else{
        $("input[type=tel]").mask("999 999-9999");
        $('#lastFourProjectOwner, #lastFourLandOwner').mask("9999");
        $("input[id=zipCodeProjectOwner]").mask("99999");
        $("input[id=zipCodeLandOwner]").mask("99999");
        $("input[id=zipCodeLandRegistry]").mask("99999");
        $("input[id=zipCodeTenant]").mask("99999");
        $("input[id=inputLandRegistry]").mask("999-999-999-99");
//        $("input[id=inputLandRegistry]").mask("999-999-999-99");
    }
});

function toggleButtons(expander){
    $("#"+expander[0]).removeClass("disabled");
    for(var i=1;i<expander.length;i++){
        $("#"+expander[i]).addClass("disabled");
    }
}

function textActivation(boxes){
    for(var i=0;i<boxes.length;i++){
        $("#"+boxes[i]).removeClass("invisible");
    }
}

function setRequired(id1, id2){
    document.getElementById(id1).setAttribute("required","");
    document.getElementById(id2).setAttribute("required","");
}

function removeRequired(id1, id2){
    document.getElementById(id1).removeAttribute("required");
    document.getElementById(id2).removeAttribute("required");
}

function checkOn(id){
//    if(id === "user"){
//        if(document.getElementById('requesterIsPOwner').checked){
//            document.getElementById('requesterIsPOwner').removeAttribute("checked");
//            var delay = 1000;
//            setTimeout("ownerDisable(['firstNameProjectOwner','firstLastNameProjectOwner','countryProjectOwner'," +
//                "'stateProjectOwner','cityProjectOwner','addressProjectOwner','zipCodeProjectOwner','primaryPhoneProjectOwner'," +
//                "'emailProjectOwner'])", delay);
//        }
//    }
    if (id === "otherPerson" || id === "otherCompany" || id === "user"){
        if(!document.getElementById('requesterIsPOwner').checked){
            document.getElementById('requesterIsPOwner').setAttribute("checked",true);
            var delay = 1000;
            setTimeout("ownerDisable(['firstNameProjectOwner','firstLastNameProjectOwner','countryProjectOwner'," +
                "'stateProjectOwner','cityProjectOwner','addressProjectOwner','zipCodeProjectOwner','primaryPhoneProjectOwner'," +
                "'emailProjectOwner'])", delay);
        }
    }
}

function checkTenant(id){
    if(id === "noTenant"){
        if(document.getElementById('projectHasTenant').checked){
            document.getElementById('projectHasTenant').removeAttribute("checked");
            var delay = 1000;
            setTimeout(ownerDisableTenant(['nameTenant','firstLastNameTenant','countryTenant','stateTenant','cityTenant',
                'addressTenant','zipCodeTenant','primaryPhone','emailTenant']), delay);
        }
    }
    else if (id === "yesTenant"){
        if(!document.getElementById('projectHasTenant').checked){
            document.getElementById('projectHasTenant').setAttribute("checked",true);
            var delay = 1000;
            setTimeout("ownerDisableTenant(['nameTenant','firstLastNameTenant','countryTenant','stateTenant','cityTenant'" +
                ",'addressTenant','zipCodeTenant','primaryPhone','emailTenant'])", delay);
        }
    }
}

function ownerDisable(boxes){

    if(document.getElementById("requesterIsPOwner").checked)
    {
        for(var i=0;i<boxes.length;i++){
            document.getElementById(boxes[i]).setAttribute("required","");
        }
        $('#copyData').removeClass("invisible");
        $('#message').addClass("invisible");
        $("#projectOwnerForm").collapse('toggle');
    }
    else
    {
        for(var i=0;i<boxes.length;i++){
            document.getElementById(boxes[i]).removeAttribute("required");
        }
        $('#copyData').addClass("invisible");
        $('#message').removeClass("invisible");
        $("#projectOwnerForm").collapse('toggle');
    }
}

function ownerDisableTenant(boxes){

    if(document.getElementById("projectHasTenant").checked)
    {
        for(var i=0;i<boxes.length;i++){
            document.getElementById(boxes[i]).setAttribute("required","");
        }
//        $('#copyData').addClass("invisible");
        $('#messageTenant').addClass("invisible");
        $("#TenantForm").collapse('toggle');
    }
    else
    {
        for(var i=0;i<boxes.length;i++){
            document.getElementById(boxes[i]).removeAttribute("required");
        }
//        $('#copyData').removeClass("invisible");
        $('#messageTenant').removeClass("invisible");
        $("#TenantForm").collapse('toggle');
    }
}



function textDeactivation(boxes){
    for(var i=0;i<boxes.length;i++){
        $("#"+boxes[i]).addClass("invisible");
    }
}
//Used to set the value of the selected "radio" buttons on the different areas.
function setRadioValue(value,id2){
    document.getElementById(id2).value = ""+value;
}

function reUseData(){
    document.getElementById('landOwnerTypeValue').value = document.getElementById('ownerTypeValue').value;

//    Special Condition handling for Legal/Natural Entity Type
    if(document.getElementById('landOwnerTypeValue').value == 'Jurídico'){
        if($('#naturalLandOwner').hasClass('active')){
            $('#naturalLandOwner').removeClass('active');
        }
        $('#juridicLandOwner').addClass('active');
        textActivation(['titleJuridicLandOwnerName','nameJuridicLandOwner','titleManagementInsuranceLandOwnerNumber','managementInsuranceLandOwner']);
    }
    else if(document.getElementById('landOwnerTypeValue').value == 'Natural'){
        if($('#juridicLandOwner').hasClass('active')){
            $('#juridicLandOwner').removeClass('active');
        }
        $('#naturalLandOwner').addClass('active');
        textDeactivation(['titleJuridicLandOwnerName','nameJuridicLandOwner','titleManagementInsuranceLandOwnerNumber','managementInsuranceLandOwner']);
    }



    document.getElementById('nameJuridicLandOwner').value = document.getElementById('nameJuridicProjectOwner').value;
    document.getElementById('managementInsuranceLandOwner').value = document.getElementById('managementInsuranceProjectOwnerNumber').value;



    document.getElementById('firstNameLandOwner').value = document.getElementById('firstNameProjectOwner').value;
    document.getElementById('middleInitialLandOwner').value = document.getElementById('middleInitialProjectOwner').value;
    document.getElementById('firstLastNameLandOwner').value = document.getElementById('firstLastNameProjectOwner').value;

    document.getElementById('countryLandOwner').value = document.getElementById('countryProjectOwner').value;
    document.getElementById('addressLandOwner').value = document.getElementById('addressProjectOwner').value;
    document.getElementById('stateLandOwner').value = document.getElementById('stateProjectOwner').value;
    document.getElementById('zipCodeLandOwner').value = document.getElementById('zipCodeProjectOwner').value;
    document.getElementById('cityLandOwner').value = document.getElementById('cityProjectOwner').value;

    document.getElementById('emailLandOwner').value = document.getElementById('emailProjectOwner').value;
//    document.getElementById('lastFourLandOwner').value = document.getElementById('lastFourProjectOwner').value;

    document.getElementById('primaryPhoneLandOwner').value = document.getElementById('primaryPhoneProjectOwner').value;
    document.getElementById('secondaryPhoneLandOwner').value = document.getElementById('secondaryPhoneProjectOwner').value;
    document.getElementById('extraPhoneLandOwner').value = document.getElementById('extraPhoneProjectOwner').value;
    document.getElementById('faxLandOwner').value = document.getElementById('faxProjectOwner').value;




}

function validateFormRequired(){
    var elements = document.forms["completeProjectForm"].elements;
//    alert(['Aguadilla', 'Bayamón', 'Cabo Rojo', 'Caguas', 'Carolina', 'Cidra', 'Guaynabo', 'Humacao', 'Ponce', 'San Juan'].indexOf(document.getElementById('zc_municipio').value));
//    if(['Aguadilla', 'Bayamón', 'Cabo Rojo', 'Caguas', 'Carolina', 'Cidra', 'Guaynabo', 'Humacao', 'Ponce', 'San Juan'].indexOf(document.getElementById('zc_municipio').value) > -1){
//        alert("");
//        return false;
//    }

    if(!document.getElementById('requesterIsPOwner').checked){
        alert("Debe escoger: ¿A nombre de quién deben salir los trámites de este proyecto?");
        document.getElementById('ProjectOwners').scrollIntoView(true);
        return false;
    }

    var filteredElements = [];
    var j = 0;
    for (var i=0; i<elements.length; i++){
        var currElement = elements[i].getAttribute('id');

        if(currElement != null){
            if(document.getElementById(currElement).hasAttribute("required")){
                filteredElements[j]=currElement;
//                    alert("Are we here?"+j+" "+currElement+" Total:"+elements.length);
//            alert(currElement);
                j++;
            }
        }
        console.log(i);
        if(i == elements.length-2){
//            alert(filteredElements.length);
            return ifAllRequiredAreNotNull(filteredElements);
//            break;
        }

    }
}



function ifAllRequiredAreNotNull(requiredElements){
//    alert("Required Elements Length "+requiredElements.length);
    for (var i=0; i<requiredElements.length; i++){
        if(document.getElementById(requiredElements[i]).value == "" || document.getElementById(requiredElements[i]).value == "null"){
            alert("Debe seleccionar opción para el campo: '"+requiredElements[i]+"'");
            document.getElementById(requiredElements[i]).focus();
//            return false;

            if(requiredElements[i] == 'projectType1Value'){
                document.getElementById('Project').scrollIntoView(true);
            }
            else if(requiredElements[i] == 'projectType2Value'){
                document.getElementById('Project').scrollIntoView(true);
            }

            return false;
        }
    }
//    alert("It is all true");
//    document.getElementById('validationButton').setAttribute('disabled');
//    document.getElementById('formSubmit').removeAttribute('disabled');
    return true;
}

function copyNumbersProject(){
    if(document.getElementById('primaryPhoneProjectOwner').value != ""){
        document.getElementById('secondaryPhoneProjectOwner').value = document.getElementById('primaryPhoneProjectOwner').value;
        document.getElementById('extraPhoneProjectOwner').value = document.getElementById('primaryPhoneProjectOwner').value;
        document.getElementById('faxProjectOwner').value = document.getElementById('primaryPhoneProjectOwner').value;
        $(phoneCopyProjectOwner).popover('toggle');
    }
    else {
        alert("El teléfono principal no puede estar en blanco.");
        document.getElementById('primaryPhoneProjectOwner').focus();
    }
}

function copyNumbersLand(){
    if(document.getElementById('primaryPhoneLandOwner').value != ""){
        document.getElementById('secondaryPhoneLandOwner').value = document.getElementById('primaryPhoneLandOwner').value;
        document.getElementById('extraPhoneLandOwner').value = document.getElementById('primaryPhoneLandOwner').value;
        document.getElementById('faxLandOwner').value = document.getElementById('primaryPhoneLandOwner').value;
        $(phoneCopyLandOwner).popover('toggle');
    }
    else {
        alert("El teléfono principal no puede estar en blanco.");
        document.getElementById('primaryPhoneLandOwner').focus();
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

function androidCatastro(id){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if(document.getElementById(id).value.length == 11){
            var number = document.getElementById(id).value;
//            alert(number);
            var formatedNumber = number.substr(0,3)+"-"+number.substr(3,3)+"-"+number.substr(6,3)+"-"+number.substr(9,2);
            document.getElementById(id).value = formatedNumber;
        }
    }
}

function setReadAndInvisibleOnly(first, middle, last, titleFirst, titleMiddle, titleLast, mainTitle){
    document.getElementById(first).setAttribute("readonly","");
    $('#'+first).addClass("invisible");
//    document.getElementById(middle).removeAttribute("required");
    $('#'+middle).addClass("invisible");
    document.getElementById(last).removeAttribute("required");
    $('#'+last).addClass("invisible");

    $('#'+titleFirst).addClass("invisible");
    $('#'+titleMiddle).addClass("invisible");
    $('#'+titleLast).addClass("invisible");
    $('#'+mainTitle).addClass("invisible");
}

function removeReadAndInvisibleOnly(first, middle, last, titleFirst, titleMiddle, titleLast, mainTitle){
    document.getElementById(first).removeAttribute("readonly");
    $('#'+first).removeClass("invisible");
//    document.getElementById(middle).setAttribute("required","");
    $('#'+middle).removeClass("invisible");
    document.getElementById(last).setAttribute("required","");
    $('#'+last).removeClass("invisible");

    $('#'+titleFirst).removeClass("invisible");
    $('#'+titleMiddle).removeClass("invisible");
    $('#'+titleLast).removeClass("invisible");
    $('#'+mainTitle).removeClass("invisible");
}

function nameCopy(id1, id2){
    document.getElementById(id1).value = document.getElementById(id2).value;
    if(id1 === 'firstNameProjectOwner'){
        document.getElementById('firstLastNameProjectOwner').value = " ";
    }
    else if(id1 === 'nameTenant'){
        document.getElementById('firstLastNameTenant').value = " ";
    }
}

function cityPOwnerLoad() {
    document.getElementById('cityPOwner').innerHTML = '<img style="padding-left: 80px; height: 32px; width: 32px; padding-top: 10px" src="/freedom/static/images/ajax-loader-2.gif"/>';
}

function cityLOwnerLoad() {
    document.getElementById('cityLOwner').innerHTML = '<img style="padding-left: 80px; height: 32px; width: 32px; padding-top: 10px" src="/freedom/static/images/ajax-loader-2.gif"/>';
}

function cityTenantLoad() {
    document.getElementById('cityTen').innerHTML = '<img style="padding-left: 80px; height: 32px; width: 32px; padding-top: 10px" src="/freedom/static/images/ajax-loader-2.gif"/>';
}

function cityLoading() {
    document.getElementById('cityDiv').innerHTML = '<img style="padding-left: 80px; height: 32px; width: 32px; padding-top: 10px" src="/freedom/static/images/ajax-loader-2.gif"/>';
}
