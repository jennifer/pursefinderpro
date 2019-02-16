var express = require('express');
var router = express.Router();
const aws = require('aws-sdk');
const config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get S3 images using async
(async function() {
  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: aws.config.accessKeyId,
      secretAccessKey: aws.config.secretAccessKey,
      region: aws.config.region
    });
    const s3 = new aws.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'coach-catalog'
    });
    console.log(response);
  }
  
  catch (e) {
    console.log('error', e);
  }

})();

module.exports = router;