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
        // var request = {
        //   url: 'http://localhost:3033/makeFile',
        //   method: 'POST',
        //   headers: {'Content-Type': 'application/json'},
        //   data: {content: $scope.textContent}
        // };
        // $http(request);

  			$http.post('http://localhost:3033/makeFile', {content: $scope.textContent}).then(function(response){
  				$scope.downloadReady = true;
  				$scope.downloadBinFile = response.data.link;
  			});
  		};
});
