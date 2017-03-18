'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.service:AddGoalSrvc
 * @description
 * # AddGoalSrvc
 * Service of the CheckmateLifeApp
 */

var app = angular.module('CheckmateLifeApp');

app.controller('AddGoalCtrl', ['$scope', 'LifeAreaFactory', function($scope, LifeAreaFactory) {

    $scope.lifeAreas = LifeAreaFactory;

    $scope.addGoal = function(lifeAreaId, goalId, content, metrics, dependencies) {
        $scope.lifeAreas.find(function(el) { return lifeAreaId == el.id; }).goals.push({
            id: goalId,
            content: content,
            metrics: metrics,
            dependencies: dependencies
        });
    }

}]);