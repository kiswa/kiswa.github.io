myApp.factory('BitbucketService', [
    '$http',
    function($http) {
        var url = 'https://bitbucket.org/api/2.0/';

        return {
            getRepos: function() {
                return $http.get(url + 'repositories/kiswa');
            }
        };
    }
]);
