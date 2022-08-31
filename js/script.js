$(function () {
    'use strict';
    var view = $(window).height();
    $('.part')
        .height(view)
        .scrollie({
            scrollOffset: -10,
            scrollingInView: function (elem) {
                var bgColor = elem.data('background');
                $('body').css('background-color', bgColor);
            }
        });
});

$(document).ready(function() {
    function toggleSidebar() {
        $(".button").toggleClass("active");
        $("main").toggleClass("move-to-left");
        $(".sidebar-item").toggleClass("active");
    }

    $(".button").on("click", function() {
        toggleSidebar();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            toggleSidebar();
        }
    });
});

$(function(){
    var value2upd = function(){
        var w = $(window).width();
        return w < 767 ? "zoom-in" : "zoom-out";
    };

    $(window).resize(function(){
        $('.subtitle-quienes-somos').attr('data-aos', value2upd);
    }).resize();
});
