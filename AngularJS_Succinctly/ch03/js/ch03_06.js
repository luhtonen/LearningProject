var app = angular.module('MyApp', []);

app.controller('MyCtrl', ['$scope', function($scope) {
    $scope.repeat = 10;
}])
    .directive('repeatNTimes', function() {
    return {
        restrict: "E",
        compile: function (tElement, tAttrs) {
            var content = tElement.children();
            for (var i = 1; i < tAttrs.repeat; i++) {
                tElement.append(content.clone());
            }
            return function (scope, element, attrs) {
                element.on('click', 'h1', function() {
                    $(this).css({ "background-color": "grey" });
                });
            };
        }
    };
});
