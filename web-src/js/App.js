/**
 * Created by tRex on 28.11.2016.
 */



// $(function () {
//     console.log('simple selector', $('li'));
//
// });
//
// console.log(123);



// jQuery(function ($) {
//     console.log(arguments);
//     console.log(arguments[0] === $);
//     console.log($ === jQuery);
//     console.log($ === jQ);
// });




// jQuery(document).ready(function () {
//     console.log(arguments);
// });






// $(function () {
    // console.log('simple selector', $('li'), $);
    // console.dir($);
// });






// Function arguments
// 1 function
// jQuery(function ($) {
//     /*document ready*/
// });






// 2 css selector
// $('li').css('border', '1px solid red');







// 3 dom elem
// var items = document.getElementsByTagName('li');
// console.log(items);
// $(items).css('border', '1px solid red').css('background-color', 'yellow').eq(2).css('background-color', 'green').click(function () {console.log('Privet');});




// $(items[2]).fadeOut(3000);
// $(items).fadeOut(3000);







// 4 html
// $( "<p id='test'>My <em>new</em> text</p>").appendTo( "body" );
// $( "<p id='test'>My <em>new</em> text</p>").find('em').css('border', '1px solid red').appendTo( "body" );








// console.log($('li:eq(2)'));
//// Events

var clickHandler = function () {
    console.log(this);
    // $(this).off('click', clickHandler);
};

//
// $('li:eq(1)')
//     .on('click', clickHandler)
//     .off('click', clickHandler)
//     .mouseleave(function (event) {
//         console.log('Bye');
//     }).mouseenter(function () {
//         console.log('Hi');
//     })
// ;
    // .click(function (event) {
//     console.log('click', arguments, arguments[0].target === this);
    // console.log(arguments, arguments[0].currentTarget === this);
    // $(this).show();
    // $(this).hide();
    // $(this).toggle();
    // $(this).slideUp();

    // $('li:eq(3)').slideToggle();
//
// }).mouseleave(function (event) {
//     console.log('Bye');
// }).mouseenter(function () {
//     console.log('Hi');
// });

$('.click-me').on('click', function () {

    console.log($(this).html('sdjkhgkjsghdjskgh'))


})


//fadeIn
//fadeOut

//attr  get, set

// console.log($('.click-me').text().length);

//html  get, set
// $('.click-me').append($('li').first());

//append, prepend, after, before


//addClass, removeClass, toggleClass, hasClass

// $('.click-me').toggleClass('hello');


//css

console.log($('li').closest('.mega-slider').find('.item:not(.ok)'));

//parent, closest

//find
//filters (first, last, eq, not, filter)




// jQuery(function ($) {
//     $('.mega-slider').click(function () {
//         console.log('BORDER: 1px solid red');
//     })
//         .megoslider({duration: 500});
// });


//todo Drag n drop - products and cart
//write own plugin

/*
Shuffle letters - https://demo.tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
Slider -
Text slider - http://gary.pp.ua/#top
Countdown - count time to new year...
Chart - bars or lines. canvas or dom
Tooltip
Live search

 */




var products = $('.product');
var cart = $('.cart');
var product;

products
    .attr('draggable', 'true')
    .find('img')
    .attr('draggable', 'false')
;

products
    .on('dragstart', dragstart)


cart
    .on('dragover', dragover)
    .on('dragleave', dragleave)
    .on('drop', drop)
    .on('dragstart', function (event) {
        event.preventDefault()
    })
    ;









function dragstart(event) {
    console.log('dragstart', event.target);
    product = event.target;

}

function dragover(event) {
    cart.addClass('hovered');
    console.log('dragover', event);
    event.preventDefault();
}
function dragleave(event) {
    cart.removeClass('hovered');
    console.log('dragleave', event);

}

function drop(event) {
    console.log('drop', event);
    cart
        .removeClass('hovered')
        .append(product)
    ;

}