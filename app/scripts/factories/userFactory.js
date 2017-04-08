'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:UserFactory
 * @description
 * # UserFactory
 * Factory of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .factory('UserFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        return $resource(baseURL + "users", null, {
            'update': {
                method: 'PUT'
            }
        });

    }]);