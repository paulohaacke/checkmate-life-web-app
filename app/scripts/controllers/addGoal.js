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
    $scope.lifeAreas = LifeAreaFactory.query();
    $scope.goals = GoalsFactory.query();
    $scope.isEditDialog = $scope.ngDialogData.goalId !== undefined;
    $scope.editGoal = {};
    $scope.goalData = {};

    if ($scope.isEditDialog) {
        $scope.editGoal = GoalsFactory.get({ id: $scope.ngDialogData.goalId })
            .$promise.then(function(response) {
                $scope.goalData.description = response.description;
                $scope.goalData.metrics = response.metrics;
                $scope.goalData.dependencies = response.dependencies.reduce(function(deps, curDep) {
                    deps[curDep] = true;
                    return deps;
                }, {});
                $scope.editGoal = response;
            });
        /*$scope.goals.find(function(el) {
            return $scope.ngDialogData.goalId == el._id;
});*/

    }

    $scope.performAddGoal = function() {
        var dependencies = Object.keys($scope.goalData.dependencies).filter(function(key) {
            return ($scope.goalData.dependencies[key] === true);
        }, {});
        if ($scope.isEditDialog) {
            $scope.editGoal.description = $scope.goalData.description;
            $scope.editGoal.metrics = $scope.goalData.metrics;
            $scope.editGoal.dependencies = dependencies;
            GoalsFactory.update({ id: $scope.editGoal._id }, $scope.editGoal);
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