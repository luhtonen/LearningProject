var app = angular.module('MyApp', []);

app.directive('repeatNtimes', function() {
    return {
        restrict: "E",
        compile: function(tElement, attrs) {
            var content = tElement.children();
            console.log("content = " + content);
            for (var i=1; i<attrs.repeat; i++) {
                tElement.append(content.clone());
            }
        }
    };
});
