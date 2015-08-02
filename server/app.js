var express = require('express');
var request = require('request');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

app.get('/track-info', function (req, res) {

  var options = {
	url: 'http://www.thecurrent.org/playlist/metadata/current'
	}

	request(options, function(err, response, body) {
		if (err) return res.send(err);
		
		res.send(body);
	});

});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});