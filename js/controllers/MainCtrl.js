myApp.controller('MainCtrl', [
    '$scope', 'GitHubService', 'BitbucketService',
    function($scope, GitHubService, BitbucketService) {
        $scope.bbRepos = [];
        $scope.repos = [];
        $scope.readme = {
            text: 'Click the magnifying glass on a project and the README will be displayed here.'
        };

        $scope.getReadMe = function(repo) {
            GitHubService.getReadMe(repo.name)
            .success(function(data) {
                $scope.readme.text = marked(data);
            });
        };

        GitHubService.getRepos()
        .success(function(data) {
            $scope.repos = data;
        });

        BitbucketService.getRepos()
        .success(function(data) {
            $scope.bbRepos = data.values;
        })
    }
]);
