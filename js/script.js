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

$(function(){
    var value2upd = function(){
        var w = $(window).width();
        return w < 767 ? "zoom-in" : "zoom-out";
    };

    $(window).resize(function(){
        $('.subtitle-quienes-somos').attr('data-aos', value2upd);
    }).resize();
});

function openNav() {
    var w = $(window).width();
    if (w < 768) {
        document.getElementById("mySidenav").style.width = "100vw";
    } else if (w < 1024) {
        document.getElementById("mySidenav").style.width = "70vw";
    } else {
        document.getElementById("mySidenav").style.width = "40vw";
    }
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}