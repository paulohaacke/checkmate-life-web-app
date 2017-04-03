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

app.service('AuthenticationSrvc', ['baseURL', 'USER_ROLES', 'SessionSrvc', '$q', '$timeout', '$resource', '$rootScope', 'AUTH_EVENTS', function(baseURL, USER_ROLES, SessionSrvc, $q, $timeout, $resource, $rootScope, AUTH_EVENTS) {

    this.createAccount = function(account) {
        return $resource(baseURL + "users/register").save(account).$promise;
    };

    this.authenticate = function(credentials) {
        var defer = $q.defer();
        $resource(baseURL + "users/login").save(credentials)
            .$promise.then(function(response) {
                if (response.success) {
                    SessionSrvc.create(response.token, credentials.username, USER_ROLES.normal);
                }
                defer.resolve(response);
            }, function(error) {
                defer.reject(error);
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

    this.logout = function() {
        SessionSrvc.destroy();
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    }

}]);