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

  it('should populate windows scripts', function() {
    scope.payloadParams.os = 'Windows';
    expect(scope.recOptions).toEqual(scope.WinRec);
    expect(scope.expOptions).toEqual(scope.WinExp);
    expect(scope.reportOptions).toEqual(scope.WinRep);
  });

  it('should populate osx scripts', function() {
    scope.payloadParams.os = 'OSX';
    expect(scope.recOptions).toEqual(scope.osxRec);
    expect(scope.expOptions).toEqual(scope.osxExp);
    expect(scope.reportOptions).toEqual(scope.osxRep);
  });

  it('should populate linux scripts', function() {
    scope.payloadParams.os = 'Linux';
    expect(scope.recOptions).toEqual(scope.linuxRec);
    expect(scope.expOptions).toEqual(scope.linuxExp);
    expect(scope.reportOptions).toEqual(scope.linuxRep);
  });

  it('should unselect exploit if recon is selected', function() {
    if(scope.recSelection) {
      expect(scope.payloadParams.exp).toBe(null);
    }
  });

  it('should unselect recon if exploit is selected', function() {
    if(scope.expSelection) {
      expect(scope.payloadParams.rec).toBe(null);
    }
  });

  it('should have valid controller', function() {
    expect(PayloadCtrl).toBeDefined();
  });
});
