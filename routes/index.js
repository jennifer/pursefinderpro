var express = require('express');
var router = express.Router();
const AWS = require('AWS-sdk');
const config = require('../config.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get S3 images using async
(async function() {
  try {
    AWS.config.setPromisesDependency();
    AWS.config.update({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
      region: 'us-west-2'
    });
    const s3 = new AWS.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'coach-catalog',
      Prefix: ''
    }).promise();
    console.log(response);
  }
  catch (e) {
    console.log('error', e);
  }

})();

module.exports = router;