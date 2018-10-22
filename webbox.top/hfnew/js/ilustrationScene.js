$(document).ready(function ($) {





    // var new_sc = 0;
    //
    // console.log(+$value_count);
    //
    // $('#price').text(+$value_count + 200);



        // $( "#slider-range-max" ).slider({
        //     range: "max",
        //     min: 1,
        //     max: 10,
        //     value: 3,
        //
        //
        //     slide: function( event, ui ) {
        //         $( "#amount" ).val( ui.value );
        //
        //
        //         var $value_count = $('#price-val').text();
        //
        //         if (ui.value + 1) {
        //             $('#price-val').text(+$value_count + 90);
        //         }
        //
        //         else if (ui.value - 1) {
        //             $('#price-val').text(+$value_count - 90);
        //         }
        //
        //         console.log(ui.value - 1);
        //     }
        // });
        //
        // $( "#amount" ).val(  $( "#slider-range-max" ).slider( "value" ) );




    var aPriceCount = new Array('', '499', '550', '600', '650', '700', '750', '800', '850', '900', '950');
    var aPriceCount2 = new Array('', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50');

    $('#slider-range-max').slider({
        range: "max",
        value:1,
        min: 1,
        max: 10,
        step: 1,
        slide: function(event, ui) {
            $( "#amount" ).val( ui.value );
            var sPriceVal = aPriceCount[ui.value];
            $('#price-val').text(+sPriceVal);
        }

    });
    $( "#amount" ).val(  $( "#slider-range-max" ).slider( "value" ));





    $( "#slider-range-max2" ).slider({
        range: "max",
        min: 1,
        max: 10,
        value: 1,
        slide: function( event, ui ) {
            $( "#amount2" ).val( ui.value );


            var sPriceVal = aPriceCount2[ui.value];
            var sPriceVal2 = aPriceCount[ui.value];

            $('#price-val').text(+sPriceVal2 + +sPriceVal);



        }
    });

    $( "#amount2" ).val( $( "#slider-range-max2" ).slider( "value" ));






});

$(function() {
    $('#slider1').slider({
        value:12,
        min: 10,
        max: 20,
        step: 1,
        slide: function( event, ui ) {
            $('#font_size').val(ui.value + ' px');
            $('.box').css('font-size', ui.value);
        }
    });
    $('#font_size').val($('#slider1').slider('value') + ' px');


    var aFonts = new Array('', 'Verdana', 'arial', 'Tahoma', 'Times New Roman', 'Georgia');
    $('#slider2').slider({
        value:1,
        min: 1,
        max: 5,
        step: 1,
        slide: function(event, ui) {
            var sFontFamily = aFonts[ui.value];
            $('#font_family').val(sFontFamily);
            $('.box').css('font-family', sFontFamily);
        }
    });
    $('#font_family').val(aFonts[$('#slider2').slider('value')]);


    var aWeights = new Array('', 'normal', 'bold', 'bolder', 'lighter', 'inherit');
    $('#slider3').slider({
        value:1,
        min: 1,
        max: 5,
        step: 1,
        slide: function(event, ui) {
            var sFontWeight = aWeights[ui.value];
            $('#font_weight').val(sFontWeight);
            $('.box').css('font-weight', sFontWeight);
        }
    });
    $('#font_weight').val(aWeights[$('#slider3').slider('value')]);




    var aAligns = new Array('', 'left', 'right', 'center', 'justify');
    $('#slider4').slider({
        value:1,
        min: 1,
        max: 4,
        step: 1,
        slide: function(event, ui) {
            var sTextAlign = aAligns[ui.value];
            $('#text_align').val(sTextAlign);
            $('.box').css('text-align', sTextAlign);
        }
    });
    $('#text_align').val(aAligns[$('#slider4').slider('value')]);
});