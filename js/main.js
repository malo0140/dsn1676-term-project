var $toggle = $('.collapse');
var $panel = $('.panel');

$toggle.on('click', function () {
    $panel.toggleClass('.js-toggle');
});