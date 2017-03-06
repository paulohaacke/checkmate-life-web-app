'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.service:SessionSrvc
 * @description
 * # SessionSrvc
 * Service of the CheckmateLifeApp
 */

var app = angular.module('CheckmateLifeApp');

app.service('SessionSrvc', [function() {

    this.create = function(sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };

    this.destroy = function() {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };

}]);