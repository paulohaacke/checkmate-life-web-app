'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.service:AddTaskCtrl
 * @description
 * # AddTaskCtrl
 * Service of the CheckmateLifeApp
 */

var app = angular.module('CheckmateLifeApp');

app.controller('AddTaskCtrl', ['$scope', 'GoalsFactory', 'TasksFactory', 'ngDialog', 'TASK_STATES', function($scope, GoalsFactory, TasksFactory, ngDialog, TASK_STATES) {

    $scope.goals = GoalsFactory;
    $scope.tasks = TasksFactory;
    $scope.isEditDialog = $scope.ngDialogData !== undefined && $scope.ngDialogData.taskId !== undefined;
    $scope.editTask = {};
    $scope.taskData = {};

    if ($scope.isEditDialog) {
        $scope.editTask = $scope.tasks.find(function(el) { return $scope.ngDialogData.taskId == el.id; });
        $scope.taskData.description = $scope.editTask.description;
        $scope.taskData.goal = $scope.goals.find(function(el) { return $scope.editTask.goalId == el.id; });
    }

    $scope.performAddTask = function() {
        if ($scope.isEditDialog) {
            $scope.editTask.description = $scope.taskData.description;
            $scope.editTask.goalId = $scope.taskData.goal.id;
        } else {
            var taskId = $scope.tasks[$scope.tasks.length - 1].id + 1;
            $scope.tasks.push({
                id: taskId,
                goalId: $scope.taskData.goal.id,
                description: $scope.taskData.description,
                state: TASK_STATES.todo
            });
        }
        ngDialog.close();
    }

    $scope.performEraseTask = function() {
        $scope.tasks.splice($scope.tasks.indexOf($scope.editTask), 1);
        ngDialog.close();
    }

}]);