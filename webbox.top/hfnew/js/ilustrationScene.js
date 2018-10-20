$(document).ready(function ($) {

    TweenMax.staggerFromTo(['#lvl-1', '#lvl-2', '#lvl-3'], .8, {transformOrigin: '50% 50%', scale:0.9}, {transformOrigin: '50%' +
    ' 50%', ease: Back.easeOut.config(1.7), scale:1, repeat: -1, yoyo: true}, .1);


});