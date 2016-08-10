var db = require('./db');
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/notes', function (req, res) {
    res.json({notes: db.findAll()});
});

app.get('/notes/:id', function (req, res) {
    var note = db.finById(req.params.id);
    if(note) {
        res.json({note: note});
    } else {
        res.sendStatus(404);
    }
});

app.post('/note', function (req, res) {
    res.json({note: db.create(req.body.note)});
});

module.exports = app;
