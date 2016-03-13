'use strict';

/**
 * @ngdoc function
 * @name rubberDuckyWeb2App.controller:DecoderCtrl
 * @description
 * # DecoderCtrl
 * Controller of the rubberDuckyWeb2App
 */
angular.module('rubberDuckyWeb2App')
  .controller('DecoderCtrl', function ($scope, $http, Upload) {
  	$scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

  	$scope.upload = function (file) {
  		if (file && file.length) {
	        $scope.file = file[0];
	  		console.log($scope.file, '------');
	    }

	    $http.post('http://localhost:3033/fileupload', 
	    	{data: file}, 
            {headers: {
            	'Content-Type': 'application/json'
            }
        }).then(function(response) {
            	console.log('response');
            });

 
        // Upload.upload({
        //     url: 'http://localhost:3033/fileupload',
        //     file: $scope.file,
        //     headers: {
        //     	'Content-Type': 'application/json'
        //     }
        // }).then(function (resp) {
        //     console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        // }, function (resp) {
        //     console.log('Error status: ' + resp.status);
        // }, function (evt) {
        //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        //     console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        // });
    };
  });
