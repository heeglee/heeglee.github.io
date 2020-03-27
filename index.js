$(document).ready(function(e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');

    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    $win.resize(function() {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e) {
        $navbar.toggleClass("toggle-left");
    });
});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: 0 });
    }
};

// typed.js
var typed = new Typed("#typed", {
    strings: [
        'A Front-end Web Developer',
        'A Software Developer',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});