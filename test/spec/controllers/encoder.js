'use strict';

describe('Controller: EncoderCtrl', function () {

  // load the controller's module
  beforeEach(module('rubberDuckyWeb2App'));

  var EncoderCtrl,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend; //global var for this test
    scope = $rootScope.$new();

    EncoderCtrl = $controller('EncoderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    httpBackend.whenGET('views/main.html').respond(200, '');
  }));

  // it('should test encoder route', function(){
  //   expect($route.routes['/encoder'].controller).toBe('EncoderCtrl');
  //   expect($route.routes['/encoder'].templateUrl).toEqual('views/encoder.html');
  // });

  it('should send user text content to backend and generate valid download link', function() {
    httpBackend.when('POST', 'http://localhost:3033/makeFile').respond(204, {"link":"http://localhost:3033/encode/inject.bin"});
    scope.makeFile();
    httpBackend.flush();
    expect(scope.downloadReady).toBeTruthy();
    expect(scope.downloadBinFile).toEqual('http://localhost:3033/encode/inject.bin');
  });

  it('should have valid controller', function() {
    expect(EncoderCtrl).toBeDefined();
  });
});
