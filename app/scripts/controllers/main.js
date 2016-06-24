'use strict';

/**
 * @ngdoc function
 * @name angularFireDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFireDemoApp
 */
angular.module('angularFireDemoApp')
  .controller('MainCtrl', function ($scope, FirebaseRef) {
    $scope.$watch('bindedInput', function() {
      FirebaseRef.child('bindedInput').update({
        bindedInput: $scope.bindedInput
      });
    }, true);
  });
