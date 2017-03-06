'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.service:AuthenticationSrvc
 * @description
 * # AuthenticationSrvc
 * Service of the CheckmateLifeApp
 */

var app = angular.module('CheckmateLifeApp');

app.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})

app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    normal: 'normal',
    guest: 'guest'
})

app.service('AuthenticationSrvc', ['baseURL', 'USER_ROLES', 'SessionSrvc', '$q', '$timeout', function(baseURL, USER_ROLES, SessionSrvc, $q, $timeout) {

    this.createAccount = function(account) {
        SessionSrvc.create(1, account.username, USER_ROLES.admin);
    };

    this.authenticate = function(credentials) {
        var defer = $q.defer();
        $timeout(function() {
            SessionSrvc.create(1, credentials.username, USER_ROLES.admin);
            defer.resolve(credentials.username);
        });
        return defer.promise;
    };

    this.isAuthenticated = function() {
        return !!SessionSrvc.userId;
    };

    this.isAuthorized = function(authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        };
        return (this.isAuthenticated() && authorizedRoles.indexOf(SessionSrvc.userRole) !== -1);
    }

}]);