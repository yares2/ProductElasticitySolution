/**
 * Created with IntelliJ IDEA.
 * User: C.Placeres
 * Date: 1/15/14
 * Time: 9:01 AM
 * To change this template use File | Settings | File Templates.
 */

//GIS Functionality Handling

var dataFromGisReal;
var data = {};
var colinds;
data.Num_Catast = "Valor inicial";
data.AreaParcela = "Valor inicial";
data.Municipio = "Valor inicial";
data.Barrio = "Valor inicial";
data.InunZona = "Valor inicial";
data.Clasif = "Valor inicial";
data.Califi = "Valor inicial";
data.ZonSitHist = "Valor inicial";
data.SueloGeolo = "Valor inicial";
data.RegAplicab = "Valor inicial";

function receiveData(information) {
    dataFromGisReal = information;

    data.Num_Catast = dataFromGisReal.Num_Catast;
    data.AreaParcela = dataFromGisReal.AreaParcela;
    data.Municipio = dataFromGisReal.Municipio;
    data.Barrio = dataFromGisReal.Barrio;
    data.InunZona = dataFromGisReal.InunZona;
    data.Clasif = dataFromGisReal.Clasif;
    data.Califi = dataFromGisReal.Califi;
    data.ZonSitHist = dataFromGisReal.ZonSitHist;
    data.SueloGeolo = dataFromGisReal.SueloGeolo;
    data.CoordsNad83 = dataFromGisReal.x+'|'+dataFromGisReal.y;
    data.CoordsLatLonClick = dataFromGisReal.lat+','+dataFromGisReal.lon;

    fillData();

//    Function to tokenize the landregistry
//    splitLandRegistry();
}

function fillData()
{
    document.getElementById('zc_catastro').value = data.Num_Catast;
    document.getElementById('zc_area').value = data.AreaParcela;
    document.getElementById('zc_municipio').value = data.Municipio;
    document.getElementById('zc_barrio').value = data.Barrio;
    document.getElementById('zc_Inu_Zona').value = data.InunZona;
    document.getElementById('zc_Clasi').value = data.Clasif;
    document.getElementById('zc_Calif').value = data.Califi;
    document.getElementById('zc_ZonSitHis').value = data.ZonSitHist;
    document.getElementById('zc_SueloGeol').value = data.SueloGeolo;
    document.getElementById('zc_LatLon').value = data.CoordsLatLonClick;
    document.getElementById('zc_Nad83').value = data.CoordsNad83;

//    Get the data from the Colindantes
//    document.getElementById('zc_Colinds').value = a002.globals.Colind;

    document.getElementById('totalAreaInDeed').value = data.AreaParcela;
    if(document.getElementById('zc_catastro').value === document.getElementById('originalLandReg').value){
        clearForm();
    }
}

function crimColindsError(){
    console.log("No se lograron conseguir las direcciones de los colindantes. Favor entrarlas manualmente.");
}

function crimColindDirError(){
    alert("No se logró conseguir la dirección del dueño del solar. Favor entrarla manualmente.");
}

function landOwnerFill(){
    document.getElementById('addressLandRegistry').value = a002.globals.Colind.Direccion_Fisica;

    var postalAdd = (a002.globals.Colind.Direccion_Postal).trim().split(' ');
    var zip = postalAdd.pop();
    postalAdd.pop();
    var cityExtra = '';
    var city = postalAdd.pop();
    switch (city){
        case 'JUAN':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'MARIAS':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'ALTA':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'ALTO':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'BAJA':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'BUENAS':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'ROJO':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'DIAZ':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'PIEDRAS':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'GRANDE':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'GERMAN':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'LORENZO':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'SEBASTIAN':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        case 'ISABEL':
            cityExtra = postalAdd.pop() + ' ' + city;
            break;
        default:
            cityExtra = city;
            break;
    }
//    console.log(cityExtra);
    var address = postalAdd.join(' ');

    document.getElementById('cityLandOwner').value = cityExtra;
    document.getElementById('addressLandOwner').value = address;
    document.getElementById('zipCodeLandOwner').value = zip;

    var firstName = '';
    var lastName = '';
    var landOwnerInfo = (a002.globals.Colind.Contacto).trim().split(' ');
    switch (landOwnerInfo.length){
        case 3:
            firstName = landOwnerInfo.pop();
            var tempLast = landOwnerInfo.pop();
            lastName = landOwnerInfo.pop()+' '+tempLast;
            break;
        case 4:
            var tempFirst = landOwnerInfo.pop();
            firstName = landOwnerInfo.pop()+' '+tempFirst;
            var tempLast = landOwnerInfo.pop();
            lastName = landOwnerInfo.pop()+' '+tempLast;
            break;
    }
    document.getElementById('firstLastNameLandOwner').value = lastName;
    document.getElementById('firstNameLandOwner').value = firstName;

}

function searchCatastro(){
    var landRegistryNum = document.getElementById('inputLandRegistry').value;
    if(landRegistryNum.length === 14)
        a002.gisGet(landRegistryNum);
    else
        alert("# Catastro Incompleto");
}

function splitLandRegistry(){

    colinds = JSON.parse(a002.globals.Colind);
    document.getElementById('zc_Colinds').value = colinds;
}