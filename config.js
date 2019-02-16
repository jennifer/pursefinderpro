'use strict';

var aws = require('aws-sdk');

aws.config.accessKeyId = process.env.MY_KEY;
aws.config.secretAccessKey = process.env.SECRET_KEY;
aws.config.region = 'us-west-2';