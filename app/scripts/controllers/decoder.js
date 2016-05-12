'use strict';

/**
 * @ngdoc function
 * @name rubberDuckyWeb2App.controller:DecoderCtrl
 * @description
 * # DecoderCtrl
 * Controller of the rubberDuckyWeb2App
 */
angular.module('rubberDuckyWeb2App')
  .controller('DecoderCtrl', function ($scope, $http, $timeout, Upload) {

    $scope.downloadReady = false;

  	$scope.upload = function (file) {
        console.log(file)
        var fileName = file.name;

        Upload.upload({
            url: 'http://localhost:3033/fileupload',
            data: {file: file[0]},
        }).then(function (resp) {
            console.log('Success ' + fileName + ' uploaded. Response: ' + resp.data);
            //The below will output the filename in inspect console
            //console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.data);
            console.log(resp.data);
            $scope.downloadTextFile = resp.data.filePath;
            $timeout(function() {
                $http.get(resp.data.filePath).success( function(response) {
                    $scope.fileContents = response;
                });
            }, 500);
            console.log($scope.downloadTextFile)
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
  });
