var $showHide = $('.btn-show-hide');
var $box = $('.box');

$showHide.on('click', function () {
    $box.toggleClass('.js-toggle');
});