'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('TasksCtrl', ['$scope', 'TasksFactory', 'GoalsFactory', 'LifeAreaFactory', 'TASK_STATES', 'ngDialog', function($scope, TasksFactory, GoalsFactory, LifeAreaFactory, TASK_STATES, ngDialog) {
        $scope.tasks = TasksFactory;
        $scope.goals = GoalsFactory;
        $scope.lifeAreas = LifeAreaFactory;

        $scope.getColorFromGoal = function(goalId) {
            var lifeAreaId = $scope.goals.find(function(el) { return goalId == el.id; }).lifeAreaId;
            var lifeArea = $scope.lifeAreas.find(function(el) { return lifeAreaId == el.id; });
            return lifeArea['color-bg'];
        };

        $scope.changeTaskState = function(taskId, state) {
            $scope.tasks.find(function(el) { return taskId == el.id; }).state = state;
        }

        $scope.openAddTaskDialog = function() {
            ngDialog.open({
                template: 'views/add-task.html',
                scope: $scope,
                className: 'ngdialog-theme-default',
                controller: 'AddTaskCtrl'
            });
        }

        $scope.openEditTaskDialog = function(taskId) {
            ngDialog.open({
                template: 'views/add-task.html',
                scope: $scope,
                data: { taskId: taskId },
                className: 'ngdialog-theme-default',
                controller: 'AddTaskCtrl'
            });
        }

    }])