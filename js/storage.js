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
        localStorage.setItem('primaryColor', 'blue');
        localStorage.setItem('rssThreeTitle', 'Sky Sports');
        localStorage.setItem('rssThreeLink',
            'http://skysports.com/rss/0,20514,11661,00.xml');
    }
    else {
        console.log('Sorry, your browser doesn\'t support local storage');
        // TODO: Implement warning/error msg when user tries to edit settings
    }
}

function RetrievePrimaryColor() {
    return localStorage.getItem('primaryColor');
}

function RetrieveRssFeeds() {
    return {
        'a1' : localStorage.getItem('rssOneTitle'),
        'a2' : localStorage.getItem('rssOneLink'),
        'b1' : localStorage.getItem('rssTwoTitle'),
        'b2' : localStorage.getItem('rssTwoLink'),
        'c1' : localStorage.getItem('rssThreeTitle'),
        'c2' : localStorage.getItem('rssThreeLink')
    };
}

function GetRssFeeds(entry) {
    if (entry == 1) {
        return [
            localStorage.getItem('rssOneTitle'),
            localStorage.getItem('rssOneLink'),
        ];
    }
    else if (entry == 2) {
        return [
            localStorage.getItem('rssTwoTitle'),
            localStorage.getItem('rssTwoLink'),
        ];
    }
    else if (entry == 3) {
        return [
            localStorage.getItem('rssThreeTitle'),
            localStorage.getItem('rssThreeLink'),
        ];
    }
};
