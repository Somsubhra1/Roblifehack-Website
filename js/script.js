$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    typed();
});

var typed = new Typed('.blink', {
    strings: ["Community"],
    typeSpeed: 150,
});
