var fs = require('fs');
var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();


var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

//endpoint for payload
router.post('/processPayload', function(req, res) {
	console.log(req.query);
	if(req.query.os == 'Windows' && req.query.rec == 'Computer Information' && req.query.report == 'FTP Report') {
		res.send('http://localhost:3033/payload/windows/recon/compinfo/ftp/inject.zip')
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
