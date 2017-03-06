'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the CheckmateLifeApp
 */
angular.module('CheckmateLifeApp')
    .controller('MainCtrl', ['$scope', '$rootScope', 'ngDialog', 'SessionSrvc', 'AuthenticationSrvc', 'AUTH_EVENTS', function($scope, $rootScope, ngDialog, SessionSrvc, AuthenticationSrvc, AUTH_EVENTS) {

        $scope.openRegistrationDialog = function() {
            ngDialog.open({
                template: 'views/register.html',
                scope: $scope,
                className: 'ngdialog-theme-default',
                controller: 'RegisterCtrl'
            });
        };

        $scope.openLoginDialog = function() {
            ngDialog.open({
                template: 'views/login.html',
                scope: $scope,
                className: 'ngdialog-theme-default',
                controller: 'LoginCtrl'
            });
        };

        $rootScope.$on(AUTH_EVENTS.loginSuccess, function() {
            $scope.isAuthenticated = AuthenticationSrvc.isAuthenticated();
            $scope.username = SessionSrvc.userId;
        });

    }]);