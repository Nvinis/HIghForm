$(document).ready(function ($) {
    // scroll menu
    var lastId,
        topMenu = $('#nav'),
        topMenuHeight = topMenu.outerHeight() -300, //+90
        menuItems = topMenu.find('a'),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr('href'));
            if (item.length) { return item; }
        });
    console.log(topMenuHeight);

    menuItems.click(function(e){
        var href = $(this).attr('href'),
            offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1200);
        e.preventDefault();
    });

    // wow
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();
    //end wow


    var controller = new ScrollMagic.Controller(),
        trigerPosition = .7,
        sectoins = $('.section-content'),
        mainObject = $('#main'),
        text_Fields = ['#b__8', '#b__7', '#b__6', '#b__5', '#b__4', '#b__3', '#b__2', '#b__1'],  // logo letters
        time_del = .4, // time for brokess picture
        time_del2 = .5, // time for multifamily picture
        // multifamily pictures items
        face__1 = $('#face-item-1'),
        face__2 = $('#face-item-2'),
        face__3 = $('#face-item-3');
        //end multifamily pictures items

    // build tween logo
    var logo_tween = new TimelineMax()
        .staggerTo(text_Fields, .1, {autoAlpha:0}, .05)
        .to('#g5210', .5, {ease: Power0.easeNone, x:-127}, '-=.45');

    var scene_logo = new ScrollMagic.Scene({
        triggerElement: "#logo-triger",
        triggerHook: 0
    })
        .setTween(logo_tween)
        // .addIndicators({name: "logo", colorStart: "#FFFFFF", colorTrigger:"#245af4"})
        .addTo(controller);
    // end build logo


    // build tween part 1
    var sect_tween = new TimelineMax()
        .to(mainObject, .01, {className:"+=blue-bg"})
        .to('.brokers-li', .01, {className:"+=active"})
        .to([sectoins, '.items-bubbles-wrap'], .15, {autoAlpha:'0'}, '0')
        .to('#brokers .section-content', .4, {autoAlpha:'1'}, '0')
        // .set('#header-mask-bg', {className: '-=loading'})
    ;

    var scene = new ScrollMagic.Scene({
        triggerElement: "#brokers",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween)
        .addIndicators({name: "section1 ", colorStart: "#FFFFFF", colorTrigger:"#245af4"})
        .addTo(controller);

    // end build part 1

    // build tween part 1.2
    var sect_tween1_12 = new TimelineMax()
        .to('#header-mask-bg', .1, {autoAlpha:'0'});


    var scene1_12 = new ScrollMagic.Scene({
        triggerElement: "#brokers",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween1_12)
        .addIndicators({name: "section1 content", colorStart: "#FFFFFF", colorTrigger:"#245af4"})
        .addTo(controller);

    // end build part 1.2



    // build tween brokers picture
    var brokers_picture = new TimelineMax()
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


    var brokers__picture = new ScrollMagic.Scene({
        triggerElement: "#brokersPic",
        triggerHook: .7
    })

    .setTween(brokers_picture)
    .addIndicators({name: "brokers picture", colorStart: "#FFFFFF", colorTrigger:"#ffffff"})
    .reverse(false)
    .addTo(controller);

    // build tween brokers picture



    // build tween part 1.1
    // var sect_tween1_1 = new TimelineMax()
    //
    //
    //     // .to('#brokers h2', 1, {ease: Power2.easeOut, y:0})
    //     // .to('#brokers p', 1, {ease: Power2.easeInOut, y:0}, '-=.5')
    //     // .to('#brokers .inline-btn', 1, {ease: Power2.easeInOut, y:0}
    //
    //
    //     // .staggerTo(objects_broker_section, 1, {ease: Power2.easeOut, y:0}, '.5');
    //
    //
    // var scene1_1 = new ScrollMagic.Scene({
    //     triggerElement: "#brokers",
    //     triggerHook: trigerPosition
    //
    // })
    //
    //     .setTween(sect_tween1_1)
    //     .addIndicators({name: "section1 content", colorStart: "#FFFFFF", colorTrigger:"#245af4"})
    //     // .reverse(false)
    //     .addTo(controller);

    // end build part 1.1



    // build tween part 2
    var sect_tween2 = new TimelineMax()
        .to(mainObject, .01, {className:"-=blue-bg"})
        .to(mainObject, .01, {className:"+=dark-bg"})
        .to('.brokers-li ', .01, {className:"-=active"})
        .to('.multifamily-li ', .01, {className:"+=active"})
        .to(sectoins, .3, {autoAlpha:'0'}, '0')
        .to('#multifamily .section-content', .3, {autoAlpha:'1'}, '0')

    ;


    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#multifamily",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween2)
        .addIndicators({name: "section2",colorStart: "#FFFFFF"})
        .addTo(controller);

    // end build part 2

    // build tween multifamily picture
    // var multifamily_picture = new TimelineMax()
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
    //     TweenMax.to(face__2, 18, {bezier:{curviness:2, values:[{x:-12, y:0, rotation: 0.01, scaleX:.9, scaleY:.9}, {x:-12, y:12,rotation: 0.01, scaleX:.8, scaleY:.8}, {x:12, y:12,rotation: 0.01, scaleX: 0.8, scaleY: .8}, {x:12, y:0,rotation: 0.01, scaleX:0.9, scaleY: .9}, {x:0, y:0,rotation: 0.01, scaleX:1, scaleY:1}]}, repeat:-1, ease: Power0.easeNone},0)
    // }
    //
    // function runFaceThree() {
    //     TweenMax.to(face__3, 15, {bezier:{curviness:1, values:[{x:0, y:-40,rotation: 0.01, scaleX:1.2, scaleY:1.2}, {x:-40, y:-40,rotation: 0.01, scaleX:1.3, scaleY:1.3}, {x:-40, y:0,rotation: 0.01,scaleX:1.15, scaleY:1.15}, {x:0, y:0, rotation: 0.01, scaleX:1, scaleY:1}]}, repeat:-1, ease: Power0.easeNone},0)
    // }
    //
    // var multifamily__picture = new ScrollMagic.Scene({
    //     triggerElement: "#multifamilyPic",
    //     triggerHook: .7
    //
    // })
    //
    //     .setTween(multifamily_picture)
    //     .addIndicators({name: "multifamily picture", colorStart: "#FFFFFF", colorTrigger:"#ffffff"})
    //     .reverse(false)
    //     .addTo(controller);

    // build tween multifamily picture




    // build tween part 3
    var sect_tween3 = new TimelineMax()
        .to(mainObject, .01, {className:"-=dark-bg"})
        .to(mainObject, .01, {className:"+=white-bg"})
        .to('.multifamily-li', .01, {className:"-=active"})
        .to('.products-li', .01, {className:"+=active"})

        // .to(mainObject, .001, {background:'#ffffff'})
        .to(sectoins, .3, {autoAlpha:'0'}, '0')
        .to('#products .section-content', .3, {autoAlpha:'1'}, '0')
        .to('#nav li  a', .05, {color: '#01173a'});


    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#products",
        triggerHook: trigerPosition

    })

        .setTween(sect_tween3)
        .addIndicators({name: "section3", colorStart: "#ffffff", colorTrigger:"#000000"})
        .addTo(controller);

    // end build part 3



    // build tween part 4 about Section
    var sect_tween4 = new TimelineMax()
        .to(mainObject, .01, {className:"-=white-bg"})
        .to(mainObject, .01, {className:"+=dark-bg"})
        // .to(mainObject, .001, {background:'#040419'})
        .to(sectoins, .3, {autoAlpha:'0'}, '0')
        .to('#about .section-content', .3, {autoAlpha:'1'}, '0')
        .to('#nav li  a', .05, {color: '#ffffff'});



    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween4)
        .addIndicators({name: "section4",colorStart: "#fff", colorTrigger:"#ffffff"})
        .addTo(controller);

    // end build part 4 about Section






    // build tween part 4 about pic
    var sect_tween4Pic = new TimelineMax()

        .set(['#grid--lines', '.logo___wrap'], {
            autoAlpha: 0
        })

        .set(['.val--logos1', '.val--logos2', '.val--logos3'], {y:-40, opacity:0})
        .set(['#ourResultsPic .cls-80', '#ourResultsPic .cls-81', '#ourResultsPic .cls-82'], {transformOrigin: '50%' +
        ' 50%',scaleY:0})
        .set(['.pint--point circle', '.pint--point2 circle', '.pint--point3 circle'], {transformOrigin: '50% 50%', scale: 0})
        .set(['.pint--point circle', '.pint--point2 circle', '.pint--point3 circle'], {transformOrigin: '50% 50%', scale: 0})



        .to('#grid--lines', time_del, {ease: Power1.easeIn, autoAlpha:1})
        .to('#masck--darck', 1.5, {ease: Power1.easeInOut, xPercent: 105})
        .to(['#ourResultsPic .cls-80',  '#ourResultsPic .cls-81', '#ourResultsPic .cls-82'], .5, {scaleY:1}, '-=0.5')
        .staggerTo('.pint--point circle', time_del, {ease: Back.easeOut.config(1.9), scale:1}, .2, '-=0.3')
        .staggerTo('.pint--point2 circle', time_del, {ease: Back.easeOut.config(1.9), scale:1}, .2, '-=1')
        .staggerTo('.pint--point3 circle', time_del, {ease: Back.easeOut.config(1.9), scale:1}, .2, '-=1')
        .to('.logo___wrap', time_del*2, {ease: Power4.easeIn, autoAlpha:1}, '-=.5');


    var scene4Pic = new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: .5
    })

        .setTween(sect_tween4Pic)
        .addTo(controller);

    // end build part 4 about pic








    // build tween part 5 our-news Section
    var sect_tween5 = new TimelineMax()
        .to(mainObject, .01, {className:"-=dark-bg"})
        .to(mainObject, .01, {className:"+=white-bg"})
        // .to(mainObject, .001, {background:'#ffffff'})
        .to(sectoins, .3, {autoAlpha:'0'}, '0')
        .to('#our-news .section-content', .3, {autoAlpha:'1'}, '0')
        .to('#nav li  a', .05, {color: '#01173a'});


    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#our-news",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween5)
        .addIndicators({name: "section4",colorStart: "#fff", colorTrigger:"#ffffff"})
        .addTo(controller);

    // end build part 5 our-news Section



    // build tween part 6 our Team Section
    var sect_tween6 = new TimelineMax()
        .to(mainObject, .01, {className:"-=white-bg"})
        .to(mainObject, .01, {className:"+=light-bg"})
        // .to(mainObject, .001, {background:'#f4f7f9'})
        .to(sectoins, .3, {autoAlpha:'0'}, '0')
        .to('#our-team-section .section-content', .3, {autoAlpha:'1'}, '0')
        .to('#nav li  a', .05, {color: '#01173a'});



    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#our-team-section",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween6)
        .addIndicators({name: "section4",colorStart: "#fff", colorTrigger:"#ffffff"})
        .addTo(controller);

    // end build part 6 our Team Section



    // build tween part 7 footer Section

    var sect_tween7 = new TimelineMax()
        // .to(mainObject, .001, {background:'#f4f7f9'})
        .to(sectoins, .3, {autoAlpha:'0'}, '0')
        .to('#footer .section-content', .3, {autoAlpha:'1'}, 0)
        .to('#nav li  a', .05, {color: '#01173a'})
        .to('body', .01, {className:"+=tight"}, 0);



    var scene7 = new ScrollMagic.Scene({
        triggerElement: "#footer",
        triggerHook: .95
    })

        .setTween(sect_tween7)
        .addIndicators({name: "footer",colorStart: "#000", colorTrigger:"#000"})
        .addTo(controller);

    // end build part 7 footer Section

    // build tween part 8 footer Section
    var mySplitText = new SplitText("#quoteh2", {type:"words,chars"}),
        chars = mySplitText.chars;

    var sect_tween8 = new TimelineMax()

        .set("#quoteh2", {perspective:400})
        .staggerFrom(chars, 1.2, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.05, '0');

    var scene8 = new ScrollMagic.Scene({
        triggerElement: "#footer",
        triggerHook: .95,
        reverse: false
    })

        .setTween(sect_tween8)
        .addTo(controller);

    // end build part 7 footer Section



    $('.listener-contained').plate({
        element: '.plate-contained',
        maxRotation: 5,
        animationDuration: 300

    });

    // $(".listener-contained").hover3d({
    //     selector: ".project__card",
    //     shine: false,
    //     sensitivity: 25,
    //
    // });

    // prew client
    $('#prew-client-owl').owlCarousel({
        items:1,
        loop:true,
        margin : 0,
        nav: false,
        autoplay: true,
        smartSpeed : 2000,
        autoplayTimeout : 5000

    });

    // prew client
    $('#news-carousel').owlCarousel({
        // items:1,
        loop:false,
        margin : 0,
        nav: false,
        autoplay: false,
        smartSpeed : 1500
    });

    // var sMenu_height = fu $('.sub-menu');
    //
    // $('.sub-menu').each(function() {
    //     var sMenu_height = $(this).height();
    //
    //     $(this).height(sMenu_height);
    //     console.log(sMenu_height);
    // });


});


// $(window).on("load resize",function(){
//     var width = $(window).width();
//
//     if (width >= 900 ) {
//         $('#sticky-menu').css({
//             'display': 'flex'
//         })
//     }
//
// });
