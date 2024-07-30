$(document).ready(function () {
    $(".bxslider").bxSlider({
        pager: false,
    })
})

$(".menu").on("click", function () {
    $(".menu").toggleClass("opened")
})

