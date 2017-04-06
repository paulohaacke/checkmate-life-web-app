'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:StrategyMapCtrl
 * @description
 * # StrategyMapCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('StrategyMapCtrl', ['$scope', '$q', 'StrategyMapSrvc', 'LifeAreaFactory', 'GoalsFactory', function($scope, $q, StrategyMapSrvc, LifeAreaFactory, GoalsFactory) {
        $scope.goals = GoalsFactory.query();
        $scope.lifeAreas = LifeAreaFactory.query();

        $q.all([
            $scope.goals.$promise,
            $scope.lifeAreas.$promise
        ]).then(function() {
            StrategyMapSrvc.create($scope.lifeAreas, $scope.goals);
        });

    }])