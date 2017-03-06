'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('LoginCtrl', ['$scope', '$rootScope', 'AuthenticationSrvc', 'ngDialog', 'AUTH_EVENTS', function($scope, $rootScope, AuthenticationSrvc, ngDialog, AUTH_EVENTS) {

        $scope.performLogin = function() {
            AuthenticationSrvc.authenticate($scope.loginData).then(function(username) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                //$scope.setCurrentUser(username);
            });
            ngDialog.close();
        };

    }]);