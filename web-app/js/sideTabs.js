$(function() {

    var feedbackTabLeft = {

        speed:300,
        containerWidth:$('.feedback-panel-left').outerWidth(),
        containerHeight:$('.feedback-panel-left').outerHeight(),
        tabWidth:$('.feedback-tab-left').outerWidth(),

        init:function(){
            $('.feedback-panel-left').css('height',feedbackTabLeft.containerHeight + 'px');

            $('a.feedback-tab-left').click(function(event){

                if ($('.feedback-panel-left').hasClass('open')) {
                    $('.feedback-panel-left').animate({left:'-' + feedbackTabLeft.containerWidth}, feedbackTabLeft.speed)
                        .removeClass('open');
                } else {
                    $('.feedback-panel-left').animate({left:'0'},  feedbackTabLeft.speed)
                        .addClass('open');
                }
                event.preventDefault();
            });
        }
    };

    var feedbackTabRight = {

        speed:300,
        containerWidth:$('.feedback-panel-right').outerWidth(),
        containerHeight:$('.feedback-panel-right').outerHeight(),
        tabWidth:$('.feedback-tab-right').outerWidth(),

        init:function(){
            $('.feedback-panel-right').css('height',feedbackTabRight.containerHeight + 'px');

            $('a.feedback-tab-right').click(function(event){

                if ($('.feedback-panel-right').hasClass('open')) {
                    $('.feedback-panel-right').animate({right:'-' + feedbackTabRight.containerWidth}, feedbackTabRight.speed)
                        .removeClass('open');
                } else {
                    $('.feedback-panel-right').animate({right:'0'},  feedbackTabRight.speed)
                        .addClass('open');
                }
                event.preventDefault();
            });
        }
    };

    feedbackTabLeft.init();
    feedbackTabRight.init();

});


//      Right Side Feedback Tab
(function ($) {
    $.fn.extend({
        feedBackBox: function (options) {

            return this.each(function () {

                // open and close animation
                var isOpen = false;
                $('#fpi_title').click(function () {
                    if (isOpen) {
                        $('#fpi_feedback').animate({ "width": "+=5px" }, "fast")
                            .animate({ "width": "55px" }, "slow")
                            .animate({ "width": "79px" }, "fast");
                        isOpen = !isOpen;
                    } else {
                        $('#fpi_feedback').animate({ "width": "-=5px" }, "fast")
                            .animate({ "width": "365px" }, "slow")
                            .animate({ "width": "360px" }, "fast");

                        // reset properties
                        $('#fpi_submit_loading').hide();
                        $('#fpi_content form').show()
                        $('#fpi_content form .error').removeClass("error");
                        $('#fpi_submit_submit input').removeAttr('disabled');
                        isOpen = !isOpen;
                    }
                });

            });
        }
    });
})(jQuery);

//<![CDATA[
$(document).ready(function () {
    $('#rightTab').feedBackBox();
});
// ]]>