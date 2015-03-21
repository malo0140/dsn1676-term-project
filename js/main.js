var $btnCollapse = $('.collapse');
var $panel = $('.panel');

var $btnFade = $('.fade');
var $quote = $('.quote');

var $BtnFadeIn = $('.fadein');
var $late = $('.late');

var $btnFadeText = $('.fadetext');
var $knob = $('.knob');

var $btnShowHide = $('.showhide');
var $cat = $('.cat');

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel');
});

$btnFade.on('click', function () {
    $quote.toggleClass('js-fade');
});

$BtnFadeIn.on('click', function () {
    $late.toggleClass('js-fadein');
});

$btnFadeText.on('click', function () {
    $knob.toggleClass('js-fadetext');
    
});

$btnShowHide.on('click', function () {
    $cat.toggleClass('js-showhide');
    
});
