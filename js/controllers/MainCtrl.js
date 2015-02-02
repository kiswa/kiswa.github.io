myApp.controller('MainCtrl', [
    '$scope', 'GitHubService', 'BitbucketService',
    function($scope, GitHubService, BitbucketService) {
        $scope.bbRepos = [];
        $scope.repos = [];
        $scope.readme = {
            text: 'Click the magnifying glass on a GitHub project and the README will display here.'
        };

        $scope.getReadMe = function(repo) {
            GitHubService.getReadMe(repo.name)
            .success(function(data) {
                $scope.readme.text = marked(data);
            });
        };

        $scope.loadIssues = function() {
            for (var i = 0; i < $scope.bbRepos.length; ++i) {
                var repoName = $scope.bbRepos[i].full_name.split('/')[1];
                $scope.bbRepos[i].open_issues_count = "N/A";

                if ($scope.bbRepos[i].has_issues) {
                    BitbucketService.getIssues(repoName)
                    .success(function(data, status, headers, config) {
                        var name = config.url.split('/')[6];
                        for (var i = 0; i < $scope.bbRepos.length; ++i) {
                            if ($scope.bbRepos[i].full_name.split('/')[1] == name) {
                                $scope.bbRepos[i].open_issues_count = data.count;
                            }
                        }
                    });
                }
            }
        };

        $scope.loadWatchers = function() {
            for (var i = 0; i < $scope.bbRepos.length; ++i) {
                var repoName = $scope.bbRepos[i].full_name.split('/')[1];
                $scope.bbRepos[i].watchers_count = 0;

                if ($scope.bbRepos[i].has_issues) {
                    BitbucketService.getWatchers(repoName)
                    .success(function(data, status, headers, config) {
                        var name = config.url.split('/')[6];
                        for (var i = 0; i < $scope.bbRepos.length; ++i) {
                            if ($scope.bbRepos[i].full_name.split('/')[1] == name) {
                                $scope.bbRepos[i].watchers_count = data.size;
                            }
                        }
                    });
                }
            }
        };

        GitHubService.getRepos()
        .success(function(data) {
            $scope.repos = data;
        });

        BitbucketService.getRepos()
        .success(function(data) {
            $scope.bbRepos = data.values;
            $scope.loadIssues();
            $scope.loadWatchers();
        });
    }
]);
