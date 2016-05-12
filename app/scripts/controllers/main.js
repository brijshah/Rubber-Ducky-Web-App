'use strict';

/**
 * @ngdoc function
 * @name rubberDuckyWeb2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rubberDuckyWeb2App
 */
angular.module('rubberDuckyWeb2App')
  .controller('MainCtrl', function ($scope, $window) {

    $scope.openTab = function() {
        $scope.url = 'http://hakshop.myshopify.com/products/usb-rubber-ducky-deluxe?variant=353378649';
        $window.open('http://hakshop.myshopify.com/products/usb-rubber-ducky-deluxe?variant=353378649');
    }

  });
