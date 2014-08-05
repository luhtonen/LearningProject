'use strict';

angular.module('contactsApp')
  .factory('Contact', function ($resource) {
        return $resource("/api/contacts/:id", { id: "@_id" },
            {
                'create':   { method: 'POST' },
                'index':    { method: 'GET', isArray: true },
                'show':     { method: 'GET', isArray: false },
                'update':   { method: 'PUT' },
                'destroy':  { method: 'DELETE' }
            });
  });
