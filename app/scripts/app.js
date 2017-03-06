'use strict';

/**
 * @ngdoc overview
 * @name CheckmateLifeApp
 * @description
 * # CheckmateLifeApp
 *
 * Main module of the application.
 */

var app = angular.module('CheckmateLifeApp', ['ui.router', 'ngDialog']);

app.run(function($rootScope, AUTH_EVENTS, AuthenticationSrvc) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
        if (next.data) {
            var authorizedRoles = next.data.authorizedRoles;
            if (!AuthenticationSrvc.isAuthorized(authorizedRoles)) {
                event.preventDefault();
                if (AuthenticationSrvc.isAuthenticated()) {
                    // user is not allowed
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                } else {
                    // user is not logged in
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            };
        };
    });
});

app.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
    // Home route
    $stateProvider.state('app', {
        url: '/',
        views: {
            'header': {
                templateUrl: 'views/header.html',
                controller: 'MainCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal, USER_ROLES.guest]
                }
            },
            'content': {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal, USER_ROLES.guest]
                }
            },
            'footer': {
                templateUrl: 'views/footer.html',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal, USER_ROLES.guest]
                }
            }
        }
    });

    $stateProvider.state('app.dashboard', {
        url: '/',
        views: {
            'content': {
                templateUrl: 'views/purpose.html',
                controller: 'PurposeCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal, USER_ROLES.guest]
                }
            }
        }
    });


    $urlRouterProvider.otherwise('/');
});