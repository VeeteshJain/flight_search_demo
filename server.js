var express = require('express');
var app     = express();
var maxAge  = 31557600000;

app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public' ));
app.use('/bower_components', express.static(__dirname + '/bower_components' ));

app.get('/*', function(req,res)
{
    res.sendfile(__dirname + '/public/index.html');
});

app.listen(3000);

console.log('Listening on port 3000');