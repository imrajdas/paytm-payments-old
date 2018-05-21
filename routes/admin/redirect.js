var checksum = require('../../model/checksum');

module.exports = function (app) {
	app.get('/redirect', function(req,res){
    console.log("in pgdirect");
    console.log("Payment....");
    res.render('redirect.ejs');
  });
};