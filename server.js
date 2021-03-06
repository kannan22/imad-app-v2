var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'kannan22',
    database: 'kannan22',
    host: 'db.imad.hasura.app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles = {
    articleone : {
    title : 'Article One- Kannan',
    heading : 'Article One',
    date : 'Feb 11, 2017',
    content : `
        <p>
                
                This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
    
            </p>
            
            <p>
                
                This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
    
            </p>
            
            <p>
                
                This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
    
            </p>`
    },    
    articletwo : {
    title : 'Article two- Kannan',
    heading : 'Article Two',
    date : 'Feb 7, 2017',
    content : `<p>
                
                This is the content for my second article. This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
    
            /p>`},
    articlethree : {
    title : 'Article Three- Kannan',
    heading : 'Article Three',
    date : 'Feb 7, 2017',
    content : `<p>
                
                This is the content for my third article. This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.
    
            </p>
            `}
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `<html>
    
    <head>
        
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        ${heading}
        <h4></h4>
        <div>
            ${date}
            
        </div>
        <div>
            
          ${content}
          
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);
app.get('/test-db', function(req, res){
    pool.query('SELECT * FROM test' , function(err, result){
        if (err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result.rows));
        }
    });
    
});
// make a select request
// return a response with results
var counter = 0;
app.get('/counter', function(req,res){
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/:articleName', function(req,res){
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name',function(req,res){
   //get the name from request object
   var name; //1000
   
   name.push(name);
   
   res.send(names);//1000
   
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
