import express from 'express'
import MobileDetect from 'mobile-detect'
let router=express.Router();

router.get('/', function(req, res){
  let md = new MobileDetect(req.headers['user-agent']);
  console.log( md.mobile() );
  console.log( md.phone() );
  console.log( md.tablet() );
  console.log( md.userAgent() );

  res.sendFile('/index.html', {root:__dirname});
});

module.exports = router;
