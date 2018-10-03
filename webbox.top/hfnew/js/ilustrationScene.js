
// var sect_tween = new TimelineMax()
//
//     .set('#header-mask-bg', {className: '-=loading'})
//
//     .staggerFromTo('#line-to-left-1 path', 1, {drawSVG:"0%"}, {drawSVG:"50% 50%"}, 0.5)
// ;
//
// var scene = new ScrollMagic.Scene({
//     triggerElement: "#brokers",
//     triggerHook: trigerPosition
//     // duration: "100%"
//
// })
//
//     .setTween(sect_tween)
//     .addIndicators({name: "section1 ", colorStart: "#FFFFFF", colorTrigger:"#245af4"})
//     .addTo(controller);

// end build part 1
var tween_4 = new TimelineMax({delay: 2});
var time_del = .4;

    tween_4
    .set(['#circle-w-man-inside',
        '#screen-wrap',
        '#line-to-left-1',
        '#line-to-right-1',
        '#sold-house',
        '#line-to-down-1',
        '#results-arrow',
        '#hamburger-pic'], {
        autoAlpha: 0,
        transformOrigin:'50% 50%'
    })
    .set('#circle-w-man-inside', {x: -100, y: 30})
    .set('#line-to-left-1', {y: 90})
    .set('#line-to-right-1', {x: -150})
    .set('#sold-house', {scale: 0})
    .set('#line-to-down-1', {x: -140, rotationX: 160})
    .set('#hamburger-pic', {scale:0, x:-300})


    .to('#circle-w-man-inside', time_del, {ease: Power1.easeIn, autoAlpha:1, x:0, y:0})
    .to('#line-to-left-1', time_del, {ease: Power1.easeIn, autoAlpha:1, y:0}, '-='+time_del/2)
    .to('#screen-wrap', time_del, {ease: Power1.easeIn, autoAlpha:1}, '-='+time_del/2)
    .to('#line-to-right-1', time_del, {ease: Power1.easeIn, autoAlpha:1, x:0}, '-='+time_del/2)
    .to('#sold-house', time_del, {ease: Back.easeOut.config(2), autoAlpha:1, scale:1}, '-='+time_del/4)
    .to('#line-to-down-1', time_del, {ease: Power1.easeIn ,autoAlpha:1, x:0}, '-='+time_del/2.5)
    .to('#results-arrow', time_del, {ease: Power1.easeIn, autoAlpha:1}, '-='+time_del/3.5)
    .to('#hamburger-pic', time_del, {ease: Power1.easeIn, autoAlpha:1,scale:1,x:0},'-='+time_del/2);


var tween_2 = new TimelineMax({delay: 1});
var time_del2 = .5,
    face__1 = $('#face-item-1'),
    face__2 = $('#face-item-2'),
    face__3 = $('#face-item-3');

tween_2
    .set(['#lease-pic',
        '#build-vak',
        '#noVacancy',
        '#magnet-pic',
        '#magnetic-effect-top',
        '#magnetic-effect-bot',
        face__1,
        face__2,
        face__3], {
        autoAlpha: 0,
        transformOrigin:'50% 50%'
    })
    .set('#lease-pic', {scale: 0})
    .set('#noVacancy', {y:100})
    .set('#magnet-pic', {scale:.7})
    .set('#magnetic-effect-top', {rotation: -15, scale: .7})
    .set('#magnetic-effect-bot', {rotation: 15, scale: 1})
    .set(face__1, {scale: .5, x:600})
    .set(face__2, {scale: 1.3, x:700})
    .set(face__3, {scale: .5, x:400, y:-60})

    .to('#lease-pic', time_del2, {ease: Power1.easeIn, autoAlpha:1, scale: 1})
    .to('#build-vak', time_del2, {ease: Power1.easeIn, autoAlpha:1}, '-='+time_del/2)
    .to('#noVacancy', time_del2, {ease: Power1.easeIn, autoAlpha:1, y:1}, '-='+time_del/2)
    .to('#magnet-pic', time_del2, {ease: Back.easeOut.config(4), autoAlpha:1, scale:1})

    .to(['#magnetic-effect-top', '#magnetic-effect-bot'], time_del2, {ease: Power1.easeIn, autoAlpha:1},'-='+time_del*1.8)
    .to('#magnetic-effect-top', time_del2*3, {ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),  rotation:15, scale:1, repeat: -1, yoyo: true}, 0)
    .to('#magnetic-effect-bot', time_del2*3, {ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),  rotation:-15, scale:.8, repeat: -1, yoyo: true}, 0)

    // face1
    .to(face__1, time_del2, {ease: Power1.easeIn, autoAlpha:1}, '-='+time_del/2)
    .to(face__1, 2, {bezier:{curviness:1.5, values:[{x:450, y:80, rotation: 0.01}, {x:200, y:-80, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, ease: Power0.easeNone}, '-=.7')
    .to(face__1, 2, {ease: Power1.easeIn, scale: 1, onComplete:runFaceOwne}, '-=2')

    // face2
    .to(face__2, time_del2, {ease: Power1.easeIn, autoAlpha:1}, '-=2')
    .to(face__2, 2, {bezier:{curviness:1.5, values:[{x:500, y:-80, rotation: 0.01}, {x:233, y:80, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, ease: Power0.easeNone}, '-=.7')
    .to(face__2, 2, {ease: Power1.easeIn, scale: 1, onComplete:runFaceTwo}, '-=2')
    // face3
    .to(face__3, time_del2, {ease: Power1.easeIn, autoAlpha:1}, '-=2')
    .to(face__3, 2, {bezier:{curviness:1.5, values:[{x:280, y:0, rotation: 0.01}, {x:160, y:80, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, ease: Power0.easeNone}, '-=.7')
    .to(face__3, 2, {ease: Power1.easeIn, scale: 1, onComplete:runFaceThree}, '-=2');

function runFaceOwne() {
    TweenMax.to(face__1, 15, {bezier:{curviness:1.3, values:[{x:-14, y:-18, rotation: 0.01, scaleX:.9, scaleY:.9}, {x:12, y:-18,rotation: 0.01, scaleX:.8, scaleY:.8}, {x:12, y:0,rotation: 0.01, scaleX:.9, scaleY:.9}, {x:0, y:0,rotation: 0.01, scaleX:1, scaleY:1} ]}, repeat:-1, ease: Power0.easeNone})
}

function runFaceTwo() {
   TweenMax.to(face__2, 18, {bezier:{curviness:2, values:[{x:-12, y:0, rotation: 0.01, scaleX:.9, scaleY:.9}, {x:-12, y:12,rotation: 0.01, scaleX:.8, scaleY:.8}, {x:12, y:12,rotation: 0.01, scaleX: 0.8, scaleY: .8}, {x:12, y:0,rotation: 0.01, scaleX:0.9, scaleY: .9}, {x:0, y:0,rotation: 0.01, scaleX:1, scaleY:1}]}, repeat:-1, ease: Power0.easeNone},0)
}

function runFaceThree() {
    TweenMax.to(face__3, 15, {bezier:{curviness:1, values:[{x:0, y:-40,rotation: 0.01, scaleX:1.2, scaleY:1.2}, {x:-40, y:-40,rotation: 0.01, scaleX:1.3, scaleY:1.3}, {x:-40, y:0,rotation: 0.01,scaleX:1.15, scaleY:1.15}, {x:0, y:0, rotation: 0.01, scaleX:1, scaleY:1}]}, repeat:-1, ease: Power0.easeNone},0)
}