'use strict';

describe('Controller: PayloadCtrl', function () {

  // load the controller's module
  beforeEach(module('rubberDuckyWeb2App'));

  var PayloadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PayloadCtrl = $controller('PayloadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PayloadCtrl.awesomeThings.length).toBe(3);
  });
});
