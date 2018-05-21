var checksum = require('../../model/checksum');
var config = require('../../config/config');
module.exports = function (app) {
	app.post('/response', function(req,res){
        console.log("in response post");
        var paramlist = req.body;
        if(checksum.verifychecksum(paramlist, config.PAYTM_MERCHANT_KEY))
        {
               console.log("success");
               res.render('response.ejs',{ 'restdata' : "true" ,'paramlist' : paramlist});
        }else
        {
           console.log("failure");
          res.render('response.ejs',{ 'restdata' : "false" , 'paramlist' : paramlist});
        };
  });
};