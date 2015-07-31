$(window).load(function () {
    $(".loader").fadeOut("slow");
    setTimeout(function () {
        $("#prim_img").addClass("animated zoomInDown");
        $("#contact").addClass("animated zoomIn");
    }, 1000);
    setTimeout(function () {
        $("#resume").addClass("animated bounce");
    }, 2000);
});