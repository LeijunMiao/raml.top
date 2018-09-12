var express = require('express');
var cons = require('consolidate');
var swig = require('swig');

module.exports = function(app){
    app.engine('html', cons.swig);
    app.use(express.static(config.root + '/public'));
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'html');
}