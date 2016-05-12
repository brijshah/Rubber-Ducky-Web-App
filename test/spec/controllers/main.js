'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('rubberDuckyWeb2App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should open new browser window on click', inject(function ($window) {
    spyOn($window, 'open').and.callFake(function() {
      return true;
    });
    scope.openTab();
    expect($window.open).toHaveBeenCalled();
    expect($window.open).toHaveBeenCalledWith('http://hakshop.myshopify.com/products/usb-rubber-ducky-deluxe?variant=353378649');
  }));
});
