$(document).ready(function () {
    $(".bxslider").bxSlider({
        pager: false,
    })

    function setEqualHeight(selector) {
        let maxHeight = 0;
        $(selector).each(function () {
            console.log($(this).height);
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height()
            }
        })
        $(selector).height(maxHeight)
    }

    $(".bxslider__team").bxSlider({
        controls: false,
        onSliderLoad: function () {
            setEqualHeight("ul.bxslider__team > li >div.teamslider")
        },
        onSliderAfter: function () {
            setEqualHeight("ul.bxslider__team > li >div.teamslider")
        }
    })

    $(".flexslider").flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 400,
        itemMargin: 25,
        touch: true,
    })
})

$(".menu").on("click", function () {
    if ($(".menu").hasClass("opened")) {
        $(".menu").removeClass("opened").addClass("closed")
    }
    else {
        $(".menu").removeClass("closed").addClass("opened")
    }
})

