/**
 * Created with IntelliJ IDEA.
 * User: Kevin R
 * Date: 3/17/14
 * Time: 1:35 PM
 * To change this template use File | Settings | File Templates.
 */

function chatScreenAnimation(){
    $("#chatScreen").animate({
        scrollTop:$("#chatScreen")[0].scrollHeight - $("#chatScreen").height()
    },1000);
}
