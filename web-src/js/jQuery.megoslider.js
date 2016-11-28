/**
 * Created by tRex on 28.11.2016.
 */

jQuery.fn.megoslider = function (options) {
    options = options || {};
    options.duration = options.duration || 3000;
    // console.log(this);
    var items = this.css('position', 'relative').find('li').css({position: 'absolute', display: 'none'});
    items.eq(0).fadeIn(0);
    var current = 0;
    setInterval(function () {
        jQuery(items[current]).fadeOut();
        current++;
        if (current >= items.length) {
            current = 0;
        }
        jQuery(items[current]).fadeIn();
    }, options.duration);

    return this;
};