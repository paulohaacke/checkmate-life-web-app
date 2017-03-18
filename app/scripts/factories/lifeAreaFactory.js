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
                goals: [
                    { id: 1, content: "Create a better relation with people", metrics: [], dependencies: ["2.1"] }
                ],
                color: "#827717",
                "color-bg": "#e6ee9c"
            },
            {
                id: 2,
                label: "Finances",
                goals: [
                    { id: 1, content: "Make more money increasing salary", metrics: [], dependencies: ["3.1", "3.2"] }
                ],
                color: "#b71c1c",
                "color-bg": "#ef9a9a"
            },
            {
                id: 3,
                label: "Health Care",
                goals: [
                    { id: 1, content: "Go to the doctor once a month", metrics: [], dependencies: ["4.2", "4.4"] },
                    { id: 2, content: "Take more care with food you eat", metrics: [], dependencies: ["4.1"] },
                    { id: 3, content: "Change some life habits with sports", metrics: [], dependencies: ["4.4", "4.3", "3.1"] }
                ],
                color: "#1b5e20",
                "color-bg": "#c5e1a5"
            },
            {
                id: 4,
                label: "Personal Development",
                goals: [
                    { id: 1, content: "Get one more degree of education", metrics: [], dependencies: [] },
                    { id: 2, content: "Make your master thesis", metrics: [], dependencies: [] },
                    { id: 3, content: "Manage to get a promotion", metrics: [], dependencies: [] },
                    { id: 4, content: "Get better communication skills", metrics: [], dependencies: [] }
                ],
                color: "#4a148c",
                "color-bg": "#b39ddb"
            }
        ];

    }])