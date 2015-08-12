/**
  * @desc Stores user settings using HTML5 localStorage
  * @author Adam Houston
  * @required --
*/

// DOING: Implement storage for user links, rss and preferences
window.onload = function() {
    StoreSettings();
    console.log(RetrievePrimaryColor());
};

function StoreSettings() {
    if (typeof(Storage) != 'undefined') {
        //browser supports localStorage, so store settings
        localStorage.setItem('primaryColor', 'blue'));
        localStorage.setItem('rssThreeTitle', 'Sky Sports');
        localStorage.setItem('rssThreeLink',
            'http://skysports.com/rss/0,20514,11661,00.xml');
    }
    else {
        console.log('Sorry, your browser doesn\'t support local storage');
        // TODO: Implement warning/error msg when user tries to edit settings
    }
};

function RetrievePrimaryColor() {
    return localStorage.getItem('primaryColor');
};

function RetrieveRssFeeds() {
    return {
        localStorage.getItem('rssOneTitle'),
        localStorage.getItem('rssOneLink'),
        localStorage.getItem('rssTwoTitle'),
        localStorage.getItem('rssThreeTitle'),
        localStorage.getItem('rssThreeLink')
    };
};
