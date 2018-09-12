
module.exports = function(app){
    app.get('/', function(req,res){
        res.render('index');
    });
    app.get('/developers/design-your-api', function(req,res){
        res.render('design-your-api');
    });
    app.get('/developers/build-your-api', function(req,res){
        res.render('build-your-api');
    });
    app.get('/developers/test-your-api', function(req,res){
        res.render('test-your-api');
    });
    app.get('/developers/document-your-api', function(req,res){
        res.render('document-your-api');
    });
    app.get('/developers/share-support-your-api', function(req,res){
        res.render('share-support-your-api');
    });
    app.get('/developers/raml-100-tutorial', function(req,res){
        res.render('raml-100-tutorial');
    });
    app.get('/developers/raml-200-tutorial', function(req,res){
        res.render('raml-200-tutorial');
    });
    app.get('/projects', function(req,res){
        res.render('projects');
    });
    
};