'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:PurposeFactory
 * @description
 * # PurposeFactory
 * Factory of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .factory('PurposeFactory', [function() {

        return $resource(baseURL + "purpose/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

    }]);