$(window).load(function () {
    $(".loader").fadeOut("slow");
    setTimeout(function () {
        $("#prim_img").addClass("animated zoomInDown");
        $("#contact").addClass("animated zoomIn");
        $("#prim_img").show();
        $("#contact").show();
    }, 1000);
    setTimeout(function () {
        $("#cv-link").addClass("animated tada");
        $("#cv-link").show();
    }, 2000);
});