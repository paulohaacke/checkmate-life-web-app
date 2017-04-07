'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:PurposeCtrl
 * @description
 * # PurposeCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('PurposeCtrl', ['$scope', 'AuthenticationSrvc', 'ngDialog', '$window', 'PurposeFactory', 'ValuesFactory', function($scope, AuthenticationSrvc, ngDialog, $window, PurposeFactory, ValuesFactory) {
        $scope.purpose = PurposeFactory.query(function(purposes) {
            $scope.purpose = purposes[0];
        });

        $scope.addValue = function(purpose) {
            $scope.purpose.save({});
            ValuesFactory.save({ purposeId: purpose._id }, {},
                function(response) {
                    purpose.values.push(response);
                },
                function(error) {

                });
        }

        $scope.removeValue = function(index) {}

    }]);