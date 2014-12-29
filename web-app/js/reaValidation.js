/**
 * Created by Yarelis on 7/21/14.
 */
/**
 */
function validateREA()
{



//
    if(!document.getElementById("federal").checked && !document.getElementById("federalNEPA").checked && !document.getElementById("estatal").checked && !document.getElementById("private").checked)
    {
        alert("Debe escoger al menos un tipo de financiamiento")
        return false;

    }
//    else if((document.getElementById("rural").value=='') && (document.getElementById("urban").value==''))
//    {
//        alert("Debe escoger al menos una localización")
//        return false;
//    }
//
//    else if(!document.getElementById("water").checked && !document.getElementById("sewerage").checked && !document.getElementById("electric").checked && !document.getElementById("access").checked)
//    {
//        alert("Debe escoger al menos una infraestructura disponible")
//        return false;
//    }
//    else if((document.getElementById("publicValue").value=='') && (document.getElementById("privateValue").value==''))
//    {
//        alert("Debe escoger al menos un tipo de toma")
//        return false;
//    }
//    else if((document.getElementById("supplyValue").value=='') && (document.getElementById("trackingValue").value=='') && (document.getElementById("blastHoleValue").value=='') && (document.getElementById("cleanETCValue").value=='') && (document.getElementById("rechargeSystemValue").value==''))
//    {
//        alert("Debe escoger un tipo de pozo")
//        return false;
//    }
//
    else
    {
       return true
    }

}