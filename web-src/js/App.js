/**
 * Created by tRex on 28.11.2016.
 */

// console.log('simple selector', $('li'));



// jQuery(function (jQ) {
//     console.log(arguments);
//     console.log(arguments[0] === $);
//     console.log($ === jQuery);
//     console.log($ === jQ);
// });





// jQuery(document).ready(function () {
//     console.log(arguments);
// });






// $(function () {
//     console.log('simple selector', $('li'), $);
//     console.dir($);
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
// $(items[2]).fadeOut(3000);
// $(items).fadeOut(3000);







// 4 html
// $( "<p id='test'>My <em>new</em> text</p>").appendTo( "body" );
// $( "<p id='test'>My <em>new</em> text</p>").find('em').css('border', '1px solid red').appendTo( "body" );









//// Events
// $('li:eq(2)').click(function (event) {
//     console.log('click', arguments, arguments[0].target === this);
    // console.log(arguments, arguments[0].currentTarget === this);
    // $(this).show();
    // $(this).hide();
    // $(this).toggle();
    // $(this).slideUp();

    // $('li:eq(3)').slideToggle();

// }).mouseleave(function (event) {
//     console.log('Bye');
// }).mouseenter(function () {
//     console.log('Hi');
// });

// $('.click-me').on('click', function () {
    // $(this).animate({
    //     left: '250px',
    //     opacity: '0.5',
    //     height: '150px',
    //     width: '150px'
    // });

    // $(this).animate({height: '300px', opacity: '0.4'}, "slow");
    // $(this).animate({width: '300px', opacity: '0.8'}, "slow");
    // $(this).animate({height: '100px', opacity: '0.4'}, "slow");
    // $(this).animate({width: '100px', opacity: '0.8'}, "slow");

// });


//fadeIn
//fadeOut

//attr  get, set
//html  get, set

//append, prepend, after, before


//addClass, removeClass, toggleClass

//css



//parent, closest

//find
//filters (first, last, eq, not, filter)




// jQuery(function ($) {
    // $('.mega-slider').megoslider({duration: 3000});
// });

