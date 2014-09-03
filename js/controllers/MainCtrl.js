myApp.controller('MainCtrl', [
    '$scope', 'GitHubService',
    function($scope, GitHubService) {
        $scope.repos = [];

        GitHubService.getRepos()
        .success(function(data) {
            $scope.repos = data;
            console.log(data);
        });
    }
]);
