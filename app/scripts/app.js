'use strict';

/**
 * @ngdoc overview
 * @name checkmateLifeApp
 * @description
 * # checkmateLifeApp
 *
 * Main module of the application.
 */

angular.module('checkmateLifeApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        // Home route
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html',
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    });