'use strict';

describe('Directive: IsolateDirective', function () {

  // load the directive's module
  beforeEach(module('ngInspectorExampleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-isolate-directive></-isolate-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the IsolateDirective directive');
  }));
});
