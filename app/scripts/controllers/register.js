'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('RegisterCtrl', ['$scope', 'AuthenticationSrvc', 'ngDialog', function($scope, AuthenticationSrvc, ngDialog) {

        $scope.registerNewUser = function() {
            AuthenticationSrvc.createAccount($scope.registrationData);
            ngDialog.close();
        };

    }]);