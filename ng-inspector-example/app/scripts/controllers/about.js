'use strict';

/**
 * @ngdoc function
 * @name ngInspectorExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngInspectorExampleApp
 */
angular.module('ngInspectorExampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
