
var express = require('express');
var app = express();

var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.set('view engine', 'ejs');

var drinks = [];


app.post('/cls', function(req, res){
  total = 0;
  drinks = [];

  res.render('pages/index', {
      drinks: drinks,
      tagline: tagline,
      total: total
  });


});



app.post('/action', function(req, res){


drinks.push({name: req.body.getraenk, drunkness: req.body.level});

let total = 0;
drinks.map((element)=>{
let tempwert = parseInt(element.drunkness);
total = total + tempwert;
});


  res.render('pages/index', {
      drinks: drinks,
      tagline: tagline,
      total: total
  });

});

app.get('/', function(req, res) {
    var drinks = [];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline,
        total: 0
    });
});




app.get('/test', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ username: 'Flavio' });
});

app.post('/test', function (req, res) {
res.header("Access-Control-Allow-Origin", "*");
res.json({ username: 'Flavio' });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
