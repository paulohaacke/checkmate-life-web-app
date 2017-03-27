'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.service:AddGoalCtrl
 * @description
 * # AddGoalCtrl
 * Service of the CheckmateLifeApp
 */

var app = angular.module('CheckmateLifeApp');

app.controller('AddGoalCtrl', ['$scope', 'LifeAreaFactory', 'GoalsFactory', 'ngDialog', '$filter', function($scope, LifeAreaFactory, GoalsFactory, ngDialog, $filter) {

    $scope.metricTypes = ["Number of completed tasks."];
    $scope.lifeAreas = LifeAreaFactory;
    $scope.goals = GoalsFactory;
    $scope.isEditDialog = $scope.ngDialogData.goalId !== undefined;
    $scope.editGoal = {};
    $scope.goalData = {};

    if ($scope.isEditDialog) {
        $scope.editGoal = $scope.goals.find(function(el) { return $scope.ngDialogData.goalId == el.id; });
        $scope.goalData.description = $scope.editGoal.description;
        $scope.goalData.metrics = $scope.editGoal.metrics;
        $scope.goalData.dependencies = $scope.editGoal.dependencies.reduce(function(deps, curDep) {
            deps[curDep] = true;
            return deps;
        }, {});
    }

    $scope.performAddGoal = function() {
        var dependencies = Object.keys($scope.goalData.dependencies).filter(function(key) {
            return ($scope.goalData.dependencies[key] === true);
        }, {});
        if ($scope.isEditDialog) {
            $scope.editGoal.description = $scope.goalData.description;
            $scope.editGoal.metrics = $scope.goalData.metrics;
            $scope.editGoal.dependencies = dependencies;
        } else {
            var goalId = $scope.goals[$scope.goals.length - 1].id + 1;
            $scope.lifeAreas.find(function(el) { return $scope.ngDialogData.lifeAreaId == el.id; }).goals.push(goalId);
            $scope.goals.push({
                lifeAreaId: $scope.ngDialogData.lifeAreaId,
                id: goalId,
                description: $scope.goalData.description,
                metrics: $scope.goalData.metrics,
                dependencies: dependencies
            });
        }
        ngDialog.close();
    }

    $scope.performEraseGoal = function() {
        $scope.goals.splice($scope.goals.indexOf($scope.editGoal), 1);
        ngDialog.close();
    }

}]);