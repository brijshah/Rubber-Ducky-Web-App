'use strict';

/**
 * @ngdoc function
 * @name rubberDuckyWeb2App.controller:EncoderCtrl
 * @description
 * # EncoderCtrl
 * Controller of the rubberDuckyWeb2App
 */
angular.module('rubberDuckyWeb2App')
  	.controller('EncoderCtrl', function ($scope, $http) {
  		$scope.textContent = "";
  		$scope.downloadReady = false;
  		$scope.downloadTextFile = "";

  		$scope.makeFile = function(){
  			$http.post('http://localhost:3033/makeFile', {content: $scope.textContent}).then(function(response){
  				console.log(response);
  				$scope.downloadReady = true;
  				$scope.downloadBinFile = response.data.link;

  			});
  		};
});
