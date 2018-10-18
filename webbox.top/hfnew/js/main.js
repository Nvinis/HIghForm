$(document).ready(function ($) {
    // scroll menu

    var $viewport_H = $(window).height();
    var $viewport_W = $(window).width();
    if ($viewport_W <= 800) {
        var corections_height_menu = 110
    } else {
        var corections_height_menu = 0
    }

    var lastId,
        topMenu = $('#nav'),
        topMenuHeight = topMenu.outerHeight() - $viewport_H / 3 - corections_height_menu,
        menuItems = topMenu.find('a'),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr('href'));
            if (item.length) { return item; }
        });

    menuItems.click(function(e){
        var href = $(this).attr('href'),
            offsetTop = href === '#' ? 0 : $(href).offset().top + topMenuHeight;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1000);

        console.log(offsetTop);
        return false

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
    // end wow


    var controller = new ScrollMagic.Controller(),
        trigerPosition = .7,
        sectoins = $('.section-content'),
        mainObject = $('#main'),
        text_Fields = ['#b__8', '#b__7', '#b__6', '#b__5', '#b__4', '#b__3', '#b__2', '#b__1'],  // logo letters
        time_del = .4; // time for brokess picture
        // multifamily pictures items

        //end multifamily pictures items

    var tween_2 = new TimelineMax();




    tween_2.set(".bbl", {
            y: function (i) {
                return i * 23;
            }
        })

        .set(sectoins, {autoAlpha:0});

        if ($viewport_W >= 700) {
            TweenMax.set(".items-bubbles", {
                y: function (i) {
                    return i * -7.2;
                }
            });

            TweenMax.set(".items-bubbles", {
                x: function (x) {
                    return x * 230;
                },
                modifiers: {
                    x: function (x) {
                        return x % 3100;
                    }
                }
             });


        } else {
            TweenMax.set(".items-bubbles", {
                y: function (i) {
                    return i * -8;
                }
            });

            TweenMax.set(".items-bubbles", {
                x: function (x) {
                    return x * 90;
                },
                modifiers: {
                    x: function (x) {
                        return x % 800;
                    }
                }
            });
            $('#logo--wrapper').prependTo('.top-content-wrap');
        }








    // TweenMax.staggerTo('.items-bubbles', 1, {ease: Back.easeOut.config(2), scale:1, autoAlpha:1}, .01);


    var spotsAll = $('.items-bubbles');

    var staggerBubbles = new TimelineMax();
    staggerBubbles.add(spotsIn());

    function spotsIn() {

        var childBubbles = new TimelineLite();
        childBubbles.staggerTo(spotsAll, .5, {
            ease: Back.easeOut.config(2), scale: 1, autoAlpha: 1,
            cycle: {
                delay: function () {
                    return Math.random() * 1;
                }
            }
        });

        return childBubbles;
    }

    if ($viewport_W >= 800) {
        var masck_darck_del = 1.5;
        var tween_bbl = new TimelineMax();

        tween_bbl.to(".bbl", 5, {
            ease: Linear.easeNone,
            y: "+=92",
            modifiers: {
                y: function (i) {
                    return i % 92;
                }
            },
            repeat: -1
        }, 0);

    TweenMax.to('.bubbles--wrap', 3, {ease: Power0.easeNone, y: -70});

    var bubbles_item_Tween = TweenMax.to(".items-bubbles", 40, {
        ease: Linear.easeNone,
        y: "-=690",
        modifiers: {
            y: function (x) {
                return x % 690;
            }
        },
        repeat: -1, delay: 3
    });

    } else {
        TweenMax.to('.items-bubbles', 1, {autoAlpha: 0.3, delay:1.5});

        TweenMax.set(['.logo___wrap', '.cls-832', ], {transformOrigin:"50% 50%", scale:3});
        TweenMax.set(['.val--logos2', '.cl' ], {scale:3});
        TweenMax.set(['#logo-dominic', '#dominica__logo'], {xPercent: -100});
        TweenMax.set(['#wiliams__logo', '#wiliams_logo'], {xPercent: 100});
        TweenMax.set(['#launch__logo', '#launch_logo'], {yPercent: -100});
        var masck_darck_del = 0.8;

    }

    //

    $('.inline-btn, .hover-for-js-btn').mouseenter(function () {
        var bg__line = $(this).find('.bg--line');
        TweenLite.to(bg__line, .4, {xPercent: 100});
    });

    $('.inline-btn, .hover-for-js-btn').mouseleave(function () {
        var bg__line = $(this).find('.bg--line');
        var tween_l = new TimelineMax();
        tween_l
            .to(bg__line, .4, {xPercent: 400})
            .set(bg__line, {xPercent: -110});
    });

    $('#dominica__logo').mouseenter(function () {
        TweenMax.staggerFromTo('.val--logos1', .8, {y: -40}, {opacity: 1, y: 0}, .2);
    });

    $('#dominica__logo').mouseleave(function () {
        TweenMax.staggerTo('.val--logos1', .8, {opacity: 0}, .2)

    });

    $('#launch__logo').mouseenter(function () {
        TweenMax.staggerFromTo('.val--logos2', .8, {y: -40}, {opacity: 1, y: 0}, .2);
    });

    $('#launch__logo').mouseleave(function () {
        TweenMax.staggerTo('.val--logos2', .8, {opacity: 0}, .2)

    });

    $('#wiliams__logo').mouseenter(function () {
        TweenMax.staggerFromTo('.val--logos3', .8, {y: -40}, {opacity: 1, y: 0}, .2);
    });

    $('#wiliams__logo').mouseleave(function () {
        TweenMax.staggerTo('.val--logos3', .8, {opacity: 0}, .2)

    });

    var begin_tl_bbls = new TimelineMax({delay: 1});
    begin_tl_bbls
        .fromTo('#first-text', .5, {y: 30}, {ease: Back.easeOut.config(2.5), autoAlpha: 1, y: 0}, '+=.7')
        .to(['#header-mask-bg', '#logo--wrapper'], 1, {autoAlpha: 1}, '+=1')
        .to('.items-bubbles-wrap', 1, {backgroundPositionY: 0}, '-=1')
        .to('#first-text', .5, {ease: Back.easeIn.config(2.5), autoAlpha: 0, y: -120}, '-=1')
        .to('#header .hero-title', .5, {ease: Back.easeOut.config(2.5), autoAlpha: 1, y: -120}, '-=0.1')
        .staggerTo(['.wrap-bbls-to-down', '#header .sub-title', '.header-man-icon'], 0.4, {
            ease: Power2.easeOut,
            autoAlpha: 1
        }, 0.12);


    setTimeout(function () {
        $('#header-mask-bg').addClass('transition1s');
    }, 4000);



    // build tween logo
    var logo_tween = new TimelineMax()
        // .staggerTo(text_Fields, .1, {autoAlpha:0}, .05)
        .to('#logo-text', .5, {autoAlpha:0})
        .to('#g5210', .8, {ease: Power3.easeIn, x:-137}, '-=0.6')
        .to('#g5210', 0.1, {className: '+=logo-dellay'}, '+=.7');

    var scene_logo = new ScrollMagic.Scene({
        triggerElement: "#logo-triger",
        triggerHook: 0
    })
        .setTween(logo_tween)
        // .addIndicators({name: "logo", colorStart: "#FFFFFF", colorTrigger:"#245af4"})
        .addTo(controller);
    // end build logo




    var win_height = $(window).height() / 3.33;

    // build tween bbls hide
    var tween_bbls = new TimelineMax()
        .to('#header', 1, {ease: Power1.easeIn, autoAlpha:'0'});

    var scene_bbls = new ScrollMagic.Scene({
            triggerElement: "#main",
            triggerHook: 0,
            duration: win_height
        })
            .setTween(tween_bbls)
            .addTo(controller);

    // end build bbls hide

    // build tween part 1
    var sect_tween = new TimelineMax()
        .to('.esef', .3, {autoAlpha:'1'})
        .to('#header-mask-bg',  0.1, {className:"+=transparent-mask"}, 0)
        .to(['#brokers-li', '#brokers'], 0.1, {className:"+=active"}, 0);

    new ScrollMagic.Scene({
        triggerElement: "#brokers",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween)
        .removeClassToggle()
        .setClassToggle('#main', 'blue-bg')
        .on("leave", function () {
            if ($viewport_W >= 800) {
                bubbles_item_Tween.resume();
                tween_bbl.resume();
                // console.log('resume/ to Up');
            }
        })
        .on("enter", function () {
            if ($viewport_W >= 800) {
                bubbles_item_Tween.pause();
                tween_bbl.pause();
                // console.log('pause/ to down');
            }
        })
        // .addIndicators({name: "section1 ", colorStart: "#FFFFFF", colorTrigger:"#245af4"})
        .addTo(controller);

    // end build part 1


    // build tween part 2
    var sect_tween2 = new TimelineMax()

    // sect_tween2.to(sectoins, .3, {autoAlpha:'0'})
    //     .to('#multifamily .section-content', .3, {autoAlpha:'1'})
        // .set(mainObject, {className:"-=blue-bg"}, 0.01)
        // .set(mainObject, {className:"+=dark-bg"},0.02)

        .to(['#multifamily-li', '#multifamily'], 0.1, {className:"+=active"})
        .to(['#brokers-li', '#brokers'],  0.1, {className:"-=active"});


    new ScrollMagic.Scene({
        triggerElement: "#multifamily",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween2)
        .setClassToggle('#main', 'dark-bg')
        .on("leave", function () {
            sect_tween.play();

            console.log('restart/ to Up'); //
        })
        // .on("enter", function () {
        //     TweenLite.to('#brokers .section-content', .3, {autoAlpha:'0'});
        //     console.log('pause/ to down');
        // })
        // .addIndicators({name: "section2",colorStart: "#FFFFFF"})
        .addTo(controller);

    // end build part 2


    // build tween part 3
    var sect_tween3 = new TimelineMax()

        // .to(mainObject, .001, {background:'#ffffff'})
    // sect_tween3 .to(sectoins, .3, {autoAlpha:'0'})
    //     .to('#products .section-content', .3, {autoAlpha:'1'})
    //     .to('#nav li  a', .05, {color: '#01173a'})
        // .set(mainObject, {className:"-=dark-bg"}, 0.01)
        // .set(mainObject, {className:"+=white-bg"},0.02)

        .to('#nav', 0.1, {className:"+=arrow-darck"})
        .to(['#products-li', '#products'], 0.1, {className:"+=active"})
        .to(['#multifamily-li','#multifamily'], 0.1, {className:"-=active"});

    
    new ScrollMagic.Scene({
        triggerElement: "#products",
        triggerHook: trigerPosition

    })

        .setTween(sect_tween3)
        .setClassToggle('#main', 'white-bg')
        .on("leave", function () {
            // sect_tween.restart();
            // TweenLite.to('#multifamily .section-content', .3, {autoAlpha:'1'});
            // console.log('restart/ to Up'); //
        })
        // .on("enter", function () {
        //     TweenLite.to('#multifamily .section-content', .3, {autoAlpha:'0'});
        //     console.log('pause/ to down');
        // })
        // .addIndicators({name: "section3", colorStart: "#ffffff", colorTrigger:"#000000"})
        .addTo(controller);

    // end build part 3



    // build tween part 4 about Section
    var sect_tween4 = new TimelineMax()
    // sect_tween4.to(sectoins, .3, {autoAlpha:'0'})
        // .to([sectoins, '#our-team-section'], .3, {autoAlpha:'0'},0)
        // .to('#about .section-content', .3, {autoAlpha:'1'})
        // .to('#nav li  a', .05, {color: '#ffffff'})
        .to('#nav', 0.1, {className:"-=arrow-darck"})
        .to(['#about-li','#about'], 0.1, {className:"+=active"})
        .to(['#products-li','#products'], 0.1, {className:"-=active"});

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween4)
        .setClassToggle('#main', 'dark-bg2')
        // .addIndicators({name: "section4",colorStart: "#fff", colorTrigger:"#ffffff"})
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
        .to('#masck--darck', masck_darck_del, {ease: Power1.easeInOut, xPercent: 105})
        .to(['#ourResultsPic .cls-80',  '#ourResultsPic .cls-81', '#ourResultsPic .cls-82'], .5, {scaleY:1}, '-=0.5')
        .staggerTo('.pint--point circle', time_del, {ease: Back.easeOut.config(1.9), scale:1}, .2, '-=0.3')
        .staggerTo('.pint--point2 circle', time_del, {ease: Back.easeOut.config(1.9), scale:1}, .2, '-=1')
        .staggerTo('.pint--point3 circle', time_del, {ease: Back.easeOut.config(1.9), scale:1}, .2, '-=1')
        .to('.logo___wrap', time_del*2, {ease: Power4.easeIn, autoAlpha:1}, '-=.5');


    var scene4Pic = new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: .5,
        reverse: false
    })

        .setTween(sect_tween4Pic)
        .addTo(controller);

    // end build part 4 about pic



    // build tween part 5 our-news Section
    var sect_tween5 = new TimelineMax()
        // .to(mainObject, 0.1, {className:"-=dark-bg"})
        // .to(mainObject, 0.1, {className:"+=white-bg"})
        // .to(sectoins, .3, {autoAlpha:'0'})
        // .to('#our-news', .3, {autoAlpha:'1'})
        // .to('#nav li  a', .05, {color: '#01173a'})
        .to('#nav', 0.1, {className:"+=arrow-darck"})
        .to('#our-news',  0.1, {className:"+=active"})
        .to('#about', 0.1, {className:"-=active"});



    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#our-news",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween5)
        .setClassToggle('#main', 'white-bg2')
        // .addIndicators({name: "section4",colorStart: "#fff", colorTrigger:"#ffffff"})
        .addTo(controller);

    // end build part 5 our-news Section



    // build tween part 6 our Team Section
    var sect_tween6 = new TimelineMax()

        // .to(mainObject, 0.1, {className:"-=white-bg"})
        // .to(mainObject, 0.1, {className:"+=light-bg"})
        // .to(sectoins, .3, {autoAlpha:'0'})
        // .to('#our-team-section', .3, {autoAlpha:'1'})
        // .to('#nav li  a', .05, {color: '#01173a'})


        .to('#our-news', 0.1, {className:"-=active"})
        .to('#our-team-section', 0.1, {className:"+=active"});



    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#our-team-section",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween6)
        .setClassToggle('#main', 'light-bg')
        // .addIndicators({name: "section4",colorStart: "#000", colorTrigger:"#000"})
        .addTo(controller);

    // end build part 6 our Team Section



    // build tween part 7 footer Section

    var sect_tween7 = new TimelineMax()
        // .to(mainObject, .001, {background:'#f4f7f9'})
        .to(sectoins, 0.3, {autoAlpha:'0'})
        .to('#footer .section-content', 0.3, {autoAlpha:'1'}, 0)
        // .to('#nav li  a', .05, {color: '#01173a'})

        .to('#about-li', 0.1, {className:"-=active"})
        .to('#lets-talk-li', 0.1, {className:"+=active"});



    var scene7 = new ScrollMagic.Scene({
        triggerElement: "#footer",
        triggerHook: .8
    })

        .setTween(sect_tween7)
        .setClassToggle('body', 'tight')

        // .addIndicators({name: "footer",colorStart: "#000", colorTrigger:"#000"})
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
        triggerHook: .8,
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

    // news client
    $('#news-carousel').owlCarousel({
        items:2,
        loop:false,
        margin : 0,
        nav: false,
        autoplay: false,
        smartSpeed : 1500,
        responsive:{
            0:{
                items:1,
                margin : 20,
            },
            1024:{
                items:1,
                margin : 40,
            }
        }

    });

    $('.our--person').on('mousemove', function(e) {
        var $id = $(this).data("id"),
            $object = $('#text-in-' + $id);

        flag = true;
        TweenLite.set($object,{autoAlpha:1});


        TweenLite.set($object,  {
            css: {
                left: e.offsetX - 63,
                top: e.offsetY + 30
            }
        });
    });



    $('.our--person').mouseleave(function(){
        var $id = $(this).data("id"),
            $object = $('#text-in-' + $id);
        flag = false;
        TweenLite.set($object,{autoAlpha:0});
    });


    $('#slicknav_btn').click(function () {
        $(this).toggleClass('slicknav_open');
        $('#nav').slideToggle();
        return false;
    });

    $('#nav').find('li').find('a').click(function () {
        $('#nav').slideUp();
        $('#slicknav_btn').removeClass('slicknav_open');

    });


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
