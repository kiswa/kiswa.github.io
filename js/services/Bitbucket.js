myApp.factory('BitbucketService', [
    '$http',
    function($http) {
        var urlv2 = 'https://api.bitbucket.org/2.0',
            urlv1 = 'https://api.bitbucket.org/1.0',
            callback = '?callback=JSON_CALLBACK';

        return {
            getRepos: function() {
                return $http.jsonp(urlv2 + '/repositories/kiswa' + callback);
            },

            getIssues: function(repo) {
                return $http.jsonp(urlv1 + '/repositories/kiswa/' + repo + '/issues/' + callback + '&status=open');
            },

            getWatchers: function(repo) {
                return $http.jsonp(urlv2 + '/repositories/kiswa/' + repo + '/watchers' + callback);
            }
        };
    }
]);
