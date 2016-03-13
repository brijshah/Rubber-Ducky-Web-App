var fs = require('fs');
var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();


//endpoint for payload
router.post('/processPayload', function(req, res) {
	console.log(req.query);
	if(req.query.os == 'Windows' && req.query.rec == 'Computer Information' && req.query.report == 'FTP Report') {
		res.send('http://localhost:3033/payload/windows/compinfo/ftp/inject.zip')
	}
});

//endpoint for encoder
router.post('/makeFile', function(req,res){
	console.log(req.body.content);
	fs.writeFile('./public/encode/inject.txt', req.body.content, function(err){
		if (err) {
			console.log(err);
		}
		exec('java -jar duckencode.jar -i ./public/encode/inject.txt -o ./public/encode/inject.bin');
		res.send({link: "http://localhost:3033/encode/inject.bin"});
	});
});

//endpoint for decoder, broken
router.post('/fileupload', function(req, res) {
	console.log(req.file, req.body, req.files);
	res.status(200).send('uploaded');
});

//object that is retured as a result of require call
module.exports = router;
