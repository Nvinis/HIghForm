

// end build part 1
// var tween_4 = new TimelineMax({delay: 1.5});
// var time_del = .4;
//
//     tween_4
//     .set(['#grid--lines', '.logo___wrap'
//
//        ], {
//         autoAlpha: 0
//     })
//
//         .set(['.val--logos1', '.val--logos2', '.val--logos3'], {y:-40, opacity:0})
//     .set(['#ourResultsPic .cls-80', '#ourResultsPic .cls-81', '#ourResultsPic .cls-82'], {transformOrigin: '50%' +
//         ' 50%',scaleY:0})
//         .set(['.pint--point circle', '.pint--point2 circle', '.pint--point3 circle'], {transformOrigin: '50% 50%', scale: 0})
//         .set(['.pint--point circle', '.pint--point2 circle', '.pint--point3 circle'], {transformOrigin: '50% 50%', scale: 0})
//
//
//
//     .to('#grid--lines', time_del, {ease: Power1.easeIn, autoAlpha:1})
//     .to('#masck--darck', 1.5, {ease: Power1.easeInOut, xPercent: 105})
//     .to(['#ourResultsPic .cls-80',  '#ourResultsPic .cls-81', '#ourResultsPic .cls-82'], .5, {scaleY:1}, '-=0.5')
//     .staggerTo('.pint--point circle', time_del, {ease: Back.easeOut.config(1.9), scale:1}, .2, '-=0.3')
//     .staggerTo('.pint--point2 circle', time_del, {ease: Back.easeOut.config(1.9), scale:1}, .2, '-=1')
//     .staggerTo('.pint--point3 circle', time_del, {ease: Back.easeOut.config(1.9), scale:1}, .2, '-=1')
//     .to('.logo___wrap', time_del*2, {ease: Power4.easeIn, autoAlpha:1}, '-=.5')
// ;


//
//
// var tween_2 = new TimelineMax({delay: 1});
// var time_del2 = .5,
//     face__1 = $('#face-item-1'),
//     face__2 = $('#face-item-2'),
//     face__3 = $('#face-item-3');
//
// tween_2
//     .set(['#lease-pic',
//         '#build-vak',
//         '#noVacancy',
//         '#magnet-pic',
//         '#magnetic-effect-top',
//         '#magnetic-effect-bot',
//         face__1,
//         face__2,
//         face__3], {
//         autoAlpha: 0,
//         transformOrigin:'50% 50%'
//     })
//     .set('#lease-pic', {scale: 0})
//     .set('#noVacancy', {y:100})
//     .set('#magnet-pic', {scale:.7})
//     .set('#magnetic-effect-top', {rotation: -15, scale: .7})
//     .set('#magnetic-effect-bot', {rotation: 15, scale: 1})
//     .set(face__1, {scale: .5, x:600})
//     .set(face__2, {scale: 1.3, x:700})
//     .set(face__3, {scale: .5, x:400, y:-60})
//
//     .to('#lease-pic', time_del2, {ease: Power1.easeIn, autoAlpha:1, scale: 1})
//     .to('#build-vak', time_del2, {ease: Power1.easeIn, autoAlpha:1}, '-='+time_del/2)
//     .to('#noVacancy', time_del2, {ease: Power1.easeIn, autoAlpha:1, y:1}, '-='+time_del/2)
//     .to('#magnet-pic', time_del2, {ease: Back.easeOut.config(4), autoAlpha:1, scale:1})
//
//     .to(['#magnetic-effect-top', '#magnetic-effect-bot'], time_del2, {ease: Power1.easeIn, autoAlpha:1},'-='+time_del*1.8)
//     .to('#magnetic-effect-top', time_del2*3, {ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),  rotation:15, scale:1, repeat: -1, yoyo: true}, 0)
//     .to('#magnetic-effect-bot', time_del2*3, {ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),  rotation:-15, scale:.8, repeat: -1, yoyo: true}, 0)
//
//     // face1
//     .to(face__1, time_del2, {ease: Power1.easeIn, autoAlpha:1}, '-='+time_del/2)
//     .to(face__1, 2, {bezier:{curviness:1.5, values:[{x:450, y:80, rotation: 0.01}, {x:200, y:-80, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, ease: Power0.easeNone}, '-=.7')
//     .to(face__1, 2, {ease: Power1.easeIn, scale: 1, onComplete:runFaceOwne}, '-=2')
//
//     // face2
//     .to(face__2, time_del2, {ease: Power1.easeIn, autoAlpha:1}, '-=2')
//     .to(face__2, 2, {bezier:{curviness:1.5, values:[{x:500, y:-80, rotation: 0.01}, {x:233, y:80, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, ease: Power0.easeNone}, '-=.7')
//     .to(face__2, 2, {ease: Power1.easeIn, scale: 1, onComplete:runFaceTwo}, '-=2')
//     // face3
//     .to(face__3, time_del2, {ease: Power1.easeIn, autoAlpha:1}, '-=2')
//     .to(face__3, 2, {bezier:{curviness:1.5, values:[{x:280, y:0, rotation: 0.01}, {x:160, y:80, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, ease: Power0.easeNone}, '-=.7')
//     .to(face__3, 2, {ease: Power1.easeIn, scale: 1, onComplete:runFaceThree}, '-=2');
//
// function runFaceOwne() {
//     TweenMax.to(face__1, 15, {bezier:{curviness:1.3, values:[{x:-14, y:-18, rotation: 0.01, scaleX:.9, scaleY:.9}, {x:12, y:-18,rotation: 0.01, scaleX:.8, scaleY:.8}, {x:12, y:0,rotation: 0.01, scaleX:.9, scaleY:.9}, {x:0, y:0,rotation: 0.01, scaleX:1, scaleY:1} ]}, repeat:-1, ease: Power0.easeNone})
// }
//
// function runFaceTwo() {
//    TweenMax.to(face__2, 18, {bezier:{curviness:2, values:[{x:-12, y:0, rotation: 0.01, scaleX:.9, scaleY:.9}, {x:-12, y:12,rotation: 0.01, scaleX:.8, scaleY:.8}, {x:12, y:12,rotation: 0.01, scaleX: 0.8, scaleY: .8}, {x:12, y:0,rotation: 0.01, scaleX:0.9, scaleY: .9}, {x:0, y:0,rotation: 0.01, scaleX:1, scaleY:1}]}, repeat:-1, ease: Power0.easeNone},0)
// }
//
// function runFaceThree() {
//     TweenMax.to(face__3, 15, {bezier:{curviness:1, values:[{x:0, y:-40,rotation: 0.01, scaleX:1.2, scaleY:1.2}, {x:-40, y:-40,rotation: 0.01, scaleX:1.3, scaleY:1.3}, {x:-40, y:0,rotation: 0.01,scaleX:1.15, scaleY:1.15}, {x:0, y:0, rotation: 0.01, scaleX:1, scaleY:1}]}, repeat:-1, ease: Power0.easeNone},0)
// }

var tween_2 = new TimelineMax();
//     time_del2 = .5;


TweenMax.set(".items-bubbles", {
    y:function(i) {
        return i * -15;
    }
});
TweenMax.set(".items-bubbles", {
    x:function(d) {
        return d * 30;
    }
});
TweenMax.set(".bbl", {
    y:function(i) {
        return i * 23;
    }

    // scale:function (z) {
    //     return z * .25;
    // }
})


// tween_2.to(".items-bubbles", 30, {
//     ease: Linear.easeNone,
//     y: "-=680",
//     scale: 1,
//     modifiers: {
//         y: function(x) {
//             return x % 680 ;
//             // return Math.random() *99;
//         }
//     },
//     repeat: -1
// })


// tween_2
//     .to(".items-bubbles", 30, {
//
//     // duration = distance / pixelsPerSecond
//
//
//         ease: Linear.easeNone,
//     y: "-=680",
//
//
//     modifiers: {
//         y: function(x) {
//             return x % 680 ;
//         }
//     },
//     repeat: -1
//
// }, 0.01)


.to(".bbl", 5, {
    ease: Linear.easeNone,
    y: "+=92",
    modifiers: {
        y: function(i) {
            return i % 92;
        }
    },
    repeat: -1
}, 0)

// .staggerFromTo('.bbl', 4, {scale:.3}, {scale:1, repeat: -1}, .2, 0 )

;


$('.inline-btn, .listener-contained').mouseenter(function(){
    var bg__line = $(this).find('.bg--line');
    var tween_l = new TimelineMax();
    tween_l
    .to(bg__line, .4, {xPercent: 100});
});

$('.inline-btn, .listener-contained').mouseleave(function(){
    var bg__line = $(this).find('.bg--line');
    var tween_l = new TimelineMax();
    tween_l

        .to(bg__line, .4, {xPercent: 400})
        .set(bg__line,  {xPercent: -110});
});

$('#dominica__logo').mouseenter(function(){
    TweenMax.staggerTo('.val--logos1', .8, {opacity:1, y:0}, .2);
});

$('#dominica__logo').mouseleave(function(){
    TweenMax.staggerTo('.val--logos1', .8, {opacity:0, y:-40}, .2);

});

$('#launch__logo').mouseenter(function(){
    TweenMax.staggerTo('.val--logos2', .8, {opacity:1, y:0}, .2);
});

$('#launch__logo').mouseleave(function(){
    TweenMax.staggerTo('.val--logos2', .8, {opacity:0, y:-40}, .2);

});

$('#wiliams__logo').mouseenter(function(){
    TweenMax.staggerTo('.val--logos3', .8, {opacity:1, y:0}, .2);
});

$('#wiliams__logo').mouseleave(function(){
    TweenMax.staggerTo('.val--logos3', .8, {opacity:0, y:-40}, .2);

});

// TweenMax.to(".items-bubbles:nth-child(even)", 6, {
//     ease: Linear.easeNone,
//     x: "+=7",
//     yoyo: true,
//     repeat: -1,
//     force3D: true
// });
// TweenMax.to(".items-bubbles:nth-child(odd)", 6, {
//         ease: Linear.easeNone,
//         x: "-=7",
//         yoyo: true,
//         repeat: -1,
//     rotation: .01,
//         force3D: true
//     })
// ;

// star.tween.set(star, { x: Math.random() * 2 - 100 });