// script.js
$(document).ready(function() {
    $('.burger').click(function() {
        $('.nav-links').toggleClass('nav-active');
        $('.burger').toggleClass('toggle');

        $('.nav-links li').each(function(index) {
            if ($(this).css("animation")) {
                $(this).css("animation", "");
            } else {
                $(this).css("animation", `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
            }
        });
    });
});