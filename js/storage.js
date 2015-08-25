/**
  * @desc Stores user settings using HTML5 localStorage
  * @author Adam Houston
  * @required AngularJS (& ngStorage module)
*/

var app = angular.module("Startpage", ["ngStorage", "SettingsModel"]);

app.controller("MainController", function($scope, $localStorage, SettingsModel) {
    var colors = [
        "blue", "red", "indigo"
    ];

    // Load User Data when page is loaded
    $scope.init = function() {
        if (typeof $localStorage.userPrefs == "undefined") {
            console.log('No local storage found | Loading Defaults');
            $scope.userRss = SettingsModel.userRss;
            $scope.userPrefs = SettingsModel.userPrefs;
            $scope.userPanel1 = SettingsModel.userPanel1;
            $scope.userPanel2 = SettingsModel.userPanel2;
            $scope.userPanel3 = SettingsModel.userPanel3;
            $scope.userPanel4 = SettingsModel.userPanel4;
        }
        else {
            console.log('Local stoage found | Loading local storage');
            $scope.loadAll();
        }
    };

    $scope.saveAll = function () {
        $scope.saveRss();
        $scope.savePrefs();
        $scope.savePanels();
    };

    $scope.loadAll = function() {
        console.log($localStorage.userPanel1);
        $scope.loadRss();
        $scope.loadPrefs();
        $scope.loadPanels();
    };

    $scope.saveRss = function() {
        $localStorage.userRss = $scope.userRss;
    };
    $scope.loadRss = function() {
        $scope.userRss = $localStorage.userRss;
    };

    $scope.savePrefs = function() {
        $localStorage.userPrefs = $scope.userPrefs;
    };
    $scope.loadPrefs = function() {
        $scope.userPrefs = $localStorage.userPrefs;
    };

    $scope.savePanels = function() {
        $localStorage.userPanel1 = $scope.userPanel1;
        $localStorage.userPanel2 = $scope.userPanel2;
        $localStorage.userPanel3 = $scope.userPanel3;
        $localStorage.userPanel4 = $scope.userPanel4;
        console.log($localStorage.userPanel1);
    };
    $scope.loadPanels = function() {
        $scope.userRss = $localStorage.userRss;
        $scope.userPrefs = $localStorage.userPrefs;
        $scope.userPanel1 = $localStorage.userPanel1;
        $scope.userPanel2 = $localStorage.userPanel2;
        $scope.userPanel3 = $localStorage.userPanel3;
        $scope.userPanel4 = $localStorage.userPanel4;
    };

});

app.service('SettingsModel', function() {
    var userPrefs = {
        primaryColor: "primary-blue",
        accentColor: "accent-red",
        theme: "0" // 0 = time controlled, 1 = light theme, 2 = dark theme
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
