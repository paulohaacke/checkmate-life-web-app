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
    $scope.isEditDialog = $scope.ngDialogData.goalId !== undefined;
    $scope.editGoal = {};
    $scope.goalData = {};

    if ($scope.isEditDialog) {
        $scope.editGoal = GoalsFactory.get({ id: $scope.ngDialogData.goalId })
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
            GoalsFactory.update({ id: $scope.editGoal._id }, sendData);
        } else {
            sendData.lifeArea = $scope.ngDialogData.lifeAreaId;
            GoalsFactory.save(sendData);
        }
        $state.go($state.current, {}, { reload: true });
        ngDialog.close();
    }

    $scope.performEraseGoal = function() {
        GoalsFactory.delete({ id: $scope.editGoal._id });
        $state.go($state.current, {}, { reload: true });
        ngDialog.close();
    }

}]);