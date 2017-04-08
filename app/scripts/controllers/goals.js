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

        $scope.lifeAreas = LifeAreaFactory.query();
        $scope.goals = GoalsFactory.query();

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
                data: { goals: $scope.goals, lifeAreaId: lifeAreaId },
                className: 'ngdialog-theme-default',
                controller: 'AddGoalCtrl'
            });
        }

        $scope.openEditGoalDialog = function(lifeAreaId, goal) {
            ngDialog.open({
                template: 'views/add-goal.html',
                scope: $scope,
                data: { goals: $scope.goals, lifeAreaId: lifeAreaId, goal: goal },
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

        $scope.rmGoal = function(area, goal) {
            GoalsFactory.delete({ id: goal._id },
                function(response) {
                    $scope.goals.splice($scope.goals.indexOf(goal), 1);
                });
            ngDialog.close();
        }

    }]);