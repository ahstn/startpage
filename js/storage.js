/**
  * @desc Stores user settings using HTML5 localStorage
  * @author Adam Houston
  * @required AngularJS (ngStorage module & SettingsModel (storageModel.js))
*/

var app = angular.module("Startpage", ["ngStorage", "SettingsModel"]);

app.controller("MainController", function($scope, $localStorage, $interval, SettingsModel) {
    $scope.date = new Date();
    $scope.theme = '';

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
            $scope.stylesheet();
        }
        else {
            console.log('Local stoage found | Loading local storage');
            $scope.loadAll();
            $scope.stylesheet();
        }
    };

    $scope.stylesheet = function() {
        var hour = $scope.date.getHours();
        if ($scope.userPrefs.theme == '0' && (hour >= 17 || hour <= 6 )) {
            $scope.theme = 'css/material-dark.css';
        }
        else if ($scope.userPrefs.theme == '0') {
            $scope.theme = 'css/material.css';
        }
        else if ($scope.userPrefs.theme == '1') {
            $scope.theme = 'css/material.css';
        }
        else if ($scope.userPrefs.theme == '2') {
            $scope.theme = 'css/material-dark.css';
        }
    };
    // Refresh the date and stylesheet every 1000ms (1 second)
    $interval(function () {
        $scope.date = new Date();
        $scope.stylesheet();
    }.bind(this), 1000);

    $scope.saveAll = function() {
        $scope.saveRss();
        $scope.savePrefs();
        $scope.savePanels();
        $scope.stylesheet();
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
