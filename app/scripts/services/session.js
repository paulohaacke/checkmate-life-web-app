'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.service:SessionSrvc
 * @description
 * # SessionSrvc
 * Service of the CheckmateLifeApp
 */

var app = angular.module('CheckmateLifeApp');

app.service('SessionSrvc', ['$http', function($http) {

    this.create = function(sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
        $http.defaults.headers.common['x-access-token'] = this.id;
    };

    this.destroy = function() {
        this.id = null;
        this.userId = null;
        this.userRole = null;
        $http.defaults.headers.common['x-access-token'] = this.id;
    };

}]);