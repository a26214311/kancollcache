var express = require('express');
var app = express();
var superagent = require('superagent');

var fs= require('fs');
var path = require('path');

app.listen('8088', function(){
    console.log('server started');
});


//{'Content-Type': 'image/png', 'Cache-Control': 'no-cache'}

var img={};

function loadfiles(imgname){
	
}


app.get('/test', function(req, res) {
	
	
	res.set({
		  'Content-Type': 'image/png',
		  'Cache-Control': 'no-cache'
		});
    superagent.get('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png')
    .end(function(err, sres){
    	fs.writeFile("3",sres.body);
    	res.send(sres.body);
    });
	
//    sreq.on('end', function(err, sres){
//
//    });
//    sreq.pipe(res);



});
