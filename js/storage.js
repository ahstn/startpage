/**
  * @desc Stores user settings using HTML5 localStorage
  * @author Adam Houston
  * @required AngularJS (& ngStorage module)
*/

var app = angular.module("Startpage", ["ngStorage"]);

app.controller("MainController", function($scope, $localStorage) {
    var userPrefs = {
        primaryColor: "blue",
        secondaryColor: "red",
        theme: "0" // 0 = time controlled, 1 = light theme, 2 = dark theme
    }

    var userPanel1 = [
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' }
    ]
    var userPanel2 = [
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' }
    ]
    var userPanel3 = [
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' }
    ]
    var userPanel4 = [
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' },
        { title: 'Google', url: 'http://google.com' }
    ]

    // Load User Data when page is loaded
    $scope.init = function() {
        $scope.userPrefs = userPrefs
        $scope.userPanel1 = userPanel1;
        $scope.userPanel2 = userPanel2;
        $scope.userPanel3 = userPanel3;
        $scope.userPanel4 = userPanel4;
    }

    $scope.savePrefs = function() {
        $localStorage.userPrefs = $scope.userPrefs;
    }
    $scope.loadPrefs = function() {
        $scope.userPrefs = $localStorage.userPrefs;
        $scope.userPanel1 = $localStorage.userPanel1;
    }

});
