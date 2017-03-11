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

        $scope.addValue = function() {
            $scope.values.push({});
        }

        $scope.removeValue = function(index) {}

    }]);