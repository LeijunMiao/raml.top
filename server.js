// require('./connection');

var express = require('express');
var app = express();

global.config = require('./config/config'); //基础配置

require('./config/express')(app); //express 配置
require('./config/routes')(app); //route 配置

app.listen(8831);

console.info('server started on port 8831');


