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
        }
    }]);