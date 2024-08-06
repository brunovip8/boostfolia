$(document).ready(function () {
    $(".bxslider").bxSlider({
        pager: false,
    })

    function setEqualHeight(selector) {
        let maxHeight = 0;
        $(selector).each(function() {
            console.log($(this).height);
            if($(this).height()>maxHeight) {
                maxHeight = $(this).height()
            }
        })

    }
    $(selector).height(maxHeight)

    $(".bxslider__team").bxSlider({
        controls: false,
        onSliderLoad: function () {
            setEqualHeigh("ul.bxslider__team > li >div.teamslider")
        },
        onSliderAfter: function () {
            setEqualHeigh("ul.bxslider__team > li >div.teamslider")
        }
    })
})

$(".menu").on("click", function () {
    if( $(".menu").hasClass("opened")) {
        $(".menu").removeClass("opened").addClass("closed")
    }
    else {
        $(".menu").removeClass("closed").addClass("opened")
    }
})

