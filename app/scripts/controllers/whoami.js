'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:WhoamiCtrl
 * @description
 * # WhoamiCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('WhoamiCtrl', ['$scope', '$state', '$q', 'ContextsFactory', 'FactsFactory', function($scope, $state, $q, ContextsFactory, FactsFactory) {

        $scope.contexts = ContextsFactory.query();

        $scope.addValue = function(context) {
            FactsFactory.save({ contextId: context._id }, {},
                function(response) {
                    context.facts.push(response);
                },
                function(error) {

                });
        }

        $scope.rmValue = function(context, value) {
            FactsFactory.delete({ contextId: context._id, id: value._id },
                function(response) {
                    context.facts.splice(context.facts.indexOf(value), 1);
                });
        }

        $scope.saveValueContent = function(contextId, valueId, description) {
            var d = $q.defer();
            FactsFactory.save({
                contextId: contextId,
                id: valueId
            }, {
                description: description
            }, function(response) {
                d.resolve();
            }, function(error) {
                d.reject(error);
            });
            return d.promise;
        }

    }]);