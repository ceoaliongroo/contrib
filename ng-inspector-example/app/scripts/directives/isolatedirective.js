'use strict';

/**
 * @ngdoc directive
 * @name ngInspectorExampleApp.directive:IsolateDirective
 * @description
 * # IsolateDirective
 */
angular.module('ngInspectorExampleApp')
  .directive('isolateDirective', function () {
    return {
      template: '<div>Directive Isolated / D: {{D}}</div>',
      restrict: 'AEC',
      scope: true,
      link: function postLink(scope) {
        scope.D = 'Isolated scope direcive.'
      }
    };
  });
