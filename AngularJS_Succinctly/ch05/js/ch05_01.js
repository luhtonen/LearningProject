var app = angular.module('MyApp', []);

app.controller('PostsCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/posts.json').
            success(function(data, status, headers, config) {
                $scope.posts = data;
            }).
            error(function(data, status, headers, config) {
                console.log("ERROR");
            });
    }
]);