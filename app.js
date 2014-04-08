var express = require('express');
var app = express();

// The number of milliseconds in one day
var oneDay = 86400000;

// Use compress middleware to gzip content
app.use(express.compress());

// Serve up content from public directory
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.listen(process.env.OPENSHIFT_INTERNAL_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
