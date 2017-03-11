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
        $scope.values = [];

        $scope.AddValue = function() {
            $scope.values.push({});
        }

        $scope.RemoveValue = function(index) {}

    }]);