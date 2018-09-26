$(document).ready(function ($) {
    if($('.main-header').length){
// tabs
    (function ( $, window, document, undefined ) {

        var pluginName = "tabulous",
            defaults = {
                effect: 'scale'
            };
        function Plugin( element, options ) {
            this.element = element;
            this.$elem = $(this.element);
            this.options = $.extend( {}, defaults, options );
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }
        Plugin.prototype = {

            init: function() {

                var links = this.$elem.find('a');
                var firstchild = this.$elem.find('li:first-child').find('a');

                if (this.options.effect == 'scale') {
                    tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescale');
                } else if (this.options.effect == 'slideLeft') {
                    tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideleft');
                } else if (this.options.effect == 'scaleUp') {
                    tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescaleup');
                } else if (this.options.effect == 'flip') {
                    tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideflip');
                }

                var firstdiv = this.$elem.find('#tabs_container');
                var firstdivheight = firstdiv.find('div:first').height();

                var alldivs = this.$elem.find('div:first').find('div');

                alldivs.css({'position': 'absolute'});

                firstdiv.css('height',firstdivheight+'px');

                firstchild.addClass('tabulous_active');

                links.bind('click', {myOptions: this.options}, function(e) {
                    e.preventDefault();

                    var $options = e.data.myOptions;
                    var effect = $options.effect;

                    var mythis = $(this);
                    var thisform = mythis.parent().parent().parent();
                    var thislink = mythis.attr('href');


                    firstdiv.addClass('transition');

                    links.removeClass('tabulous_active');
                    mythis.addClass('tabulous_active');
                    thisdivwidth = thisform.find('div'+thislink).height();

                    if (effect == 'scale') {
                        alldivs.removeClass('showscale').addClass('make_transist').addClass('hidescale');
                        thisform.find('div'+thislink).addClass('make_transist').addClass('showscale');
                    } else if (effect == 'slideLeft') {
                        alldivs.removeClass('showleft').addClass('make_transist').addClass('hideleft');
                        thisform.find('div'+thislink).addClass('make_transist').addClass('showleft');
                    } else if (effect == 'scaleUp') {
                        alldivs.removeClass('showscaleup').addClass('make_transist').addClass('hidescaleup');
                        thisform.find('div'+thislink).addClass('make_transist').addClass('showscaleup');
                    } else if (effect == 'flip') {
                        alldivs.removeClass('showflip').addClass('make_transist').addClass('hideflip');
                        thisform.find('div'+thislink).addClass('make_transist').addClass('showflip');
                    }


                    firstdiv.css('height',thisdivwidth+'px');




                });






            },

            yourOtherFunction: function(el, options) {
                // some logic
            }
        };

        $.fn[pluginName] = function ( options ) {
            return this.each(function () {
                new Plugin( this, options );
            });
        };

    })( jQuery, window, document );
    // tabs

    $('#tabs-content').tabulous({
        effect: 'slideLeft'
    });



    // sticky_menu
    $(function(){
        $(window).scroll(function() {
            if($(this).scrollTop() >= 75) {
                $('#top-head').addClass('stickytop');
            }
            else{
                $('#top-head').removeClass('stickytop');
            }
        });
    });
    // scroll menu
    var lastId,
        topMenu = $('#sticky-menu'),
        topMenuHeight = topMenu.outerHeight() + 90,
        menuItems = topMenu.find('a'),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr('href'));
            if (item.length) { return item; }
        });
    menuItems.click(function(e){
        var href = $(this).attr('href'),
            offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 20;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1200);
        e.preventDefault();
    });

    $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+topMenuHeight;
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : '';

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass('active')
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });

    // scroll to down
    $(".blue-btn-big, .yellow-btn-big, .logo, #open-case-study, #open-case-study1").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 90;
        $('body,html').animate({scrollTop: top}, 1200);

    });
    // scroll & checked
    $('#get-dgtl-btn').click(function (event) {
        event.preventDefault();
        var id  = $('#triger-scroll-to'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
        $('#get-dgtl-assessment').find('.form-check-input').prop( 'checked', true );
    });

    $('#lets-chat-btn').click(function (event) {
        event.preventDefault();
        var id1  = $('#triger-scroll-to'),
            top = $(id1).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
        $('#lets-chat').find('.form-check-input').prop( 'checked', true );
    });

    $('#start-project--btn').click(function (event) {
        event.preventDefault();
        var id__2  = $('#triger-scroll-to'),
            top = $(id__2).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
        $('#start--project').find('.form-check-input').prop( 'checked', true );
    });



    $('.box:nth-child(2n)').addClass('mt-25');
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

    $(".makeMeScrollable").smoothDivScroll({
        manualContinuousScrolling: true,
        autoScrollingMode: "onStart",
        hotSpotScrolling: false,
        autoScrollingInterval: 40,
        autoScrollingStep: 1,
        mousewheelScrolling: ""
    });

    // animation

    var tl1 = new TimelineMax({delay:1});
    var tl1_1 = new TimelineMax({delay:3, repeat:-1, yoyo:true});
    var tl1_1_1 = new TimelineMax({delay:3, repeat:-1, yoyo:true});

    var tl1_2 = new TimelineMax({delay:3, repeat:-1, yoyo:true});
    var tl1_3 = new TimelineMax({delay:3, repeat:-1, yoyo:true});
    var tl1_4 = new TimelineMax({delay:4, repeat:-1, yoyo:true});


    var tl2 = new TimelineMax();
    var tl3 = new TimelineLite();


    var objects = $('#rect4934, #rect4900, #rect8021, #path4617, #path4603'), //lines from right to left and down to up
        objects3_1 = $('#rect4934-2, #rect4900-2, #rect8021-2, #path4617-2, #path4603-2'),
        windows_off = $('#header_bg .cls-11, #header_bg .cls-36, #header_bg .cls-40'),
        mult_dia = .6;


        // light in the city

        // reset

    tl1.to('#header_bg .cls-91',0,{opacity:0},0)
        .to(windows_off,0, {fill: '#085cfb'},0)
        .to(['#path4658-2_clon,  #path4658'],0, {fill: '#ffba22',copacity:0},0)


        //start light on
        .fromTo(['#rect7337, #rect7337-2_clone, #path4658, #path4658-2_clon'], .3*mult_dia, { scaleX:0 ,transformOrigin:'0% 100%',fill: '#ffba22',delay:1 }, { scaleX:1, fill: '#ffba22'},'+=.5' )
        .fromTo(['#rect8645, #rect8645-2_clone'], .3*mult_dia, { scaleX:0 ,transformOrigin:'0% 100%',fill: '#ffba22',delay:1 }, { scaleX:1, fill: '#ffba22'},'+=.5' )
        .fromTo(['#rect7517-9-0'], .3*mult_dia, { scaleX:0 ,transformOrigin:'0% 100%',fill: '#ffba22',delay:1 }, { scaleX:1, fill: '#ffba22'},'+=.5' )

        .fromTo(['#path4652, #path4652-2_clone'], .3*mult_dia, { scaleX:0 ,transformOrigin:'100% 0%',fill: '#ffba22',delay:1 }, { scaleX:1, fill: '#ffba22'},'+=.5' )
        .fromTo(['#path4650, #path4650-2_clone'], .3*mult_dia, { scaleX:0 ,transformOrigin:'100% 0%',fill: '#ffba22',delay:1 }, { scaleX:1, fill: '#ffba22'},'+=.5' )
        .to(['#rect8429, #rect8429-2'], .2, {fill: '#ffba22'},0)
        .to(['#rect8683, #rect8683-2'], .2, {fill: '#ffba22'})
        .to(['#rect8681, #rect8681-2, #path4599, #path4599-2'], .2, {fill: '#ffba22'},0 )
        .to(['#rect4787_clone, #rect4787-2, #rect8370, #rect8370-2'], .2, {fill: '#ffba22'}, '-=.5' )
        .to(['#path9087, #path9087-2'], .2, {fill: '#ffba22'}, '-=.5')

        .fromTo(objects, 2*mult_dia, {opacity: 0, scale:0 ,transformOrigin:'100% 100%'}, {opacity: 1, scale:1}, '-=2' )
        .fromTo(objects3_1, 2*mult_dia, {scaleY:0 ,transformOrigin:'0% 0%'}, {scaleY:1}, '-=1.7' )
        .staggerTo(windows_off ,.2, {fill: '#ffba22'}, .1,0);



    // after lihgt on
    tl1_1_1
        .to('#rect8352-3', .4, { rotation:0.01})
        .to(['#rect8372'], .1, {fill: '#ffba22'})
        .to(['#rect7661-4, #rect8424, #rect7661-4-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8372-9, #rect8372-9-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#rect8376, #rect8376-2'], .1, {fill: '#ffba22'}, '+=.4')
        .to(['#rect8370, #rect8370-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#rect8422, #rect8422-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8683, #rect8683-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#path9076, #path9076-2, #path9078, #path9078-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#path9091, #path9091-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8429, #rect8429-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#rect8431, #rect8431-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect7661-4, #rect8424, #rect7661-4-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#path9087, #path9087-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#path9083, #path9083-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8681, #rect8681-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#rect8685, #rect8685-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#path4599, #path4599-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#rect4787_clone, #rect4787-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#rect4767, #rect4767-2'], .1, {fill: '#ffba22'},'+=.4')
        .to('#rect8352-3', .5, { rotation:0.01});

    tl1_1
        .to('#rect8352-3', .4, { rotation:0.01})
        .to(['#rect8973, #rect8973-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8386, #rect8386-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#rect8372'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8683, #rect8683-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#path9085, #path9085-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8386, #rect8386-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#path9074, #path9074-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect9142, #rect9142-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#rect8679, #rect8679-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8374, #rect8374-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect7337-5-7, #rect7337-5-7-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#path9072, #path9072-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8382, #rect8382-2'], .1, {fill: '#085cfb'},'+=.4')
        .to(['#rect8975, #rect8975-2'], .1, {fill: '#ffba22'},'+=.4')
        .to(['#rect8429-8, #rect9065, #rect8429-8-2, #rect9065-2'], .1, {fill: '#085cfb'},'+=.4')
        .to('#rect8352-3', .5, { rotation:0.01});


    // lihe windows
    tl1_2
        // reset


        .to(['#path4658, #path4658-2_clon, #rect8946_clone, #rect8946-2_clone, #path4656_clone, #path4656-2_clone, #path4569_clone, #path4573_clone, #path4573-2_clone, #rect8954_clone, #rect8954-2_clone, #rect7337, #rect7337-2_clone, #rect7517-9_clone'],0 ,{fill: '#ffba22',scaleX:0})

        .to('#rect8352-3', .4, { rotation:0.01})

        .to(['#rect8946_clone, #rect8946-2_clone, #path4656_clone, #path4656-2_clone'], .3*mult_dia, { transformOrigin:'0% 100%',scaleX:1})
        .to(['#rect8946_clone, #rect8946-2_clone, #path4656_clone, #path4656-2_clone'], .3*mult_dia, { transformOrigin:'100% 0%', scaleX:0},'+=2')


        // house 1

        .to(['#path4569_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#path4569_clone'], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')

        .to(['#path4573_clone, #path4573-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#path4573_clone, #path4573-2_clone'], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')

        // house 2
        .to(['#rect8954_clone, #rect8954-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#rect8954_clone, #rect8954-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:0}, '+=1.8')

        .to(['#rect7337, #rect7337-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#rect7337, #rect7337-2_clone  '], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')

        .to(['#path4658, #path4658-2_clon'], .3*mult_dia, { transformOrigin:'0% 100%', scaleX:1})
        .to(['#path4658, #path4658-2_clon'], .3*mult_dia, { transformOrigin:'100% 0%', scaleX:0}, '+=1.8')

            // house 3
        .to(['#rect7517-9_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#rect7517-9_clone'], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')


        .to('#rect8352-3', 1, { rotation:0.01});

    tl1_3
        .to(['#path4652, #path4652-2_clone, #rect8952_clone, #rect8952-2_clone, #rect8950_clon, #rect8950-2_clone, #rect8944_clone, #rect8944-2_clone, #rect8942_clon, #rect8942-2_clone'],0 ,{fill: '#ffba22',scaleX:0})

        .to('#rect8352-3', .4, { rotation:0.01})

        .to(['#rect8952_clone, #rect8952-2_clone'], .3*mult_dia, {transformOrigin:'0% 0%', scaleX:1})
        .to(['#rect8952_clone, #rect8952-2_clone'], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')

        .to(['#rect8950_clon, #rect8950-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#rect8950_clon, #rect8950-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:0}, '+=1.8')

        .to(['#path4652, #path4652-2_clone'], .3*mult_dia, { transformOrigin:'0% 100%', scaleX:1 },'+=.5')
        .to(['#path4652, #path4652-2_clone'], .3*mult_dia, { transformOrigin:'0% 100%', scaleX:0 }, '+=1')


        // house 3
        .to(['#rect8944_clone, #rect8944-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1},'-=4')
        .to(['#rect8944_clone, #rect8944-2_clone'], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')

        .to(['#rect8942_clon, #rect8942-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#rect8942_clon, #rect8942-2_clone'], .3*mult_dia, {transformOrigin:'0% 0%', scaleX:0}, '+=1.8')

        .to('#rect8352-3', 1, { rotation:0.01});
    // end house2
    tl1_4
        .to(['#path4650, #path4650-2_clone, #path4571_clone, #path4571-2_clone, #rect8956_clone, #rect8956-2_clone, #rect8940_clone, #rect8940-2_clone, #rect8938_clone, #path4654_clone, #path4654-2_clone'],0 ,{fill: '#ffba22',scaleX:0})

        .to('#rect8352-3', 1, { rotation:0.01})
// house 1
        .to(['#path4650, #path4650-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1}, '+=1')
        .to(['#path4650, #path4650-2_clone'], .3*mult_dia, {transformOrigin:'0% 0%', scaleX:0}, '+=1.8')


        .to(['#path4571_clone, #path4571-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#path4571_clone, #path4571-2_clone'], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')

// house 2
        .to(['#rect8956_clone, #rect8956-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#rect8956_clone, #rect8956-2_clone'], .3*mult_dia, {transformOrigin:'100% 100%', scaleX:0}, '+=1.8')
// house 3


        .to(['#rect8940_clone, #rect8940-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#rect8940_clone, #rect8940-2_clone'], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')

        .to(['#rect8938_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#rect8938_clone'], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')

        .to(['#path4654_clone, #path4654-2_clone'], .3*mult_dia, {transformOrigin:'0% 100%', scaleX:1})
        .to(['#path4654_clone, #path4654-2_clone'], .3*mult_dia, {transformOrigin:'100% 0%', scaleX:0}, '+=1.8')



        .to('#rect8352-3', 1, { rotation:0.01});

    //end light on the city

    tl3.to('.city-bg-move', 100, {ease: Power0.easeNone, x:-552, repeat:-1,rotation: 0.01},0)
        .to('.sky-bg-1', 90, {ease: Power0.easeNone, x:552, repeat:-1,rotation: 0.01},0)
        .to('.sky-bg-2', 80, {ease: Power0.easeNone, x:552, repeat:-1,rotation: 0.01},0)
        .to('.sky-bg-3', 110, {ease: Power0.easeNone, x:552, repeat:-1,rotation: 0.01},0)

        .staggerTo('#g4650 path', 3, {ease: Power0.easeNone, drawSVG:'100% 100%', repeat:-1, yoyo:true}, .5,0)
        .staggerTo('#g4650-2 path', 3, {ease: Power0.easeNone, drawSVG:'100% 100%', repeat:-1, yoyo:true}, .5,0);




function move_cases() {
    tl2.to('.cw-first', 15, {bezier:{curviness:1.2, values:[{x:'12px', y:'0px',rotation: 0.01}, {x:'12px', y:'7px',rotation: 0.01}, {x:'-12px', y:'7px',rotation: 0.01}, {x:'-12px', y:'0px',rotation: 0.01}, {x:'0px', y:'0px',rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone},0)

        .to('.cw-two', 15, {bezier:{curviness:1, values:[{x:'-12px', y:'0px',rotation: 0.01}, {x:'-12px', y:'-8px',rotation: 0.01}, {x:'12px', y:'-8px',rotation: 0.01}, {x:'12px', y:'0px',rotation: 0.01}, {x:'0px', y:'0px',rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone},0)

        .to('.cw-three', 15, {bezier:{curviness:1.1, values:[{x:'-12px', y:'0px',rotation: 0.01}, {x:'-12px', y:'10px',rotation: 0.01}, {x:'12px', y:'10px',rotation: 0.01}, {x:'12px', y:'0px', rotation: 0.01}, {x:'0px', y:'0px',rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone},0)

        .to('.cw-four', 15, {bezier:{curviness:1.1, values:[{x:'0px', y:'-13px',rotation: 0.01}, {x:'8px', y:'-13px',rotation: 0.01}, {x:'8px', y:'13px',rotation: 0.01}, {x:'0px', y:'13px',rotation: 0.01}, {x:'0px', y:'0px',rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone},0);


}


    if ($(window).width() >= 830 ) {
        $('#open-case-study').click(function (evt) {
            evt.preventDefault();
            var triger = $('#case-study-hidden-1');
            $('.case-study-hidden').fadeToggle(450);
            $('.results-block').toggleClass('visible_d');
            $(this).toggleClass('up-awr');
            $(this).text($(this).text() == 'Read This Case Study' ? 'Close Case Study' : 'Read This Case Study');
            if ($('.results-block').is('.visible_d')) {
                $(triger).prependTo('#case-study-brokers');
                $(triger).addClass('caret-to-top');
            } else {
                $(triger).appendTo('#case-study-brokers');
                $(triger).removeClass('caret-to-top');
            }
            move_cases();
        });

        // yellow box
        $('#open-case-study1').click(function (evt) {
            evt.preventDefault();
            var triger2 = $('#case-study-hidden-2');
            $('.case-study-hidden-2').fadeToggle(450);
            $('.results-block-1').toggleClass('visible_d_2');
            $(this).toggleClass('up-awr');
            $(this).text($(this).text() == 'Read This Case Study' ? 'Close Case Study' : 'Read This Case Study');
            if ($('.results-block-1').is('.visible_d_2')) {
                $(triger2).prependTo('#multifamily-case');
                $(triger2).addClass('caret-to-top');
            } else {
                $(triger2).appendTo('#multifamily-case');
                $(triger2).removeClass('caret-to-top');
            }
            move_cases();
        });

    } else {

        $('#open-case-study').click(function (evt) {
            evt.preventDefault();
            var triger = $('#case-study-hidden-1'),
                gallery = $('#case-study-brokers').find('.nonstop-scroll');

            $('.case-study-hidden').fadeToggle(450);
            $('.results-block').toggleClass('visible_d');
            $(this).toggleClass('up-awr');
            $(this).text($(this).text() == 'Read This Case Study' ? 'Close Case Study' : 'Read This Case Study');

            if ($('.results-block').is('.visible_d')) {
                $(triger).prependTo('#case-study-brokers');
                $(triger).addClass('caret-to-top');
            }  else {
                $(triger).appendTo('#case-study-brokers');
                $(triger).removeClass('caret-to-top');
            }
            if ($(gallery).is(':visible')) {
                $(gallery).hide();
                $('#open-gallery-study').removeClass('up-awr');
                $('#open-gallery-study').text('View Gallery');
            }
        });

        $('#open-gallery-study').click(function (evt) {
            evt.preventDefault();
            var triger = $('.case-study-hidden'),
            gallery = $('#case-study-brokers').find('.nonstop-scroll');
            $(this).text($(this).text() == 'View Gallery' ? 'Close Gallery' : 'View Gallery');
            $(gallery).slideToggle(450).toggleClass('check-block');
            $(this).toggleClass('up-awr');

            if ($(gallery).is('.check-block')) {
                top_1 = $('#case-study-brokers').offset().top - -500;
                $('body,html').animate({scrollTop: top_1}, 1200);
            }

            if ($(triger).is(':visible')) {
                $(triger).fadeOut(450);
                $('#open-case-study').removeClass('up-awr');
                $('.results-block').removeClass('visible_d');
                $('#open-case-study').text('Read This Case Study');
                $('#case-study-hidden-1').appendTo('#case-study-brokers');
                $('#case-study-hidden-1').removeClass('caret-to-top');
            }
        });


        // yellow box
       
        $('#open-case-study1').click(function (evt) {
            evt.preventDefault();
            var triger2 = $('#case-study-hidden-2'),
                gallery2 = $('#multifamily-case').find('.nonstop-scroll');

            $('.case-study-hidden-2').fadeToggle(450);
            $('.results-block-1').toggleClass('visible_d_2');
            $(this).toggleClass('up-awr');
            $(this).text($(this).text() == 'Read This Case Study' ? 'Close Case Study' : 'Read This Case Study');

            if ($('.results-block-1').is('.visible_d_2')) {
                $(triger2).prependTo('#multifamily-case');
                $(triger2).addClass('caret-to-top');
            }  else {
                $(triger2).appendTo('#multifamily-case');
                $(triger2).removeClass('caret-to-top');
            }
            if ($(gallery2).is(':visible')) {
                $(gallery2).hide();
                $('#open-gallery-study2').removeClass('up-awr');
                $('#open-gallery-study2').text('View Gallery');
            }
        });




        $('#open-gallery-study2').click(function (evt) {
            evt.preventDefault();
            var triger = $('.case-study-hidden-2'),
                gallery2 = $('#multifamily-case').find('.nonstop-scroll');
            $(this).text($(this).text() == 'View Gallery' ? 'Close Gallery' : 'View Gallery');
            $(gallery2).slideToggle(450).toggleClass('check-block');
            $(this).toggleClass('up-awr');

            if ($(gallery2).is('.check-block')) {
                top_1 = $('#multifamily-case').offset().top - -450;
                $('body,html').animate({scrollTop: top_1}, 1200);
            }

            if ($(triger).is(':visible')) {
                $(triger).fadeOut(450);
                $('#open-case-study1').removeClass('up-awr');
                $('.results-block').removeClass('visible_d_2');
                $('#open-case-study1').text('Read This Case Study');
                $('#case-study-hidden-2').appendTo('#multifamily-case');
                $('#case-study-hidden-2').removeClass('caret-to-top');
                $(gallery2).removeClass('check-block');
            }
        });


    }


    var controller = new ScrollMagic.Controller();

    // mountain paralax
        var scene = new ScrollMagic.Scene({
            triggerElement: "#bsg-paralax",
            duration: '100%',
            triggerHook: 0.5
        })
        .setTween(TweenMax.to('#mountain-bg',1, {y: '40%', rotation:0.01, ease: Power0.easeNone }))

        .addTo(controller);

// build tween

    var  girl = $('#r-hand-girl,#l-hand-girl'),
        man = $('#l-hand-man, #r-hand-man'),
        deg_right_hand = $('#r-hand-girl, #l-hand-girl'),
        rocket = $('#rocket'),
        deg_left_hand = $('#l-hand-man, #r-hand-man');

         var tween = new TimelineMax({ ease: Power0.easeNone})

            .to(girl, 3, {ease: Power2.easeIn, x:-2.5, y:2, rotation: 0.01})
            .to(man, 3, {ease: Power2.easeIn, x:2.5, y:.6, rotation: 0.01},0)
            .to(deg_left_hand, 3, {ease: Power2.easeIn, rotation:-4},0)
            .to(deg_right_hand, 3, {ease: Power2.easeIn, rotation:4},0)
            .to('#roz-left', 3, {ease: Power2.easeIn, x:6, rotation: 0.01},0)
            .to('#roz-right', 3, {ease: Power2.easeIn, x:-6, rotation: 0.01},0)


            .to(rocket, 20, {ease: Circ.easeIn, y:-500, rotation: 0.01} )
            .fromTo('#after-rocket', 5,
                {ease: Circ.easeIn, y:0, scaleY: .7, transformOrigin:'100% 100%', rotation: 0.01},
                {ease: Circ.easeIn, y:0, scaleY: 1, transformOrigin:'100% 100%', rotation: 0.01},'-=18' )
            .fromTo('#after-rocket2', 1.6,
                {ease: Circ.easeIn, y:0, scaleY: 0, transformOrigin:'100% 100%', rotation: 0.01},
                {ease: Circ.easeIn, y:0, scaleY: 1, transformOrigin:'100% 100%', rotation: 0.01},'-=5' );

// build scene

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#man",
        duration: 450,
        triggerHook: 0.55
    })

        .setTween(tween)
        .addTo(controller);







// build scene


    $(window).on('resize load', function () {
        var width = $(window).width();

        if (width >= 992 ) {

            // people fly

            var tween_2 = new TimelineMax({ease: Power0.easeNone})
                .to(['#pupls-on-rocket, #flame-big, #flame-small'], 3, {ease: Power2.easeOut, y:-210, rotation: 0.01})
                .to('#pupls-on-rocket', 15, {bezier:{curviness:1.2, values:[{x:3, y:-210, rotation: 0.01}, {x:3, y:-195, rotation: 0.01}, {x:-3, y:-195, rotation: 0.01}, {x:-3, y:-210, rotation: 0.01}, {x:0, y:-210, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone})

                .to(['#flame-big, #flame-small'], 15, {bezier:{curviness:1, values:[{x:3, y:-220, rotation: 0.01, opacity:.8}, {x:3, y:-204, rotation: 0.01, opacity:1}, {x:-3, y:-204, rotation: 0.01, opacity: .7}, {x:-3, y:-220, rotation: 0.01, opacity:.95}, {x:0, y:-210, rotation: 0.01, opacity:1}]}, repeat:-1, ease: Power0.easeNone}, '-=15')

            ;

// build scene

            var scene5 = new ScrollMagic.Scene({
                triggerElement: "#people-triger",
                triggerHook: 0.5,
                reverse: false


            })
            // .addIndicators({name: "people & mountain prlx"}) // add indicators (requires plugin)

                .setTween(tween_2)
                .addTo(controller);


            // mountain paralax
            var scene6 = new ScrollMagic.Scene({
                triggerElement: "#people-triger",
                duration: '120%',
                triggerHook: 0.8
            })

                .setTween(TweenMax.to('#mountain-prlx',1, {y: '-45%', rotation:0.01, ease: Power0.easeNone }))
                .addTo(controller);

            // about us animation

            var tween_3 = new TimelineMax({ ease: Power0.easeNone})

                .to('#lamp-off', .6, {opacity:0})
                .to('#lamp-on', .6, {opacity:1, rotation: 0.01},0);

            var scene7 = new ScrollMagic.Scene({
                triggerElement: "#about-us-triger",
                triggerHook: 0.55
            })
                
                .setTween(tween_3)
                .addTo(controller);
            var tween_4 = new TimelineMax({ ease: Power0.easeNone});

            tween_4.to('#man1-au', 20, {bezier:{curviness:1.2, values:[{x:8, y:0, rotation: 0.01}, {x:8, y:-8, rotation: 0.01}, {x:-8, y:-8, rotation: 0.01}, {x:-8, y:0, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone})
                .to('#lamp-wrap', 20, {bezier:{curviness:1.2, values:[{x:7, y:0, rotation: 0.01}, {x:7, y:-9, rotation: 0.01}, {x:-7, y:-9, rotation: 0.01}, {x:-7, y:0, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone},'-=19')
                .to('#girl-au', 15, {bezier:{curviness:1.3, values:[{x:0, y:8, rotation: 0.01}, {x:-7, y:8, rotation: 0.01}, {x:-7, y:-8, rotation: 0.01}, {x:0, y:-8, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone},0)
                .to('#man2-au', 15, {bezier:{curviness:1.3, values:[{x:-6, y:0, rotation: 0.01}, {x:-6, y:-7, rotation: 0.01}, {x:6, y:-7, rotation: 0.01}, {x:6, y:7, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone},0)
                .to('#note-book', 15, {bezier:{curviness:1.3, values:[{x:3, y:0, rotation: 0.01}, {x:3, y:-5, rotation: 0.01}, {x:-3, y:-5, rotation: 0.01}, {x:-3, y:5, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone}, '-=18')
                .to('#page-au', 15, {bezier:{curviness:1.3, values:[{x:0, y:5, rotation: 0.01}, {x:-5, y:5, rotation: 0.01}, {x:-5, y:-5, rotation: 0.01}, {x:0, y:-5, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone},'-=19')
                .to('#page2-au', 15, {bezier:{curviness:1.3, values:[{x:3, y:0, rotation: 0.01}, {x:3, y:-3, rotation: 0.01}, {x:-3, y:-3, rotation: 0.01}, {x:-3, y:0, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone}, 0)
                .to('#page3-au', 15, {bezier:{curviness:1.3, values:[{x:-3, y:0, rotation: 0.01}, {x:-3, y:-6, rotation: 0.01}, {x:3, y:-6, rotation: 0.01}, {x:3, y:6, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone}, '-=19')
                .to('#pages4-au', 15, {bezier:{curviness:1.3, values:[{x:0, y:3, rotation: 0.01}, {x:-2.5, y:3, rotation: 0.01}, {x:-2.5, y:-3, rotation: 0.01}, {x:0, y:-3, rotation: 0.01}, {x:0, y:0, rotation: 0.01}]}, repeat:-1, ease: Power0.easeNone}, 0);

        }
        if (width >= 900 ) {
            $('#sticky-menu').removeAttr("id");
        }
        else {

            $('.nav-menu').attr("id", "sticky-menu");
            $('#sticky-menu').css({
                'display':'none'
            });
            $('.wrap-menu').removeClass('slicknav_open');
        }

    });
    $('.slicknav_btn').click(function (evt) {
        evt.preventDefault();
        $('#sticky-menu').slideToggle(250);
        $('.wrap-menu').toggleClass('slicknav_open');
    });

    $('#sticky-menu a, .wrap-mob-menu a, #lets-chat-btn').click(function () {
        $('#sticky-menu').slideUp(250);
        $('.wrap-menu').removeClass('slicknav_open');
    });


    }

    var controller = new ScrollMagic.Controller(),
        trigerPosition = .1,
        sectoins = $('#main').find('section'),
        mainObject = $('#main');



    // build tween part 1
    var sect_tween = new TimelineMax()

        .to(mainObject, .001, {background:'#0000ff'})
        .to(sectoins, .3, {autoAlpha:'0'}, '0')
        .to('#brokers', .3, {autoAlpha:'1'}, '0');


    var scene = new ScrollMagic.Scene({
        triggerElement: "#brokers",
        triggerHook: trigerPosition

    })

        .setTween(sect_tween)
        .addIndicators({name: "section1", colorStart: "#FFFFFF", colorTrigger:"#245af4"})
        .addTo(controller);

    // end build part 1

    // build tween part 2
    var sect_tween2 = new TimelineMax()

        .to(mainObject, .001, {background:'#040419'})
        .to(sectoins, .3, {autoAlpha:'0'}, '0')
        .to('#multifamily', .3, {autoAlpha:'1'}, '0');


    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#multifamily",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween2)
        .addIndicators({name: "section2",colorStart: "#FFFFFF"})
        .addTo(controller);

    // end build part 2

    // build tween part 3
    var sect_tween3 = new TimelineMax()

        .to(mainObject, .001, {background:'#ffffff'})
        .to(sectoins, .3, {autoAlpha:'0'}, '0')
        .to('#products', .3, {autoAlpha:'1'}, '0');


    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#products",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween3)
        .addIndicators({name: "section3", colorStart: "#ffffff", colorTrigger:"#000000"})
        .addTo(controller);

    // end build part 3

    // build tween part 3
    var sect_tween4 = new TimelineMax()

        .to(mainObject, .001, {background:'#040419'});


    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: trigerPosition
    })

        .setTween(sect_tween4)
        .addIndicators({name: "section4",colorStart: "#000", colorTrigger:"#000000"})
        .addTo(controller);

    // end build part 3

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
