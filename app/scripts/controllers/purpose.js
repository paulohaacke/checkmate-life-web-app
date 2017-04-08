'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:PurposeCtrl
 * @description
 * # PurposeCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('PurposeCtrl', ['$scope', '$q', 'AuthenticationSrvc', 'ngDialog', '$window', 'PurposeFactory', 'ValuesFactory', function($scope, $q, AuthenticationSrvc, ngDialog, $window, PurposeFactory, ValuesFactory) {
        $scope.purpose = PurposeFactory.query(function(purposes) {
            if (purposes.length == 0) {
                PurposeFactory.save({});
            }
            $scope.purpose = purposes[0];
        });

        $scope.addValue = function(purpose) {
            ValuesFactory.save({ purposeId: purpose._id }, {},
                function(response) {
                    purpose.values.push(response);
                },
                function(error) {

                });
        }

        $scope.removeValue = function(index) {}

        $scope.saveValueContent = function(purposeId, valueId, content) {
            var d = $q.defer();
            ValuesFactory.save({
                purposeId: purposeId,
                id: valueId
            }, {
                content: content
            }, function(response) {
                d.resolve();
            }, function(error) {
                d.reject(error);
            });
            return d.promise;
        }

        $scope.saveMission = function(purposeId, mission) {
            var d = $q.defer();
            PurposeFactory.update({
                id: purposeId
            }, {
                mission: mission
            }, function(response) {
                d.resolve();
            }, function(error) {
                d.reject(error);
            });
            return d.promise;
        }

        $scope.saveVision = function(purposeId, vision) {
            var d = $q.defer();
            PurposeFactory.update({
                id: purposeId
            }, {
                vision: vision
            }, function(response) {
                d.resolve();
            }, function(error) {
                d.reject(error);
            });
            return d.promise;
        }

    }]);