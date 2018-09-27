$(document).ready(function ($) {

    var controller = new ScrollMagic.Controller(),
        trigerPositionMenu = .55;



    // build menu part 1
    var menu_tween_1 = new TimelineMax()

        .to('#brokers-nav', 0.1, {position:'initial', bottom: 'auto', top: 'initial'});


    var sceneMenu1 = new ScrollMagic.Scene({
        triggerElement: "#brokers",
        triggerHook: trigerPositionMenu
    })

        .setTween(menu_tween_1)
        .addIndicators({name: "menu1 ", colorStart: "#FFFFFF", colorTrigger:"#245af4"})
        .addTo(controller);

    // end build menu part 1


    var tl1 = new TimelineMax();
    var item_

    tl1
        .staggerTo('.hurdles-node', 10, {ease: Power0.easeNone, x:'-1000px', repeat: -1}, .001); //400

});
