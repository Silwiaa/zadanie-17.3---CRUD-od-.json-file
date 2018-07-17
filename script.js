var express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    
    app = express(),
    stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
    fs.readFile('./test,json', 'utf-8', function(err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
});
    
app.post('/updateNote/:note', function(req, res) {
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if(err) throw err;
        console.log('file updated');
        res.send(stringifyfile);
    });
});

app.listen(3000);