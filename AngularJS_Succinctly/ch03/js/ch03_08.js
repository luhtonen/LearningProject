var app = angular.module('MyApp', []);

app.directive('tabs', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function($scope, $element, $attrs) {
            var panes = $scope.panes = [];

            $scope.select = function(pane) {
                angular.forEach(panes, function(pane) {
                    pane.selected = false;
                });
                pane.selected = true;
                console.log('selected pane: ' + pane.title);
            };
            this.addPane = function(pane) {
                if (!panes.length) $scope.select(pane);
                panes.push(pane);
            };
        },
        templateUrl: 'widget08.html',
        replace: true
    };
});
app.directive('pane', function() {
    return {
        require: "^tabs",
        restrict: 'E',
        transclude: true,
        scope: {
            title: "@"
        },
        link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        template:
            '<div class="tab-pane" ng-class="{active: selected}" ng-transclude></div>',
        replace: true
    };
});
