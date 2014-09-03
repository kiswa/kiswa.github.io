myApp.factory('GitHubService', [
    '$http',
    function($http) {
        var url = 'https://api.github.com/';

        return {
            getRepos: function() {
                return $http.get(url + 'users/kiswa/repos');
            }
        };
    }
]);
