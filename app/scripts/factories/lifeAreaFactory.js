'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:LifeAreaFactory
 * @description
 * # LifeAreaFactory
 * Factory of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .factory('LifeAreaFactory', ['$resource', 'baseURL', function($resource, baseURL) {


        return $resource(baseURL + "lifeareas/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

    }]);