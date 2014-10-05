slate.configAll({
    defaultToCurrentScreen: true,
    orderScreensLeftToRight: true
});

monitor = {
    'left': 0,
    'right': 1
};

hyper = function(key) {
    return "" + key + ":ctrl,alt,shift,cmd";
};

util = {
    nextScreen: function(screen) {
        var next_screen_id;
        next_screen_id = String((screen.id() + 1) % slate.screenCount());
        return slate.screenForRef(next_screen_id);
    }
};

resize = {
    'fullscreen': slate.operation('corner', {
        'direction': 'top-left',
        'width': 'screenSizeX',
        'height': 'screenSizeY'
    }),
    'leftscreen': slate.operation('push', {
        'direction': 'left',
        'style': 'bar-resize:screenSizeX/2'
    }),
    'rightscreen': slate.operation('push', {
        'direction': 'right',
        'style': 'bar-resize:screenSizeX/2'
    }),

    'topleft': slate.operation('corner', {
        'direction': 'top-left',
        'width': 'screenSizeX/2',
        'height': 'screenSizeY/2'
    }),
    'topright': slate.operation('corner', {
        'direction': 'top-right',
        'width': 'screenSizeX/2',
        'height': 'screenSizeY/2'
    }),
    'bottomleft': slate.operation('corner', {
        'direction': 'bottom-left',
        'width': 'screenSizeX/2',
        'height': 'screenSizeY/2'
    }),
    'bottomright': slate.operation('corner', {
        'direction': 'bottom-right',
        'width': 'screenSizeX/2',
        'height': 'screenSizeY/2'
    }),

    'main': slate.operation('move', {
        'x': 'screenOriginX+screenSizeX/12',
        'y': 'screenOriginY+screenSizeY/12',
        'width': 'screenSizeX/12*10',
        'height': 'screenSizeY/12*10'
    })
};

slate.bind('r:ctrl,alt', slate.operation('relaunch'));

slate.bind('m:ctrl,alt', resize.main);

slate.bind('up:shift,cmd',    resize.fullscreen);
slate.bind('left:shift,cmd',  resize.leftscreen);
slate.bind('right:shift,cmd', resize.rightscreen);

slate.bind("o:ctrl,shift,alt,cmd", function(win) {
    if (!win) {
        return null;
    }
    return win.move(util.nextScreen(win.screen()).visibleRect());
});
