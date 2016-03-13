'use strict';

describe('Controller: DecoderCtrl', function () {

  // load the controller's module
  beforeEach(module('rubberDuckyWeb2App'));

  var DecoderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DecoderCtrl = $controller('DecoderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DecoderCtrl.awesomeThings.length).toBe(3);
  });
});
