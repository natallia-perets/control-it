var express = require('express'),
    app = express(),
    path = require('path'); 

 app.use(express.static(__dirname + '/app')); 

app.get('/', function(req, res){
    res.sendFile('index.html', { root: path.join(__dirname, '/app') });
});

app.listen(9000);

