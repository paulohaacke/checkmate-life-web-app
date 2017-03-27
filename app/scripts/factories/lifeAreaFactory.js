'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:LifeAreaFactory
 * @description
 * # LifeAreaFactory
 * Factory of the CheckmateLifeApp
 */

angular.module('CheckmateLifeApp')
    .factory('LifeAreaFactory', [function() {


        /*return $resource(baseURL + "feedback/:id", null, {
            'update': {
                method: 'PUT'
            }
        });*/

        return [{
                id: 1,
                label: "Family and Relationship",
                goals: [],
                color: "#827717",
                "color-bg": "#e6ee9c"
            },
            {
                id: 2,
                label: "Finances",
                goals: [],
                color: "#b71c1c",
                "color-bg": "#ef9a9a"
            },
            {
                id: 3,
                label: "Health Care",
                goals: [1, 2],
                color: "#1b5e20",
                "color-bg": "#c5e1a5"
            },
            {
                id: 4,
                label: "Personal Development",
                goals: [],
                color: "#4a148c",
                "color-bg": "#b39ddb"
            }
        ];

    }])