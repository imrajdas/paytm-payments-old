var checksum = require('../../model/checksum');
var config = require('../../config/config');

module.exports = function (app) {
// Get method
 app.get('/', function(req,res){
    console.log("Payment Page");
    res.render('payment.ejs',{'config' : config});
  });
// Post method
  app.post('/',function(req, res) {
        console.log("POST Order start");
        var paramlist = req.body;
        var paramarray = new Array();
        console.log('das',paramlist);
        for (name in paramlist)
        {
          if (name == 'PAYTM_MERCHANT_KEY') {
               var PAYTM_MERCHANT_KEY = paramlist[name] ; 
            }else
            { 
            paramarray[name] = paramlist[name] ;
            }
        }
        paramarray['CALLBACK_URL'] = 'http://localhost:3000/response';  // in case if you want to send callback
        console.log('sakti', paramarray);

        checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function (err, result) 
        {
              console.log('raj',result);
           res.render('redirect.ejs',{ 'restdata' : result });
        });
        console.log("Post");
 });
};