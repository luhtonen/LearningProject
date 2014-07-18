var app = angular.module('MyApp', []);

app.directive('repeatNTimes', function() {
    return {
        restrict: "E",
        compile: function (tElement, tAttrs) {
            var content = tElement.children();
            for (var i = 1; i < tAttrs.repeat; i++) {
                tElement.append(content.clone());
            }
        }
    };
});
