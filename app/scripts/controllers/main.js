'use strict';

/**
 * @ngdoc function
 * @name checkmateLifeWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the checkmateLifeWebAppApp
 */
angular.module('checkmateLifeApp')
    .controller('MainCtrl', ['$scope', 'ngDialog', function($scope, ngDialog) {

        $scope.openRegistrationDialog = function() {
            ngDialog.open({
                template: 'views/register.html',
                scope: $scope,
                className: 'ngdialog-theme-default',
                controller: 'RegisterCtrl'
            });
        };

        $scope.registerNewUser = function() {
            ngDialog.close();
        };

        $scope.openLoginDialog = function() {
            ngDialog.open({
                template: 'views/login.html',
                scope: $scope,
                className: 'ngdialog-theme-default',
                controller: 'LoginCtrl'
            });
        };

        $scope.performLogin = function() {
            ngDialog.close();
        };

    }]);