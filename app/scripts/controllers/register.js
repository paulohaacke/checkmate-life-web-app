'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('RegisterCtrl', ['$scope', '$rootScope', 'AuthenticationSrvc', 'ngDialog', 'AUTH_EVENTS', '$state', function($scope, $rootScope, AuthenticationSrvc, ngDialog, AUTH_EVENTS, $state) {

        $scope.registerNewUser = function() {
            AuthenticationSrvc.createAccount($scope.registrationData)
                .then(function(response) {
                    AuthenticationSrvc.authenticate($scope.registrationData)
                        .then(function(response) {
                            if (response.success) {
                                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                                ngDialog.close();
                                $state.go('app.purpose');
                            } else {
                                ngDialog.close();
                            }
                        }, function(error) {
                            ngDialog.close();
                        });
                }, function(error) {
                    ngDialog.close();
                });
        };

    }]);