'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('rubberDuckyWeb2App'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    // route = $route;
    AboutCtrl = $controller('AboutCtrl as aboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // it('should have about route with right template and controller', function () {
  //   var aboutRoute = route.routes['/about'];
  //   expect(aboutRoute).toBeDefine();
  //   expect(aboutRoute.controller).toEqual('AboutCtrl');
  //   expect(aboutRoute.templateUrl).toEqual('views/about.html');
  // });
});
