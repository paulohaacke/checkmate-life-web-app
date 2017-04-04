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

        /*return [{
            id: 1,
            lifeAreaId: 2,
            description: "Make things better",
            metrics: [],
            dependencies: [2, 3]
        }, {
            id: 2,
            lifeAreaId: 3,
            description: "Get a raise in my job",
            metrics: [],
            dependencies: []
        }, {
            id: 3,
            lifeAreaId: 3,
            description: "Change the ways life goes",
            metrics: [],
            dependencies: []
        }];*/

    }]);