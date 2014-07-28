var express = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {
    layout: false
});
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/partials/:name', function(req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
});

app.use('/', router);

app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});