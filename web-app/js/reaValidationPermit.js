/**
 * Created by Yarelis on 7/21/14.
 */
/**
 * Created by Yarelis on 7/18/14.
 */
function validateREA2()
{


    if(document.getElementById("permitTypeId").value=='Determinación de Impacto Ambiental')
    {
        if(document.getElementById("NepaLikeValue").value=='')
        {
            alert("Debe especificar si es NEPA-like process")
            $(function() {
                $('#permitNext').click(function() {
                    $('#permitNext').modal('hide');
                });
            });

            return false
        }
    }

    if(!document.getElementById("federal").checked && !document.getElementById("federalNEPA").checked && !document.getElementById("estatal").checked && !document.getElementById("private").checked)
    {
        alert("Debe escoger al menos un tipo de financiamiento")

        return false;

    }
     if(document.getElementById("locationValue").value=='')
    {
        alert("Debe escoger al menos una localización")
        return false;
    }
//
    if(!document.getElementById("water").checked && !document.getElementById("sewerage").checked && !document.getElementById("electric").checked && !document.getElementById("access").checked)
    {
        alert("Debe escoger al menos una infraestructura disponible")
        return false;
    }
    if(document.getElementById("intakeTypeValue").value=='')
    {
        alert("Debe escoger al menos un tipo de toma")
        return false;
    }
    if(document.getElementById("landMovement").checked)
    {
        if(document.getElementById("cityTopsoilDeposit").value=='null')
        {
            alert("Debe escoger un Municipio para depositar capa vegetal")
            return false;

        }
        if(document.getElementById("citydisposal").value=='null')
        {
            alert("Debe escoger un Municipio para disposición final")
            return false;

        }
        if(document.getElementById("fillingMaterial").checked)
        {
            if(document.getElementById("cityFillingMaterialOrigin").value=='null')
            {
                alert("Debe escoger Municipio de procedencia de material de relleno ")
                return false;

            }

        }
        if(document.getElementById("landMovementExcessive").checked)
        {
            if(document.getElementById("cityLandMovementExcessive").value=='null')
            {
                alert("Debe escoger Municipio de procedencia de material de relleno ")
                return false;

            }

        }

    }

     if(document.getElementById("wells").checked)
    {
        if(document.getElementById("wellTypeValue").value=='')
        {
            alert("Debe escoger un tipo de pozo")
            return false;
        }
        if(document.getElementById("wellConstructionMethodValue").value=='' && document.getElementById("methodOtherValue").value=='')
        {
            alert("Debe escoger un método de construcción del pozo")
            return false;
        }
        if(document.getElementById("ConservationWorkValue").value=='')
        {
            alert("Debe especificar si habrán trabajos de conservación")
            return false;
        }
        if(document.getElementById("CleanWorkValue").value=='')
        {
            alert("Debe especificar si habrán trabajos de limpieza")
            return false;
        }
        if(document.getElementById("intakeDataValue").value=='')
        {
            alert("Debe escoger un dato de la toma")
            return false;
        }
        if(document.getElementById("structureTypeValue").value==''&& document.getElementById("structureOtherValue").value=='')
        {
            alert("Debe escoger un tipo de estructura del pozo")
            return false;
        }

    }
    if(document.getElementById("phaseConsValue").value=='')
    {
        alert("Debe escoger al menos un lugar de disposición de aguas usadas durante la etapa de construcción")
        return false;
    }
    if(document.getElementById("phaseOpValue").value=='')
    {
        alert("Debe escoger al menos un lugar de disposición de aguas usadas durante la etapa de operación")
        return false;
    }

     if(document.getElementById("fluidStorage").checked)
    {
        if(!document.getElementById("tankBuried").checked && !document.getElementById("tankSemiBuried").checked &&!document.getElementById("tankField").checked)
        {
            alert("Debe especificar si el tanque es soterrado, semi-soterrado o sobre el terreno")
            return false;
        }


    }
     if(document.getElementById("NPDESPermitValue").value=='')
    {
        alert("Debe especificar si requiere un permiso NPDES")
        return false;
    }
     if(document.getElementById("funnel").checked)
    {

        if(document.getElementById("FunnelTypeValue").value=='')
        {
            alert("Debe especificar un tipo de canalización")
            return false;
        }

        if(document.getElementById("bodyWaterFunnelType").value='null')
        {
            alert("Debe escoger un tipo de cuerpo de agua")
            return false;
        }

    }
     if(document.getElementById("demolition").checked)
    {


        if(document.getElementById("ProcessingAndCrushingValue").value=='')
        {
            alert("Debe especificar si va a requerir procesamiento y trituración en el lugar del proyecto")
            return false;
        }
        if(document.getElementById("demolitionUseStructure").value=='null')
        {
            alert("Debe especificar el uso actual de la estructura")
            return false;
        }

        if(document.getElementById("EWValue").value=='')
        {
            alert("Debe especificar material de construcción de las paredes exteriores")
            return false;
        }
        if(document.getElementById("IWValue").value=='')
        {
            alert("Debe especificar material de construcción de las paredes interiores")
            return false;
        }
        if(document.getElementById("CeilingValue").value=='')
        {
            alert("Debe especificar material de construcción del techo")
            return false;
        }
        if(document.getElementById("FloorValue").value=='')
        {
            alert("Debe especificar material de construcción del piso")
            return false;
        }
        if(document.getElementById("demolitionExplosivesRequired").checked)
        {
            if(document.getElementById("AsbestosStructureValue").value=='')
            {
                alert("Debe especificar si la estructura contiene asbesto")
                return false;
            }
            if(document.getElementById("LeadPaintStructureValue").value=='')
            {
                alert("Debe especificar si la estructura contiene pintura con plomo")
                return false;
            }

        }


    }
    if(document.getElementById("AgencyCommentsValue").value=='')
    {
        alert("Debe especificar si el trámite contiene comentarios de las agencias")
        return false;
    }
     if(!document.getElementById("certified").checked)
    {
        alert("Debe especificar que certifica que toda la información es correcta")
        return false;
    }
     if(!document.getElementById("declare").checked)
    {
        alert("Debe especificar que afirma y reconoce las consecuencias de someter información falsa")
        return false;
    }
    else
    {

        return true
    }

}