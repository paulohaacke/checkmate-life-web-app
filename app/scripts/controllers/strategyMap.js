'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:StrategyMapCtrl
 * @description
 * # StrategyMapCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('StrategyMapCtrl', ['$scope', 'StrategyMapSrvc', 'LifeAreaFactory', function($scope, StrategyMapSrvc, LifeAreaFactory) {
        $(function() { StrategyMapSrvc.create(LifeAreaFactory); });
    }])