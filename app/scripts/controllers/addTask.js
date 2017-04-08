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

    //$scope.goals = GoalsFactory;
    //$scope.tasks = TasksFactory;
    $scope.isEditDialog = $scope.ngDialogData !== undefined && $scope.ngDialogData.task !== undefined;
    $scope.editTask = {};
    $scope.taskData = {};

    if ($scope.isEditDialog) {
        TasksFactory.get({ id: $scope.ngDialogData.task._id })
            .$promise.then(function(response) {
                $scope.taskData.description = response.description;
                $scope.taskData.goal = response.goal;
                $scope.editTask = response;
            });
    }

    $scope.performAddTask = function() {
        var sendData = $scope.taskData;
        if ($scope.isEditDialog) {
            TasksFactory.update({ id: $scope.editTask._id }, sendData,
                function(response) {
                    $scope.ngDialogData.task.description = response.description;
                    $scope.ngDialogData.task.goal = response.goal;
                    $scope.ngDialogData.task.state = response.state;
                    ngDialog.close();
                });
        } else {
            TasksFactory.save(sendData,
                function(response) {
                    $scope.ngDialogData.tasks.push(response);
                    ngDialog.close();
                });
        }
    }

    $scope.performEraseTask = function() {
        $scope.rmTask($scope.ngDialogData.task);
        ngDialog.close();
    }

}]);