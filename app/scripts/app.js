'use strict';

/**
 * @ngdoc overview
 * @name CheckmateLifeApp
 * @description
 * # CheckmateLifeApp
 *
 * Main module of the application.
 */

var app = angular.module('CheckmateLifeApp', ['ui.router', 'ngDialog', 'xeditable', 'ngMaterial']);

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

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
    // Home route
    $stateProvider.state('app', {
        url: '/',
        views: {
            'sidemenu': {
                templateUrl: 'views/sidemenu.html',
                controller: 'MainCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal, USER_ROLES.guest]
                }
            },
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
        url: 'dashboard',
        views: {
            'content@': {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
                }
            }
        }
    });

    $stateProvider.state('app.purpose', {
        url: 'purpose',
        views: {
            'content@': {
                templateUrl: 'views/purpose.html',
                controller: 'PurposeCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
                }
            }
        }
    });

    $stateProvider.state('app.whoami', {
        url: 'whoami',
        views: {
            'content@': {
                templateUrl: 'views/whoami.html',
                controller: 'WhoamiCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
                }
            }
        }
    });

    $stateProvider.state('app.goals', {
        url: 'goals',
        views: {
            'content@': {
                templateUrl: 'views/goals.html',
                controller: 'GoalsCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
                }
            }
        }
    });

    $stateProvider.state('app.projects', {
        url: 'projects',
        views: {
            'content@': {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl',
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
                }
            }
        }
    });

    $urlRouterProvider.otherwise('/');
});