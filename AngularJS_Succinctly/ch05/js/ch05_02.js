var app = angular.module('MyApp', ['ngResource']);

app.factory('Post', ['$resource',
    function($resource) {
        return $resource("/api/posts/:id");
    }
]);
app.controller('PostIndexCtrl', ['$scope', 'Post',
    function($scope, Post) {
        Post.query(function(data) {
            $scope.posts = data;
        });
    }
]);
app.controller('PostShowCtrl', ['$scope', 'Post',
    function($scope, Post) {
        Post.get({ id: 1 }, function(data) {
            $scope.post = data;
        });
    }
]);
