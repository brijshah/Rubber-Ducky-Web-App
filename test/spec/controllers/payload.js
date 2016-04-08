'use strict';

describe('Controller: PayloadCtrl', function () {

  // load the controller's module
  beforeEach(module('rubberDuckyWeb2App'));

  var PayloadCtrl,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();
    PayloadCtrl = $controller('PayloadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have valid parameters selected for download', function() {
    if(scope.isOperatingSystemSelected && ((scope.isRecSelected && scope.isReportSelected) || scope.isExpSelected)) {
      expect(scope.downloadReady).toBeTruthy();
      expect(scope.errors).toBe(" ");
    }
  });

  it('should have valid controller', function() {
    expect(PayloadCtrl).toBeDefined();
  });
});
