'use strict';

describe('Controller: DecoderCtrl', function () {

  // load the controller's module
  beforeEach(module('rubberDuckyWeb2App'));

  var DecoderCtrl,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();

    DecoderCtrl = $controller('DecoderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should send file to backend for processing', function(){
    var mockFile = {file:[{"name":"file.bin", "size":1018, "type":"application/binary"}]};
    httpBackend.when('POST', 'http://localhost:3033/fileupload').respond(200, {config: {data: {file:{name: 'a name'}}}, data: {}});
    scope.upload(mockFile);
    httpBackend.flush();
  });

  it('should have valid controller', function() {
    expect(DecoderCtrl).toBeDefined();
  });
});
