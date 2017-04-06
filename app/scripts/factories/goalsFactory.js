'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:GoalsFactory
 * @description
 * # GoalsFactory
 * Factory of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .factory('GoalsFactory', ['$resource', 'baseURL', function($resource, baseURL) {


        return $resource(baseURL + "goals/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

    }]);