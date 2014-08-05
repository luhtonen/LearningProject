'use strict';

angular.module('contactsApp')
  .controller('ContactsCtrl', function ($scope, Contact) {
    $scope.contacts = Contact.index();
  });
