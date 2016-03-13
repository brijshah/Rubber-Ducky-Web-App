'use strict';

describe('Controller: EncoderCtrl', function () {

  // load the controller's module
  beforeEach(module('rubberDuckyWeb2App'));

  var EncoderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EncoderCtrl = $controller('EncoderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EncoderCtrl.awesomeThings.length).toBe(3);
  });
});
