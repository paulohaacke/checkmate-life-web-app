'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:GoalsCtrl
 * @description
 * # GoalsCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('GoalsCtrl', ['$scope', '$window', 'ngDialog', 'LifeAreaFactory', 'GoalsFactory', function($scope, $window, ngDialog, LifeAreaFactory, GoalsFactory) {

        $scope.lifeAreas = LifeAreaFactory;
        $scope.goals = GoalsFactory;

        $scope.addLifeArea = function(name, color, colorBg) {
            $scope.lifeAreas[name] = {
                content: [],
                color: color,
                "color-bg": colorBg
            };
        }

        $scope.openAddGoalDialog = function(lifeAreaId) {
            ngDialog.open({
                template: 'views/add-goal.html',
                scope: $scope,
                data: { lifeAreaId: lifeAreaId },
                className: 'ngdialog-theme-default',
                controller: 'AddGoalCtrl'
            });
        }

        $scope.openEditGoalDialog = function(lifeAreaId, goalId) {
            ngDialog.open({
                template: 'views/add-goal.html',
                scope: $scope,
                data: { lifeAreaId: lifeAreaId, goalId: goalId },
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