'use strict';

/**
 * @ngdoc overview
 * @name rubberDuckyWeb2App
 * @description
 * # rubberDuckyWeb2App
 *
 * Main module of the application.
 */
angular
  .module('rubberDuckyWeb2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/encoder', {
        templateUrl: 'views/encoder.html',
        controller: 'EncoderCtrl',
        controllerAs: 'encoder'
      })
      .when('/payload', {
        templateUrl: 'views/payload.html',
        controller: 'PayloadCtrl',
        controllerAs: 'payload'
      })
      .when('/decoder', {
        templateUrl: 'views/decoder.html',
        controller: 'DecoderCtrl',
        controllerAs: 'Decoder'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl',
        controllerAs: 'Help'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
