$(document).ready(function () {
    $(".bxslider").bxSlider({
        pager: false,
    })
})

$(".menu").on("click", function () {
    if( $("menu").hasClass("opened")) {
        $("menu").removeClass("opened").addClass("closed")
    }
    else {
        $("menu").removeClass("closed").addClass("opened")
    }
})

