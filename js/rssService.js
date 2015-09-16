/**
  * @desc Parses data returned from an RSS feed url
  * @author Adam Houston
  * @required AngularJS
*/

angular.module('ngRSS', [])
.factory('ngRSS', ['$http', '$q', function ($http, $q) {
    function GetRSS(link) {
        var deferred = $q.defer();
        var yql = "http://query.yahooapis.com/v1/public/yql?q=";
        var query = yql + 'select * from xml where url=%22' + link +
          '%22&format=json&diagnostics=true&callback=';

        $http.get(query)
          .success(function (data) {
            deferred.resolve(data.query.results.rss.channel);
          })
          .error(function (err) {
            console.log('Error retreiving RSS');
            deferred.reject(err);
          });
        return deferred.promise;
    }
    return {
      GetRSS: GetRSS
    };
}]);
