
var express = require("express")
  , redirect = require("express-redirect");
 
var app = express();
redirect(app); 
var router = express.Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(router);
require('./routes/admin/payment')(app);
require('./routes/admin/redirect')(app);
require('./routes/admin/response')(app);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

module.exports = app;
