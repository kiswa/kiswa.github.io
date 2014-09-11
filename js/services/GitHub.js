myApp.factory('GitHubService', [
    '$http',
    function($http) {
        var url = 'https://api.github.com/';

        return {
            getRepos: function() {
                return $http.get(url + 'users/kiswa/repos');
            },

            getReadMe: function(name) {
                return $http.get(url + 'repos/kiswa/' + name + '/readme',
                                 { headers: {
                                     Accept: 'application/vnd.github.V3.raw' }
                                 });
            }
        };
    }
]);
