'use strict';

/**
 * @ngdoc function
 * @name CheckmateLifeApp.controller:TasksFactory
 * @description
 * # TasksFactory
 * Factory of the CheckmateLifeApp
 */

app.constant('TASK_STATES', {
    todo: 'todo',
    doing: 'doing',
    done: 'done',
    archive: 'archive'
});

angular.module('CheckmateLifeApp')
    .factory('TasksFactory', ['TASK_STATES', function(TASK_STATES) {

        /*return $resource(baseURL + "feedback/:id", null, {
            'update': {
                method: 'PUT'
            }
        });*/

        return [{
            id: 1,
            goalId: 2,
            description: "My first action",
            state: TASK_STATES.todo
        }, {
            id: 2,
            goalId: 3,
            description: "My second action",
            state: TASK_STATES.done
        }, {
            id: 3,
            goalId: 1,
            description: "My third action",
            state: TASK_STATES.todo
        }, {
            id: 4,
            goalId: 1,
            description: "My fourth action",
            state: TASK_STATES.doing
        }, {
            id: 5,
            goalId: 3,
            description: "My fifth action",
            state: TASK_STATES.todo
        }];

    }])