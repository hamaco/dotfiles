module.exports = {
    defaultBrowser: 'Vivaldi',
    handlers: [
        {
            match: [
                'github.com/*',
            ],
            browser: 'Vivaldi',
        },
        {
            match: [
                'meet.google.com/*',
            ],
            browser: 'Google Chrome',
        },
    ],
};
