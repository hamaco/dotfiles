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
                'teams.microsoft.com/l/meetup-join/*',
            ],
            browser: 'Google Chrome',
        },
    ],
};
