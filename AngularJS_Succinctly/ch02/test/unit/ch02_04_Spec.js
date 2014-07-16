describe('MyCtrl', function() {
    var scope, ctrl;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller(MyCtrl, { $scope : scope });
    }));

    it ('should change greeting value if name value is changed', function() {
        scope.name = "Finn";
        scope.$digest();
        expect(scope.greeting).toBe("Greetings Finn");
    });
});