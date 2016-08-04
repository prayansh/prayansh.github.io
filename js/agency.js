/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


var duration = 800;
function toggleHeaderAnimation() {

    $('.dsc_1').fadeOut(duration);
    setTimeout(function () {
        $('.dsc_2').removeClass('hidden');
        $('.dsc_2').fadeIn(duration);
        setTimeout(function () {
            $('.dsc_2').fadeOut(duration);
            setTimeout(function () {
                $('.dsc_3').removeClass('hidden');
                $('.dsc_3').fadeIn(duration);
                setTimeout(function () {
                    $('.dsc_3').fadeOut(duration);
                    setTimeout(function () {
                        type();
                    }, duration);
                }, duration);
            }, duration);
        }, duration);
    }, duration);

}


// http://jsfiddle.net/creed88/VG8MJ/1/
var str = "Hey there!!";
var i = 0, isTag, text;
function type() {
    text = str.slice(0, ++i);
    if (text == str) return;

    document.getElementById('intro').innerHTML = text;

    var char = text.slice(-1);
    if (char === '<') isTag = true;
    if (char === '>') isTag = false;

    if (isTag) return type();
    setTimeout(type, 100);
}

$(window).load(function () {
    toggleHeaderAnimation();
});