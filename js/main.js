var $btnCollapse = $('.collapse');
var $panel = $('.panel');

var $bouncebtn = $('.bounce-btn');
var $card = $('.cardguy');

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel');
});

$bouncebtn.on('click', function () {
    $card.toggleClass('js-card');
});