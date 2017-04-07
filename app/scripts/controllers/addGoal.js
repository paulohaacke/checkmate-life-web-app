'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.service:AddGoalCtrl
 * @description
 * # AddGoalCtrl
 * Service of the CheckmateLifeApp
 */

var app = angular.module('CheckmateLifeApp');

app.controller('AddGoalCtrl', ['$scope', '$state', 'LifeAreaFactory', 'GoalsFactory', 'ngDialog', '$filter', function($scope, $state, LifeAreaFactory, GoalsFactory, ngDialog, $filter) {

    $scope.metricTypes = ["Number of completed tasks."];
    $scope.lifeAreas = LifeAreaFactory.query();
    $scope.goals = GoalsFactory.query();
    $scope.isEditDialog = $scope.ngDialogData.goal !== undefined;
    $scope.editGoal = {};
    $scope.goalData = {};

    if ($scope.isEditDialog) {
        GoalsFactory.get({ id: $scope.ngDialogData.goal._id })
            .$promise.then(function(response) {
                $scope.goalData.description = response.description;
                $scope.goalData.metrics = response.metrics.length > 0 ? response.metrics[0].description : "";
                $scope.goalData.dependencies = response.dependencies.reduce(function(deps, curDep) {
                    deps[curDep] = true;
                    return deps;
                }, {});
                $scope.editGoal = response;
            });
    }

    $scope.performAddGoal = function() {
        var sendData = $scope.goalData;
        sendData.metrics = sendData.metrics !== undefined ? [{ description: sendData.metrics }] : [];
        sendData.dependencies = Object.keys($scope.goalData.dependencies).filter(function(key) {
            return ($scope.goalData.dependencies[key] === true);
        }, {});
        if ($scope.isEditDialog) {
            GoalsFactory.update({ id: $scope.editGoal._id }, sendData,
                function(response) {
                    $scope.ngDialogData.goal.description = response.description;
                    ngDialog.close();
                });
        } else {
            sendData.lifeArea = $scope.ngDialogData.lifeAreaId;
            GoalsFactory.save(sendData,
                function(response) {
                    $scope.ngDialogData.goals.push(response);
                    ngDialog.close();
                });
        }

    }

    $scope.performEraseGoal = function() {
        GoalsFactory.delete({ id: $scope.editGoal._id },
            function(response) {
                $scope.ngDialogData.goals.splice($scope.ngDialogData.goals.indexOf($scope.ngDialogData.goal), 1);
            });
        ngDialog.close();
    }

}]);