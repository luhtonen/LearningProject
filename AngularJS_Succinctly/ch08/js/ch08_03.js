var app = angular.module('MyApp', []);

app.factory('Item', function() {
    var items = [];
    for (var i = 0; i < 50; i++) {
        items.push({
            id: i, name: "name " + i, description: "description " + i
        });
    }
    return {
        get: function(offset, limit) {
            return items.slice(offset, offset+limit);
        },
        total: function() {
            return items.length;
        }
    };
});

app.controller('PaginationCtrl', ['$scope', 'Item', function($scope, Item) {
    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;

    $scope.range = function() {
        var rangeSize = $scope.itemsPerPage;
        var start = $scope.currentPage;
        var ret = [];
        if (start > $scope.pageCount() - rangeSize) {
            start = $scope.pageCount() - rangeSize + 1;
        }
        for (var i = start; i < start + rangeSize; i++) {
            ret.push(i);
        }
        return ret;
    };
    $scope.prevPage = function() {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    $scope.prevPageDisabled = function() {
        return $scope.currentPage === 0 ? 'disabled' : '';
    };
    $scope.pageCount = function() {
        return Math.ceil($scope.total/$scope.itemsPerPage)-1;
    };
    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };
    $scope.nextPageDisabled = function() {
        return $scope.currentPage === $scope.pageCount() ? 'disabled' : '';
    };
    $scope.setPage = function(n) {
        $scope.currentPage = n;
    };
    $scope.$watch('currentPage', function(newValue, oldValue) {
        $scope.pagedItems = Item.get(newValue * $scope.itemsPerPage, $scope.itemsPerPage);
        $scope.total = Item.total();
    });
}]);