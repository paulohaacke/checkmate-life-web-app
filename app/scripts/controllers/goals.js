'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:GoalsCtrl
 * @description
 * # GoalsCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('GoalsCtrl', ['$scope', '$window', 'ngDialog', 'LifeAreaFactory', function($scope, $window, ngDialog, LifeAreaFactory) {

        $scope.lifeAreas = LifeAreaFactory;

        $scope.addLifeArea = function(name, color, colorBg) {
            $scope.lifeAreas[name] = {
                content: [],
                color: color,
                "color-bg": colorBg
            };
        }

        $scope.openAddGoalDialog = function() {
            ngDialog.open({
                template: 'views/add-goal.html',
                scope: $scope,
                className: 'ngdialog-theme-default',
                controller: 'AddGoalCtrl'
            });
        }

        $scope.viewStrategyMapDialog = function() {
            ngDialog.open({
                template: 'views/strategy-map.html',
                scope: $scope,
                className: 'ngdialog-theme-default',
                controller: 'StrategyMapCtrl'
            });
        };

    }]);