
/**
  * @desc Defines the settings model and default data used in the
  *   Angular Controller (storage.js)
  * @author Adam Houston
  * @required AngularJS
*/

angular.module('SettingsModel', [])
.service('SettingsModel', function() {
    var userPrefs = {
        primaryColor: "primary-blue",
        accentColor: "accent-red",
        theme: 0 // 0 = time controlled, 1 = light theme, 2 = dark theme
    };

    var userRss = [
        { title: 'BBC News', url: 'http://feeds.bbci.co.uk/news/england/rss.xml'},
        { title: 'BBC Tech', url: 'http://feeds.bbci.co.uk/news/technology/rss.xml'},
        { title: 'Sky Sports', url: 'http://skysports.com/rss/0,20514,11661,00.xml'}
    ];
    var userPanel1 = [
        { title: 'Gmail', url: 'https://mail.google.com' },
        { title: 'Keep', url: 'https://keep.google.com' },
        { title: 'Drive', url: 'https://drive.google.com/#my-drive' },
        { title: 'Outlook', url: 'https://live.com/' }
    ];
    var userPanel2 = [
        { title: '/r/Programming', url: 'https://reddit.com/r/programming' },
        { title: '/r/WebDev', url: 'https://reddit.com/r/webdev' },
        { title: '/g/', url: 'https://boards.4chan.org/g/' },
        { title: '/sp/', url: 'https://boards.4chan.org/sp/' }
    ];
    var userPanel3 = [
        { title: 'Amazon', url: 'https://www.amazon.co.uk/' },
        { title: 'Ebay', url: 'https://www.ebay.co.uk/' },
        { title: 'Overclockers', url: 'https://www.overclockers.co.uk/' },
        { title: 'Google', url: 'https://store.steampowered.com' }
    ];
    var userPanel4 = [
        { title: 'Engadget', url: 'http://www.engadget.com/uk/' },
        { title: 'ArsTechnica', url: 'http://arstechnica.com/' },
        { title: 'HowToGeek', url: 'http://www.howtogeek.com/' },
        { title: 'Guardian', url: 'http://www.theguardian.com/uk' }
    ];

    this.userPrefs = userPrefs;
    this.userRss = userRss;
    this.userPanel1 = userPanel1;
    this.userPanel2 = userPanel2;
    this.userPanel3 = userPanel3;
    this.userPanel4 = userPanel4;
});
