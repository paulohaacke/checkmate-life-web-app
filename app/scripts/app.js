'use strict';

/**
 * @ngdoc overview
 * @name CheckmateLifeApp
 * @description
 * # CheckmateLifeApp
 *
 * Main module of the application.
 */

var app = angular.module('CheckmateLifeApp', ['ui.router', 'ngDialog', 'xeditable', 'ngMaterial', 'ngResource']);

app.run(function($rootScope, AUTH_EVENTS, AuthenticationSrvc, $mdSidenav, $mdComponentRegistry, SessionSrvc, $state) {

    $rootScope.$on(AUTH_EVENTS.logoutSuccess, function() {
        $rootScope.isAuthenticated = AuthenticationSrvc.isAuthenticated();
        $rootScope.username = SessionSrvc.userId;
    });

    $rootScope.$on(AUTH_EVENTS.loginSuccess, function() {
        $rootScope.isAuthenticated = AuthenticationSrvc.isAuthenticated();
        $rootScope.username = SessionSrvc.userId;
    });

    $rootScope.$on(AUTH_EVENTS.notAuthenticated, function() {
        $state.go('app', { "openLogin": "true" });
    });

    $rootScope.$on(AUTH_EVENTS.sessionTimeout, function() {
        $state.go('app', { "openLogin": "true" });
    });

    $rootScope.$on(AUTH_EVENTS.notAuthorized, function() {
        $state.go('app', { "openLogin": "true" });
    });

    $rootScope.$on('$stateChangeStart', function(event, next) {
        AuthenticationSrvc.loadUserSession();
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
        if ($mdComponentRegistry.get('left')) {
            $mdSidenav('left').close();
        };
    });

});

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.run(function($rootScope, TASK_STATES) {
    $rootScope.TASK_STATES = TASK_STATES;
});

app.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
    // Home route
    $stateProvider.state('app', {
        url: '/',
        params: { openLogin: null },
        views: {
            'sidemenu': {
                templateUrl: 'views/sidemenu.html',
                controller: 'MainCtrl',
                resolve: {
                    isLoginDialogOpen: function() { return true; }
                }
            },
            'header': {
                templateUrl: 'views/header.html',
                controller: 'MainCtrl',
                resolve: {
                    isLoginDialogOpen: function() { return false; }
                }
            },
            'content': {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                resolve: {
                    isLoginDialogOpen: function() { return true; }
                }
            },
            'footer': {
                templateUrl: 'views/footer.html'
            }
        },
        data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal, USER_ROLES.guest]
        }
    });

    $stateProvider.state('app.dashboard', {
        url: 'dashboard',
        views: {
            'content@': {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl',
                resolve: {
                    tasks: function(TasksFactory) { return TasksFactory.query(); },
                    goals: function(GoalsFactory) { return GoalsFactory.query(); },
                    lifeAreas: function(LifeAreaFactory) { return LifeAreaFactory.query() }
                }
            }
        },
        data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
        }
    });

    $stateProvider.state('app.purpose', {
        url: 'purpose',
        views: {
            'content@': {
                templateUrl: 'views/purpose.html',
                controller: 'PurposeCtrl'
            }
        },
        data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
        }
    });

    $stateProvider.state('app.whoami', {
        url: 'whoami',
        views: {
            'content@': {
                templateUrl: 'views/whoami.html',
                controller: 'WhoamiCtrl'
            }
        },
        data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
        }
    });

    $stateProvider.state('app.goals', {
        url: 'goals',
        views: {
            'content@': {
                templateUrl: 'views/goals.html',
                controller: 'GoalsCtrl'
            }
        },
        data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
        }
    });

    $stateProvider.state('app.tasks', {
        url: 'tasks',
        views: {
            'content@': {
                templateUrl: 'views/tasks.html',
                controller: 'TasksCtrl',
                resolve: {
                    tasks: function(TasksFactory) { return TasksFactory.query(); },
                    goals: function(GoalsFactory) { return GoalsFactory.query(); },
                    lifeAreas: function(LifeAreaFactory) { return LifeAreaFactory.query() }
                }
            }
        },
        data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
        }
    });

    $stateProvider.state('app.strategymap', {
        url: 'strategymap',
        views: {
            'content@': {
                templateUrl: 'views/strategy-map.html',
                controller: 'StrategyMapCtrl'
            }
        },
        data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
        }
    });

    $stateProvider.state('app.profile', {
        url: 'profile',
        views: {
            'content@': {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            }
        },
        data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.normal]
        }
    });

    $urlRouterProvider.otherwise('/');
});