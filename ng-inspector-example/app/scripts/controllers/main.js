'use strict';

/**
 * @ngdoc function
 * @name ngInspectorExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngInspectorExampleApp
 */
angular.module('ngInspectorExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.A = 'Scope value MainCtrl.';
  }).controller('FirstCtrl', function ($scope) {
    $scope.B = 'Scope value FirstCtrl.';
  }).controller('SecondCtrl', function ($scope) {
    $scope.C = 'Scope value SecondCtrl.';
  });
