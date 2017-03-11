'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:WhoamiCtrl
 * @description
 * # WhoamiCtrl
 * Controller of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .controller('WhoamiCtrl', ['$scope', function($scope) {

        $scope.contexts = {
            Strengths: { content: [], color: "#827717", "color-bg": "#e6ee9c" },
            Weaknessess: { content: [], color: "#b71c1c", "color-bg": "#ef9a9a" },
            Opportunities: { content: [], color: "#1b5e20", "color-bg": "#c5e1a5" },
            Obstacles: { content: [], color: "#4a148c", "color-bg": "#b39ddb" }
        };

        $scope.addValue = function(context) {
            $scope.contexts[context].content.push({});
        }

    }]);