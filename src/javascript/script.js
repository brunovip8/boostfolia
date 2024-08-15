$(window).on("load", function () {
    $(".preloader").fadeOut("slow")
})

$(document).ready(function () {
    $(".bxslider").bxSlider({
        pager: false,
    });

    function setEqualHeight(selector) {
        let maxHeight = 0;
        $(selector).each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height()
            }
            $(selector).height(maxHeight);
        });
    }
    $(".bxslider__team").bxSlider({
        controls: false,
        // onSliderLoad: function() {
        //     setEqualHeight("ul.bxslider__team > li")
        // },
        // onSliderAfter: function () {
        //     setEqualHeight("ul.bxslider__team > li")
        // },

    })
});
$(".flexslider").flexslider({
    animation: "slider",
    animationLoop: false,
    itemWidth: 400,
    itemMargin: 25,
    touch: true,
})
$(".accordion").accordion({
    defaultOpen: '',
    collapsible: true,

});
if ($(window).scrollTop() > 0) {
    $(".header").addClass("is-fixed");
}

let options = {
    threshold: 0.8,
}

let callback = function(entries, observer) {
    entries.forEach(function(entry){
        console.log(entry);
        if(entry.isIntersecting) {
            $(entry.target).addClass("animate__animated").addClass("animate__fadeInRight")
        }
    })
}

let observer = new IntersectionObserver(callback, options)

observer.observe($(".about__title")[0])

let mixer = mixitup(".workportfolio", {
    selectors: {
        target: ".work",
    }



});
$(".navigation").on("click", function () {
    $(".menu").removeClass("opened").addClass("closed");
    $(".navigation").toggleClass("menu-opened");
});
$(".menu").on("click", function () {
    if ($(".menu").hasClass("opened")) {
        $(".menu").removeClass("opened").addClass("closed");
        $(".navigation").removeClass("menu-opened");
        $("body").css({
            overflowY: "auto",
        });
    }
    else {
        $(".menu").removeClass("closed").addClass("opened");
        $(".navigation").addClass("menu-opened");
        $("body").css({
            overflowY: "hidden",
        })

    }

});




let heightOfHeader = $(".header").height();

$(window).on("scroll", function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() >= heightOfHeader / 2) {
        $(".header").addClass("is-fixed");
    }
    else {
        $(".header").removeClass("is-fixed");
    }

    $(".progress-page").css({
        width: $(window).scrollTop() / ($(document).height() - $(window).height()) * 100 + "%",
    })
});