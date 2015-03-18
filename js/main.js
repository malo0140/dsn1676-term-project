var $toggle = $('.togglekey');
var $box = $('.box');

$toggle.on('click', function () {
    $box.toggleClass('.js-toggle');
});