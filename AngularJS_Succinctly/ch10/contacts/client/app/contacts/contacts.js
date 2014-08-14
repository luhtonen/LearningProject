'use strict';

angular.module('contactsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contacts', {
        templateUrl: 'app/contacts/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/contacts/new', {
        templateUrl: 'app/contacts/edit.html',
        controller: 'ContactsEditCtrl'
        })
        .when('/contacts/:id', {
            templateUrl: 'app/contacts/edit.html',
            controller: 'ContactsEditCtrl'
      });
  });
