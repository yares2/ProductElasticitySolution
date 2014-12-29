/**
 * Created with IntelliJ IDEA.
 * User: Kevin R
 * Date: 4/2/14
 * Time: 10:48 AM
 * To change this template use File | Settings | File Templates.
 */

jQuery(function ($) {
    $("#preMadeNotesList").change(function () {
        var value = $( "#preMadeNotesList option:selected" ).text();

        if(value == "Notas Pre-hechas...")
            $("#noteText").val('');
        else
            $("#noteText").val(value);

    });
});