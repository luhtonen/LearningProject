'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myAngularPhonecatApp'));

  var PhoneListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
      PhoneListCtrl = $controller('PhoneListCtrl', {
      $scope: scope
    });
  }));

  it('should create "phones" model with 3 phones', function () {
    expect(scope.phones.length).toBe(3);
  });

  it('should have name equal to "World"', function() {
      expect(scope.name).toBe('World');
  });
});
