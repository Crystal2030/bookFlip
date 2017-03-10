(function($){
    'use strict';
    var isTouch = 'ontouchstart' in window,//判断是否是触摸屏
        events = isTouch ? {start: 'touchstart', move: 'touchmove', end: 'touchend'} :
            {start: 'mousedown', move: 'mousemove', end: 'mouseup'},
        displays = ['single', 'double'],
        defaultOpts = {
            page: 1,
            display: 'single',
            duration: 500,
            eventType: null
        },
        flipOpts = {
            duration: 500
        };
    console.log(events);

})(jQuery);