'use strict';

/**
 * @ngdoc function
 * @name rubberDuckyWeb2App.controller:PayloadCtrl
 * @description
 * # PayloadCtrl
 * Controller of the rubberDuckyWeb2App
 */
angular.module('rubberDuckyWeb2App')
  .controller('PayloadCtrl', function ($scope, $http, $httpParamSerializerJQLike) {

  	//parameters to send in json form to backend
    $scope.payloadParams = {
    	os: null,
    	rec: null,
    	exp: null,
    	report: null
    };

    //watch state of os list to populate corresponding recon and exploit lists
    $scope.$watch('payloadParams.os', function(newSelection){
    	$scope.payloadParams.rec = $scope.payloadParams.exp = $scope.payloadParams.report = null;
    	if(newSelection === 'Windows'){
    		$scope.recOptions = winRec;
    		$scope.expOptions = winExp;
    		$scope.reportOptions = winRep;
    	} else if(newSelection === 'OSX'){
    		$scope.recOptions = osxRec;
    		$scope.expOptions = osxExp;
    		$scope.reportOptions = osxRep;
    	} else if(newSelection === 'Linux'){
    		$scope.recOptions = linuxRec;
    		$scope.expOptions = linuxExp;
    		$scope.reportOptions = linuxRep;
    	}
    });

    //if recon is selected, exploit is unselected
    $scope.$watch('payloadParams.rec', function(recSelection){
    	if(recSelection){
    		$scope.payloadParams.exp = null;
    	}
    });

    //if exploit is selected, recon is unselected
    $scope.$watch('payloadParams.exp', function(expSelection){
    	if(expSelection){
    		$scope.payloadParams.rec = null;
    	}
    });

  	//$scope.osObjects = [];

    //list of Windows Reconnaissance scripts
    var winRec = [
		{name: 'Computer Information', value:false},
		{name: 'User Information', value:false},
		{name: 'USB Information', value:false},
		{name: 'Drive Information', value:false},
		{name: 'Program Information', value:false},
		{name: 'Installed Updates', value:false},
		{name: 'User Documents', value:false},
		{name: 'Basic Network Information', value:false},
		{name: 'Network Scan', value:false},
		{name: 'Port Scan', value:false},
		{name: 'Wireless Profile', value:false},
		{name: 'Screen Capture', value:false},
		{name: 'Extract SAM', value:false},
		{name: 'Chrome Profile', value:false},
		{name: 'Firefox Profile', value:false}
    ];

    //list of OSX Reconnaissance scripts
    var osxRec = [
		{name:'Computer Information', value:false},
		{name: 'User Information', value:false},
		{name: 'USB Information', value:false},
		{name: 'Drive Information', value:false},
		{name: 'Program Information', value:false},
		{name: 'Port Scan', value:false},
		{name: 'Screen Capture', value:false},
		{name: 'Chrome Profile', value:false},
		{name: 'Firefox Profile', value:false},
    ];

    //list of Linux Reconnaissance scripts
    var linuxRec = [
		{name:'Computer Information', value:false},
		{name: 'User Information', value:false},
		{name: 'USB Information', value:false},
    ];

    //not sure if needed still?
  	$scope.os = [
		{name:'Windows'},
		{name:'OSX'},
		{name:'Linux'}
  	];

	var winExp = [
		{name:'Disable Firewall', value:false},
		{name:'Find & FTP', value:false},
		{name:'Add User', value:false},
		{name:'Open Port', value:false},
		{name:'Access Point', value:false},
		{name:'Share C Drive', value:false},
		{name:'Enable RDP', value:false},
		{name:'Reverse Shell', value:false},
		{name:'DNS Poison', value:false},
		{name:'Remove Windows Update', value:false}
    ];

    var osxExp = [
		{name:'Disable Firewall', value:false},
		{name:'Find & FTP', value:false},
		{name:'Add User', value:false},
		{name:'Open Port', value:false},
		{name:'Reverse Shell', value:false},
		{name:'DNS Poison', value:false}
    ];

    var linuxExp = [
		{name:'Find & FTP', value:false},
		{name:'Reverse Shell', value:false},
    ];

	var winRep = [
		{name:'FTP Report', value:false},
		{name:'Local Report', value:false},
		{name:'Email Report', value:false},
		{name:'Save To USB', value:false}
	];

	var osxRep = [
		{name:'FTP Report', value:false},
		{name:'Local Report', value:false},
		{name:'Email Report', value:false},
		{name:'Save To OSX USB', value:false}
	];

	var linuxRep = [
		{name:'FTP Report', value:false},
		{name:'Local Report', value:false},
		{name:'Email Report', value:false},
		{name:'Save To Linux USB', value:false}
	];

	//send parameters collected to backend for processing
	$scope.postPayload = function() {
		if($scope.payloadParams.os !== null && $scope.payloadParams.report !== null && ($scope.payloadParams.rec !== null || $scope.payloadParams.exp !== null)) {
			$scope.downloadReady = true;
            $scope.errors = " ";
		} else {
			$scope.errors = 'Please select appropriate scripts.';
		}
		$http.post('http://localhost:3033/processPayload?' + $httpParamSerializerJQLike($scope.payloadParams)).
			success(function(data){
				$scope.downloadTextFile = data;
			});
	};

});
