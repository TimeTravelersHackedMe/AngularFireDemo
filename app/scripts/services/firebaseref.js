'use strict';

/**
 * @ngdoc service
 * @name angularFireDemoApp.FirebaseRef
 * @description
 * # FirebaseRef
 * Factory in the angularFireDemoApp.
 */
angular.module('angularFireDemoApp')
    .factory('FirebaseRef', function ($window, FirebaseConfig) {
        return new $window.Firebase(FirebaseConfig);
    });
