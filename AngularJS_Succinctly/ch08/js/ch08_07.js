var app = angular.module('MyApp', ['ui.bootstrap']);

app.controller('MyCtrl', ['$scope', '$modal', function($scope, $modal) {
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'templ08_07.html',
            controller: 'ModalCtrl'
        });
    };
}]);
app.controller('ModalCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
    $scope.ok = function () {
        $modalInstance.close();
    };
    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
}]);