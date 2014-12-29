/**
 * Created with IntelliJ IDEA.
 * User: C.Placeres
 * Date: 2/10/14
 * Time: 10:15 AM
 * To change this template use File | Settings | File Templates.
 */


$(function () {
    $("[data-toggle='tooltip']").tooltip({'placement': 'top'});

//    $('#r_username').tooltip({
//        placement: 'right',
//        html: 'true',
//        title: '<p>Le exortamos a que utilice su <p style="color: #4bab49;font-size: medium">Correo Electrónico</p> como su nombre de usuario, ya que sabemos que es mas fácil para recordar.</p>'
//    });

    $('#phoneCopy').tooltip({
        placement: 'right',
        title: 'Si su número de teléfono principal es el único que utiliza, presione el botón para copiarlo en los campos.'
    });

//    $('#phoneCopy').popover({
//        placement: 'bottom',
//        html: 'true',
//        title : 'Información Importante'+'<button type="button" id="copy" class="btn btn-success" onclick="copyNumbersRegistration()" style="margin-left: 10%">Copiar</button>',
//        content : 'Si su número de teléfono principal es el único que utiliza, presione el botón para copiarlo en los campos.'
//    });

    $(document).ready(function(){
        $('#r_password_confirm').keyup(passwordCheck);
        $('#r_username').keyup(emailCopy);
    });

});

jQuery(function($){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//                alert("Mobile Browser!!!!");
    }
    else{
        $("input[type=tel]").mask("999 999-9999");
        $('#zipCode').mask("99999");
    }
//    $("input[id=lastFour]").mask("9999");
});


function copyNumbersRegistration(){
    if(document.getElementById('primaryPhone').value != ""){
        document.getElementById('secondaryPhone').value = document.getElementById('primaryPhone').value;
        document.getElementById('extraPhone').value = document.getElementById('primaryPhone').value;
        document.getElementById('faxPhone').value = document.getElementById('primaryPhone').value;
        $(phoneCopy).popover('toggle');
    }
    else {
        alert("El teléfono principal no puede estar en blanco.");
        document.getElementById('primaryPhone').focus();
    }
}

function emailCopy(){
    document.getElementById('email').value = document.getElementById('r_username').value;
}

function passwordCheck(){
    var password = $('#r_password').val();
    var confirmation = $('#r_password_confirm').val();

    if(password != confirmation){
        $('#password1').html('<span style="color: red"><i class="icon-remove"/></span>');
        $('#password2').html('<span style="color: red"><i class="icon-remove"/></span>');
    }
    else{
        $('#password1').html('<span style="color: green"><i class="icon-ok"/></span>');
        $('#password2').html('<span style="color: green"><i class="icon-ok"/></span>');
    }

}

function passwordValid(){
    var password = $('#r_password').val();
    var confirmation = $('#r_password_confirm').val();

    if(password == confirmation)
        return true;
    else {
        alert("Necesita que sus contraseñas sean idénticas.");
        return false;
    }
}

function formatAndroid(id){
    if( /Android/i.test(navigator.userAgent) ) {
        if(document.getElementById(id).value.length == 10){
            var number = document.getElementById(id).value;
//            alert(number);
            var formatedNumber = number.substr(0,3)+" "+number.substr(3,3)+"-"+number.substr(6,4);
            document.getElementById(id).value = formatedNumber;

            if(id == 'faxPhone'){
                $('#faxPhone').blur();
            }
        }
    }
}

function disableProfessionalLicenses(boxes){

    if(document.getElementById("hasProfessionalLicenses").checked)
    {
//        for(var i=0;i<boxes.length;i++){
//            document.getElementById(boxes[i]).setAttribute("required","");
//        }
//        $('#copyData').addClass("invisible");
        $('#messageProfessionalLicense').addClass("invisible");
        $("#professionalLicenseForm").collapse('toggle');
    }
    else
    {
//        for(var i=0;i<boxes.length;i++){
//            document.getElementById(boxes[i]).removeAttribute("required");
//        }
//        $('#copyData').removeClass("invisible");
        $('#messageProfessionalLicense').removeClass("invisible");
        $("#professionalLicenseForm").collapse('toggle');
    }
}

$(document).ready(function () {
    $(".licenseType").each(function () {
        var $self = $(this);
        $self.data("previous_value", $self.val());
    });

    $(".licenseType").on("change", function () {
        var $self = $(this);
        var prev_value = $self.data("previous_value");
        var cur_value = $self.val();

        $(".licenseType").not($self).find("option").filter(function () {
            return $(this).val() == prev_value;
        }).prop("disabled", false);

        if (cur_value != "") {
            $(".licenseType").not($self).find("option").filter(function () {
                return $(this).val() == cur_value;
            }).prop("disabled", true);

            $self.data("previous_value", cur_value);
        }
    });
});

//function checkCountry(){
//    var country = $('#country').val();
//    if(country != "Estados Unidos"){
//        document.getElementById('stateTitle').addClass('invisible');
//        document.getElementById('state').addClass('invisible');
//    }
//    else {
//        document.getElementById('stateTitle').removeClass('invisible');
//        document.getElementById('state').removeClass('invisible');
//    }
//}
//
//function checkState(){
//    var state = $('#state').val();
//    if(state != "Puerto Rico"){
//        $('#realCity').html('<input type="text" id="city" required/>');
//    }
//    else {
//        $('#realCity').html('<g:select id="city" name="city" noSelection="${['null': g.message(code: 'selectAnOption.label')]}" from="${gov.pr.pemas.model.Municipality.list()}" optionKey="id" required="" value="${fieldValue(bean: municipalityInstance, field: "name")}" class="many-to-one"/>')
//    }
//}