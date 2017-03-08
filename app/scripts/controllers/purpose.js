'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:PurposeCtrl
 * @description
 * # PurposeCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('PurposeCtrl', ['$scope', 'AuthenticationSrvc', 'ngDialog', '$window', function($scope, AuthenticationSrvc, ngDialog, $window) {
        $scope.mission = "My Mission is that...My Mission is thssion is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missiat...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Missission is that...My Mission is that...My Mission is that...My Mission is that...My Mission is that...My Mission is that...";
        $scope.values = [{ content: "First Value" }, { content: "second Value" }];

        $scope.AddValue = function() {
            $scope.values.push({ content: "Edit this value." });
        }

        $scope.RemoveValue = function(index) {}

    }]);