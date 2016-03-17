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

    $scope.downloadReady = false;

    // $scope.$watch('files', function () {
    //     $scope.upload($scope.files);
    // });

  	$scope.upload = function (file) {
        console.log(file)

        Upload.upload({
            url: 'http://localhost:3033/fileupload',
            data: {file: file[0]},
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            console.log(resp.data);
            $scope.downloadTextFile = resp.data.filePath;
            console.log($scope.downloadTextFile)
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
  });
