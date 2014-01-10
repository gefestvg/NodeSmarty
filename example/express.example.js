var express = require('express');
var app = express();

/**
 * template engine
 */
var NodeSmarty = require('../NodeSmarty');
var Template = NodeSmarty();

Template
	.setTemplateDir('./views/templates/')
	.setCompileDir('./views/compile/')
	.setCacheDir('./views/cache/'); 
   
   
Template.assign({
	'TITLE':'NodeSmarty',
	'copyright':'NodeSmarty.com'
});
   

app.get('/', function(req, res){
	var Final = Template.fetchSync('data.html');
	
	res.send(Final);
});

app.listen(3000);