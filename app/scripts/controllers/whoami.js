'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:WhoamiCtrl
 * @description
 * # WhoamiCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('WhoamiCtrl', ['$scope', 'ContextsFactory', 'FactsFactory', function($scope, ContextsFactory, FactsFactory) {

        $scope.contexts = ContextsFactory.query();

        $scope.addValue = function(contextId) {
            FactsFactory.save({ contextId: contextId }, {});
        }

    }]);