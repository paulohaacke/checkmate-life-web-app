'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the CheckmateLifeApp
 */
angular.module('CheckmateLifeApp')
    .controller('MainCtrl', ['$scope', '$rootScope', '$state', 'ngDialog', 'SessionSrvc', 'AuthenticationSrvc', 'AUTH_EVENTS', '$mdSidenav', '$timeout', function($scope, $rootScope, $state, ngDialog, SessionSrvc, AuthenticationSrvc, AUTH_EVENTS, $mdSidenav, $timeout) {

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

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };

        $scope.stateis = function(curstate) {
            return $state.is(curstate);
        };

        $scope.getCurrentMenuTitle = function() {
            var title = "";
            if ($scope.stateis('app.dashboard')) {
                return "Dashboard";
            } else if ($scope.stateis('app.purpose')) {
                return "Purpose";
            } else if ($scope.stateis('app.whoami')) {
                return "Who Am I?";
            } else if ($scope.stateis('app.goals')) {
                return "Goals";
            } else if ($scope.stateis('app.projects')) {
                return "Projects";
            }
        };

    }]);