var fs = require('fs');
var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

//endpoint for payload
router.post('/processPayload', function(req, res) {
	console.log(req.query);
	var url_parts = {
		'os' : {
			'Windows' : 'windows',
			'Linux' : 'linux',
			'OSX' : 'osx'
		},
		'rec' : {
			'Computer Information' : 'compinfo',
			'User Information' : 'userinfo',
			'USB Information': 'usbinfo',
			'Drive Information' : 'driveinfo',
			'Program Information' : 'programinfo',
			'Installed Updates' : 'installedupdates',
			'User Documents' : 'userdocs',
			'Basic Network Information' : 'netinfo',
			'Network Scan' : 'netscan',
			'Port Scan' : 'portscan',
			'Wireless Profile' : 'wirelessprofile',
			'Screen Capture' : 'screencap',
			'Extract SAM' : 'extractsam',
			'Chrome Profile' : 'chromeprofile',
			'Firefox Profile' : 'firefoxprofile'
		},
		'exp' : {
			'Disable Firewall' : 'disablefirewall',
			'Find & FTP' : 'findftp',
			'Add User' : 'adduser',
			'Open Port' : 'openport',
			'Access Point' : 'accesspoint',
			'Share C Drive' : 'cdrive',
			'Enable RDP' : 'rdp',
			'Reverse Shell' : 'reverseshell',
			'DNS Poison' : 'dns',
			'Remove Windows Update' : 'removewinupdate'
		},
		'report' : {
			'Local Report' : 'local'
		}
	};
	if (req.query.rec) {
		res.send (
			'http://localhost:3033/payload/'
			+ url_parts.os[req.query.os]
			+ '/recon'
			+ '/' + url_parts.rec[req.query.rec]
			+ '/' + url_parts.report[req.query.report]
			+ '/inject.zip'
			);
	} else {
		res.send (
			'http://localhost:3033/payload/'
			+ url_parts.os[req.query.os]
			+ '/exploit'
			+ '/' + url_parts.exp[req.query.exp]
			+ '/inject.zip'
			);
	}
});

//endpoint for encoder
router.post('/makeFile', function(req,res){
	console.log(req.body.content);
	fs.writeFile('./public/encode/inject.txt', req.body.content, function(err){
		if (err) {
			console.log(err);
		}
		exec('java -jar encoder.jar -i ./public/encode/inject.txt -o ./public/encode/inject.bin');
		res.send({link: "http://localhost:3033/encode/inject.bin"});
		//exec('rm -rf inject.*')
	});
});

//endpoint for decoder
router.post('/fileupload', upload.single('file'), function(req, res) {
	console.log(req.file, req.body, req.files);
	var newPath = `${req.file.destination}${req.file.originalname}`
	fs.rename(req.file.path, newPath, function(err, file) {
		console.log(file, err);
		const convertedFilePath = `/uploads/inject.txt`
		exec(`python DuckDecoder.py decode ${newPath} > ${convertedFilePath}`);
		res.status(200).json({filePath: `http://localhost:3033/${convertedFilePath}`});
	})
});

//object that is retured as a result of require call
module.exports = router;
