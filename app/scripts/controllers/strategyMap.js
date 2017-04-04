'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:StrategyMapCtrl
 * @description
 * # StrategyMapCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('StrategyMapCtrl', ['$scope', 'StrategyMapSrvc', 'LifeAreaFactory', 'GoalsFactory', function($scope, StrategyMapSrvc, LifeAreaFactory, GoalsFactory) {
        $(function() { StrategyMapSrvc.create(LifeAreaFactory.query(), GoalsFactory.query()); });
    }])